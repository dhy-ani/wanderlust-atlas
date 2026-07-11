"""Ingest destinations.json + graph_seed.json into Neo4j as a queryable graph.

    NEO4J_URI=bolt://localhost:7687 NEO4J_PASSWORD=wanderlust123 \
        python -m scripts.ingest_graphrag

Builds:
    (:Place {id,name})-[:IS_IN]->(:City {name})-[:LOCATED_IN]->(:Country {name})
    (:Place)-[:HAS_CATEGORY]->(:Category {name})
    (:City)-[:HAS_SAFETY]->(:SafetyLevel {name})
    (:City)-[:BEST_SEASON]->(:Season {name})
    (:POI {name,est_cost})-[:LOCATED_IN]->(:Place)-[:HAS_CATEGORY]->(:Category)

Idempotent — uses MERGE throughout, safe to re-run after editing the seed data.
"""
from __future__ import annotations

import json
import os
import sys
from pathlib import Path

DATA_DIR = Path(__file__).resolve().parents[1] / "data"


def main() -> None:
    uri = os.environ.get("NEO4J_URI", "bolt://localhost:7687")
    user = os.environ.get("NEO4J_USER", "neo4j")
    password = os.environ.get("NEO4J_PASSWORD", "")
    if not password:
        print("Set NEO4J_PASSWORD (matches docker-compose.agents.yml's NEO4J_AUTH).")
        sys.exit(1)

    try:
        from neo4j import GraphDatabase
    except ImportError:
        print("Install the agent extras first:  pip install -r requirements-agents.txt")
        sys.exit(1)

    destinations = json.loads((DATA_DIR / "destinations.json").read_text(encoding="utf-8"))
    seed = json.loads((DATA_DIR / "graph_seed.json").read_text(encoding="utf-8"))
    poi_seed = json.loads((DATA_DIR / "poi_seed.json").read_text(encoding="utf-8"))

    driver = GraphDatabase.driver(uri, auth=(user, password))
    driver.verify_connectivity()
    print(f"Connected to {uri}")

    with driver.session() as session:
        session.run("CREATE CONSTRAINT place_id IF NOT EXISTS FOR (p:Place) REQUIRE p.id IS UNIQUE")

        for dest in destinations:
            meta = seed.get(dest["id"], {})
            city_name = dest["name"]
            country_name = dest["country"].split("·")[0].strip()

            session.run(
                """
                MERGE (p:Place {id:$id}) SET p.name=$name
                MERGE (city:City {name:$city}) MERGE (p)-[:IS_IN]->(city)
                MERGE (country:Country {name:$country}) MERGE (city)-[:LOCATED_IN]->(country)
                """,
                id=dest["id"], name=dest["name"], city=city_name, country=country_name,
            )
            for cat in meta.get("categories", []):
                session.run(
                    "MERGE (c:Category {name:$cat}) "
                    "WITH c MATCH (p:Place {id:$id}) MERGE (p)-[:HAS_CATEGORY]->(c)",
                    cat=cat, id=dest["id"],
                )
            if meta.get("safety"):
                session.run(
                    "MERGE (s:SafetyLevel {name:$safety}) "
                    "WITH s MATCH (city:City {name:$city}) MERGE (city)-[:HAS_SAFETY]->(s)",
                    safety=meta["safety"], city=city_name,
                )
            if meta.get("season"):
                session.run(
                    "MERGE (season:Season {name:$season}) "
                    "WITH season MATCH (city:City {name:$city}) MERGE (city)-[:BEST_SEASON]->(season)",
                    season=meta["season"], city=city_name,
                )
            for poi in poi_seed.get(dest["id"], []):
                session.run(
                    """
                    MERGE (poi:POI {name:$name}) SET poi.est_cost=$cost
                    WITH poi MATCH (p:Place {id:$id}) MERGE (poi)-[:LOCATED_IN]->(p)
                    WITH poi MERGE (c:Category {name:$cat}) MERGE (poi)-[:HAS_CATEGORY]->(c)
                    """,
                    name=poi["name"], cost=poi.get("est_cost", 0), id=dest["id"], cat=poi.get("category", "general"),
                )
            print(f"  ingested {dest['id']} ({len(poi_seed.get(dest['id'], []))} POIs)")

    driver.close()
    print(f"Done — {len(destinations)} places ingested.")


if __name__ == "__main__":
    main()
