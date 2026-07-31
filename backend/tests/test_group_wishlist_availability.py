"""Groups, the shared group-wishlist, and date-availability endpoints — all
real accounts (via the `auth_headers` fixture), no mocks."""
import secrets


def _signup(client, name="Member"):
    email = f"test-{secrets.token_hex(6)}@example.com"
    r = client.post("/api/auth/signup", json={"email": email, "password": "password123", "name": name})
    assert r.status_code == 201, r.text
    return {"Authorization": f"Bearer {r.json()['token']}"}


# --------------------------------------------------------------------------- #
#  Groups
# --------------------------------------------------------------------------- #
def test_create_group_makes_creator_the_only_member(client, auth_headers):
    r = client.post("/api/group", json={"name": "Summer Trip"}, headers=auth_headers)
    assert r.status_code == 201
    body = r.json()
    assert body["name"] == "Summer Trip"
    assert len(body["code"]) >= 4
    assert len(body["members"]) == 1


def test_create_group_requires_auth(client):
    assert client.post("/api/group", json={"name": "No Auth"}).status_code == 401


def test_join_group_by_code_adds_member(client, auth_headers):
    group = client.post("/api/group", json={"name": "Trip"}, headers=auth_headers).json()
    bob_headers = _signup(client, "Bob")

    r = client.post("/api/group/join", json={"code": group["code"]}, headers=bob_headers)
    assert r.status_code == 200
    assert len(r.json()["members"]) == 2


def test_join_group_invalid_code_404s(client, auth_headers):
    assert client.post("/api/group/join", json={"code": "NOTREAL"}, headers=auth_headers).status_code == 404


def test_get_group_forbidden_for_non_member(client, auth_headers):
    group = client.post("/api/group", json={"name": "Private Trip"}, headers=auth_headers).json()
    stranger_headers = _signup(client, "Stranger")
    r = client.get(f"/api/group/{group['id']}", headers=stranger_headers)
    assert r.status_code == 403


# --------------------------------------------------------------------------- #
#  Shared wishlist — the "let others add to the wishlist" feature
# --------------------------------------------------------------------------- #
def test_wishlist_add_is_visible_to_other_members(client, auth_headers):
    group = client.post("/api/group", json={"name": "Trip"}, headers=auth_headers).json()
    bob_headers = _signup(client, "Bob")
    client.post("/api/group/join", json={"code": group["code"]}, headers=bob_headers)

    add = client.post(
        f"/api/group/{group['id']}/wishlist",
        json={"destination_id": "paris", "name": "Paris", "country": "France"},
        headers=bob_headers,
    )
    assert add.status_code == 201
    assert add.json()["added_by"] == "Bob"

    # The group creator (a different user) sees Bob's addition.
    listing = client.get(f"/api/group/{group['id']}/wishlist", headers=auth_headers)
    assert listing.status_code == 200
    assert any(item["name"] == "Paris" and item["added_by"] == "Bob" for item in listing.json())


def test_wishlist_forbidden_for_non_member(client, auth_headers):
    group = client.post("/api/group", json={"name": "Trip"}, headers=auth_headers).json()
    stranger_headers = _signup(client, "Stranger")
    r = client.post(
        f"/api/group/{group['id']}/wishlist",
        json={"destination_id": "tokyo", "name": "Tokyo"}, headers=stranger_headers,
    )
    assert r.status_code == 403


def test_wishlist_remove(client, auth_headers):
    group = client.post("/api/group", json={"name": "Trip"}, headers=auth_headers).json()
    item = client.post(
        f"/api/group/{group['id']}/wishlist",
        json={"destination_id": "rio", "name": "Rio"}, headers=auth_headers,
    ).json()
    r = client.delete(f"/api/group/{group['id']}/wishlist/{item['id']}", headers=auth_headers)
    assert r.status_code == 200
    listing = client.get(f"/api/group/{group['id']}/wishlist", headers=auth_headers).json()
    assert all(i["id"] != item["id"] for i in listing)


# --------------------------------------------------------------------------- #
#  Availability overlap — "which dates is everyone free"
# --------------------------------------------------------------------------- #
def test_availability_overlap_across_two_members(client, auth_headers):
    group = client.post("/api/group", json={"name": "Trip"}, headers=auth_headers).json()
    bob_headers = _signup(client, "Bob")
    client.post("/api/group/join", json={"code": group["code"]}, headers=bob_headers)

    client.post(f"/api/group/{group['id']}/availability",
                json={"start_date": "2026-08-01", "end_date": "2026-08-15"}, headers=auth_headers)
    client.post(f"/api/group/{group['id']}/availability",
                json={"start_date": "2026-08-10", "end_date": "2026-08-20"}, headers=bob_headers)

    r = client.get(f"/api/group/{group['id']}/availability/overlap", headers=auth_headers)
    assert r.status_code == 200
    windows = r.json()
    assert windows == [{"start_date": "2026-08-10", "end_date": "2026-08-15"}]


def test_availability_end_before_start_rejected(client, auth_headers):
    group = client.post("/api/group", json={"name": "Trip"}, headers=auth_headers).json()
    r = client.post(f"/api/group/{group['id']}/availability",
                    json={"start_date": "2026-08-15", "end_date": "2026-08-01"}, headers=auth_headers)
    assert r.status_code == 400
