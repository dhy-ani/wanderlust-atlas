"""Places search: 'find famous places near a destination' and free-text lookup.

Uses Google Places (Text Search + Nearby Search) when a key is present, otherwise
falls back to keyless OpenStreetMap Nominatim, and finally to mock POIs. This backs
the frontend's "search other nearby famous places / type it in manually" feature.
"""
from __future__ import annotations

import httpx

from app.config import get_settings
from app.models.schemas import Place, PlacesResponse
from app.services.mock_data import mock_places


async def _google_nearby(lat: float, lng: float, query: str, radius_m: int) -> list[Place]:
    s = get_settings()
    async with httpx.AsyncClient(timeout=15) as client:
        if query:
            r = await client.get(
                "https://maps.googleapis.com/maps/api/place/textsearch/json",
                params={"query": query, "location": f"{lat},{lng}",
                        "radius": radius_m, "key": s.google_places_api_key},
            )
        else:
            r = await client.get(
                "https://maps.googleapis.com/maps/api/place/nearbysearch/json",
                params={"location": f"{lat},{lng}", "radius": radius_m,
                        "type": "tourist_attraction", "key": s.google_places_api_key},
            )
        r.raise_for_status()
        results = r.json().get("results", [])[:10]
        out = []
        for p in results:
            loc = p["geometry"]["location"]
            out.append(Place(
                name=p.get("name", "Unknown"), lat=loc["lat"], lng=loc["lng"],
                category=(p.get("types") or ["poi"])[0], address=p.get("formatted_address"),
                rating=p.get("rating"), source="google",
            ))
        return out


async def _nominatim(query: str, lat: float, lng: float) -> list[Place]:
    """Keyless OSM search — bounded to a box around the destination."""
    box = 1.2  # degrees
    async with httpx.AsyncClient(timeout=15, headers={"User-Agent": "wanderlust-atlas/1.0"}) as client:
        r = await client.get(
            "https://nominatim.openstreetmap.org/search",
            params={"q": query or "tourist attraction", "format": "jsonv2", "limit": 10,
                    "viewbox": f"{lng-box},{lat+box},{lng+box},{lat-box}", "bounded": 1},
        )
        r.raise_for_status()
        out = []
        for p in r.json():
            out.append(Place(
                name=p.get("display_name", "").split(",")[0], lat=float(p["lat"]),
                lng=float(p["lon"]), category=p.get("type"),
                address=p.get("display_name"), source="nominatim",
            ))
        return out


async def geocode(query: str) -> PlacesResponse:
    """Unbounded, worldwide place lookup (for 'add any destination by name').
    Google Text Search when keyed, else keyless OSM/Nominatim."""
    s = get_settings()
    if s.has_places:
        try:
            async with httpx.AsyncClient(timeout=15) as client:
                r = await client.get(
                    "https://maps.googleapis.com/maps/api/place/textsearch/json",
                    params={"query": query, "key": s.google_places_api_key},
                )
                r.raise_for_status()
                out = []
                for p in r.json().get("results", [])[:8]:
                    loc = p["geometry"]["location"]
                    out.append(Place(name=p.get("name", "?"), lat=loc["lat"], lng=loc["lng"],
                                     address=p.get("formatted_address"),
                                     country=(p.get("formatted_address", "").split(",")[-1].strip() or None),
                                     rating=p.get("rating"), source="google"))
                if out:
                    return PlacesResponse(query=query, results=out, source="google")
        except Exception as exc:
            print(f"[google-geocode] fallback: {exc}")
    try:
        async with httpx.AsyncClient(timeout=15, headers={"User-Agent": "wanderlust-atlas/1.0"}) as client:
            r = await client.get(
                "https://nominatim.openstreetmap.org/search",
                params={"q": query, "format": "jsonv2", "limit": 8, "addressdetails": 1},
            )
            r.raise_for_status()
            out = []
            for p in r.json():
                addr = p.get("address", {})
                out.append(Place(
                    name=p.get("display_name", "").split(",")[0], lat=float(p["lat"]), lng=float(p["lon"]),
                    category=p.get("type"), address=p.get("display_name"),
                    country=addr.get("country"), source="nominatim"))
            if out:
                return PlacesResponse(query=query, results=out, source="nominatim")
    except Exception as exc:
        print(f"[nominatim-geocode] fallback to mock: {exc}")
    return PlacesResponse(query=query, results=mock_places(query, 20, 0), source="mock")


async def search_places(query: str, lat: float, lng: float, radius_m: int = 40000) -> PlacesResponse:
    s = get_settings()
    if s.has_places:
        try:
            results = await _google_nearby(lat, lng, query, radius_m)
            if results:
                return PlacesResponse(query=query, results=results, source="google")
        except Exception as exc:
            print(f"[google-places] fallback: {exc}")
    # keyless fallback
    try:
        results = await _nominatim(query, lat, lng)
        if results:
            return PlacesResponse(query=query, results=results, source="nominatim")
    except Exception as exc:
        print(f"[nominatim] fallback to mock: {exc}")
    return PlacesResponse(query=query, results=mock_places(query, lat, lng), source="mock")
