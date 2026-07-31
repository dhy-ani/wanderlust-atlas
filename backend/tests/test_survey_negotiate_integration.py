"""End-to-end: two real accounts join a group, submit their preference survey
(persisted to the DB Identity table), and the negotiation endpoint pulls those
DB-backed identities to run a real negotiation — exercising the full auth ->
DB -> mediator chain, not just each piece in isolation."""
import secrets


def _signup(client, name):
    email = f"test-{secrets.token_hex(6)}@example.com"
    r = client.post("/api/auth/signup", json={"email": email, "password": "password123", "name": name})
    assert r.status_code == 201
    return {"Authorization": f"Bearer {r.json()['token']}"}


def test_survey_to_negotiation_end_to_end(client, auth_headers):
    group = client.post("/api/group", json={"name": "Paris Trip"}, headers=auth_headers).json()
    bob_headers = _signup(client, "Bob")
    client.post("/api/group/join", json={"code": group["code"]}, headers=bob_headers)

    for headers, likes, dislikes in [(auth_headers, ["museums", "history"], ["nightlife"]),
                                      (bob_headers, ["museums", "food"], ["nightlife"])]:
        r = client.post("/api/survey/start", json={
            "group_id": group["id"], "budget_max": 2000, "likes": likes, "dislikes": dislikes,
        }, headers=headers)
        assert r.status_code == 200, r.text

    result = client.post("/api/negotiate/run", json={
        "group_id": group["id"], "destination_id": "paris", "max_rounds": 5,
    }, headers=auth_headers)
    assert result.status_code == 200, result.text
    body = result.json()
    assert len(body["rounds"]) >= 1
    assert body["llm_calls_made"] == 0  # no key configured in test env -> rule-based only
    assert {"Test User", "Bob"} <= {v["member_name"] for v in body["rounds"][0]["verdicts"]}


def test_negotiate_requires_group_membership(client, auth_headers):
    group = client.post("/api/group", json={"name": "Trip"}, headers=auth_headers).json()
    stranger_headers = _signup(client, "Stranger")
    r = client.post("/api/negotiate/run", json={
        "group_id": group["id"], "destination_id": "paris",
    }, headers=stranger_headers)
    assert r.status_code == 403


def test_negotiate_with_no_surveys_submitted_404s(client, auth_headers):
    group = client.post("/api/group", json={"name": "Empty Trip"}, headers=auth_headers).json()
    r = client.post("/api/negotiate/run", json={
        "group_id": group["id"], "destination_id": "paris",
    }, headers=auth_headers)
    assert r.status_code == 404
