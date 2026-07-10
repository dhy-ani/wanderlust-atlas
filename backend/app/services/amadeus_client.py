"""Amadeus Self-Service flight-search client.

Docs: https://developers.amadeus.com/self-service/category/flights
Flow: OAuth2 client-credentials -> Flight Offers Search. Falls back to mock data
if no credentials are configured or the request fails.
"""
from __future__ import annotations

import time
from datetime import date

import httpx

from app.config import get_settings
from app.models.schemas import FlightOffer, FlightSearchResponse
from app.services.destinations import by_id
from app.services.mock_data import mock_flight_offers

_token_cache: dict = {"token": None, "expires": 0.0}


async def _get_token(client: httpx.AsyncClient) -> str:
    s = get_settings()
    now = time.time()
    if _token_cache["token"] and _token_cache["expires"] > now + 30:
        return _token_cache["token"]
    resp = await client.post(
        f"{s.amadeus_base_url}/v1/security/oauth2/token",
        data={
            "grant_type": "client_credentials",
            "client_id": s.amadeus_client_id,
            "client_secret": s.amadeus_client_secret,
        },
        headers={"Content-Type": "application/x-www-form-urlencoded"},
    )
    resp.raise_for_status()
    data = resp.json()
    _token_cache["token"] = data["access_token"]
    _token_cache["expires"] = now + data.get("expires_in", 1799)
    return _token_cache["token"]


def _parse_offer(raw: dict, origin: str, dest_airport: str, depart: str, ret: str | None) -> FlightOffer:
    price = float(raw["price"]["grandTotal"])
    itineraries = raw.get("itineraries", [])
    segments = itineraries[0]["segments"] if itineraries else []
    stops = max(len(segments) - 1, 0)
    dur = itineraries[0].get("duration", "PT0H").replace("PT", "").replace("H", "h ").replace("M", "m").lower()
    carrier = segments[0]["carrierCode"] if segments else "??"
    return FlightOffer(
        origin=origin, destination=dest_airport, price_usd=round(price, 2),
        currency=raw["price"].get("currency", "USD"), airline=carrier,
        stops=stops, depart_date=depart, return_date=ret, duration=dur.strip(),
        source="amadeus",
    )


async def search_flights(origin: str, dest_id: str, depart: date, days_out: int) -> FlightSearchResponse:
    s = get_settings()
    dest = by_id(dest_id)
    dest_airport = dest["airport"]
    ret = (depart.replace(day=1))  # placeholder; real return computed below
    from datetime import timedelta
    ret = depart + timedelta(days=dest["days"])

    if not s.has_amadeus:
        offers = mock_flight_offers(origin, dest_id, depart, days_out)
        return FlightSearchResponse(origin=origin, destination=dest_airport,
                                    cheapest=offers[0], offers=offers, source="mock")

    try:
        async with httpx.AsyncClient(timeout=20) as client:
            token = await _get_token(client)
            resp = await client.get(
                f"{s.amadeus_base_url}/v2/shopping/flight-offers",
                params={
                    "originLocationCode": origin,
                    "destinationLocationCode": dest_airport,
                    "departureDate": depart.isoformat(),
                    "returnDate": ret.isoformat(),
                    "adults": 1,
                    "currencyCode": "USD",
                    "max": 8,
                },
                headers={"Authorization": f"Bearer {token}"},
            )
            resp.raise_for_status()
            raws = resp.json().get("data", [])
            offers = [_parse_offer(r, origin, dest_airport, depart.isoformat(), ret.isoformat()) for r in raws]
            offers.sort(key=lambda o: o.price_usd)
            if not offers:
                raise ValueError("empty result")
            return FlightSearchResponse(origin=origin, destination=dest_airport,
                                        cheapest=offers[0], offers=offers, source="amadeus")
    except Exception as exc:  # network / quota / parse -> graceful mock
        print(f"[amadeus] falling back to mock: {exc}")
        offers = mock_flight_offers(origin, dest_id, depart, days_out)
        return FlightSearchResponse(origin=origin, destination=dest_airport,
                                    cheapest=offers[0], offers=offers, source="mock")
