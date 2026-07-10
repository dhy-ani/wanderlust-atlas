"""Search nearby famous places, or free-text lookup, to add to the map."""
from fastapi import APIRouter, Query

from app.models.schemas import PlacesResponse
from app.services.places_client import geocode, search_places

router = APIRouter(prefix="/api/places", tags=["places"])


@router.get("/search", response_model=PlacesResponse)
async def places_search(
    lat: float = Query(...),
    lng: float = Query(...),
    q: str = Query("", description="free-text query; empty = nearby attractions"),
    radius_m: int = Query(40000, ge=500, le=200000),
):
    return await search_places(q.strip(), lat, lng, radius_m)


@router.get("/geocode", response_model=PlacesResponse)
async def places_geocode(q: str = Query(..., min_length=1, description="place name to locate worldwide")):
    return await geocode(q.strip())
