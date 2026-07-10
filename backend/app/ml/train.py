"""Train the flight-price model and save it to data/models/price_model.joblib.

    python -m app.ml.train

Run this once after install (and whenever you change the price simulation or plug
in a real historical-fare dataset). The API works without it via a heuristic
fallback, but predictions are sharper with the trained model.
"""
from __future__ import annotations

import time

import numpy as np
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.metrics import mean_absolute_error, r2_score
from sklearn.model_selection import train_test_split

from app.ml.price_model import FEATURES, PriceModel, build_dataset


def main() -> None:
    print("Building training dataset from the price simulation…")
    df = build_dataset()
    print(f"  {len(df):,} samples across {df['dest_id'].nunique()} destinations")

    X = df[FEATURES].to_numpy()
    y = df["price"].to_numpy()
    X_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2, random_state=42)

    print("Fitting GradientBoostingRegressor…")
    t0 = time.time()
    model = GradientBoostingRegressor(
        n_estimators=350, max_depth=3, learning_rate=0.05, subsample=0.9, random_state=42
    )
    model.fit(X_tr, y_tr)

    pred = model.predict(X_te)
    print(f"  trained in {time.time() - t0:.1f}s")
    print(f"  MAE  : ${mean_absolute_error(y_te, pred):,.2f}")
    print(f"  R^2  : {r2_score(y_te, pred):.3f}")
    print(f"  price range in test set: ${y_te.min():,.0f}–${y_te.max():,.0f}")

    PriceModel(model).save()
    print("Saved -> data/models/price_model.joblib")


if __name__ == "__main__":
    np.random.seed(42)
    main()
