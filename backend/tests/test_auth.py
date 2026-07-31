"""Signup / login / session tests — real bcrypt hashing, real JWTs, no mocks needed."""
import secrets


def _unique_email() -> str:
    return f"test-{secrets.token_hex(6)}@example.com"


def test_signup_creates_account_and_returns_token(client):
    email = _unique_email()
    r = client.post("/api/auth/signup", json={"email": email, "password": "password123", "name": "Alice"})
    assert r.status_code == 201
    body = r.json()
    assert body["user"]["email"] == email
    assert body["user"]["name"] == "Alice"
    assert body["token"]


def test_signup_duplicate_email_rejected(client):
    email = _unique_email()
    client.post("/api/auth/signup", json={"email": email, "password": "password123", "name": "Alice"})
    r = client.post("/api/auth/signup", json={"email": email, "password": "different1", "name": "Bob"})
    assert r.status_code == 409


def test_signup_short_password_rejected(client):
    r = client.post("/api/auth/signup", json={"email": _unique_email(), "password": "short", "name": "Alice"})
    assert r.status_code == 422


def test_login_with_correct_password_succeeds(client):
    email = _unique_email()
    client.post("/api/auth/signup", json={"email": email, "password": "password123", "name": "Alice"})
    r = client.post("/api/auth/login", json={"email": email, "password": "password123"})
    assert r.status_code == 200
    assert r.json()["token"]


def test_login_with_wrong_password_rejected(client):
    email = _unique_email()
    client.post("/api/auth/signup", json={"email": email, "password": "password123", "name": "Alice"})
    r = client.post("/api/auth/login", json={"email": email, "password": "wrongpassword"})
    assert r.status_code == 401


def test_login_unknown_email_rejected(client):
    r = client.post("/api/auth/login", json={"email": _unique_email(), "password": "whatever1"})
    assert r.status_code == 401


def test_me_requires_token(client):
    assert client.get("/api/auth/me").status_code == 401


def test_me_with_valid_token_returns_user(client, auth_headers):
    r = client.get("/api/auth/me", headers=auth_headers)
    assert r.status_code == 200
    assert r.json()["name"] == "Test User"


def test_me_with_garbage_token_rejected(client):
    r = client.get("/api/auth/me", headers={"Authorization": "Bearer not-a-real-token"})
    assert r.status_code == 401
