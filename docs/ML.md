# The machine-learning price models

Two questions the app answers with ML, both from **New York (JFK/EWR)**:

1. **"Should I book now or wait?"** — how much cheaper does this fare get, and when?
2. **"When is the best time to travel?"** — the month with cheap tickets *and* good weather.

All the code is in `backend/app/ml/`.

## The model

`ml/price_model.py` trains a **GradientBoostingRegressor** (scikit-learn) that predicts
a round-trip economy fare from five features:

| feature | why it matters |
|---|---|
| `distance_km` | great-circle distance NYC→destination; longer routes cost more |
| `origin_ewr` | JFK vs EWR (small illustrative difference) |
| `month_sin`, `month_cos` | departure month as a cyclic feature (seasonality) |
| `days_out` | how far ahead you book — the "booking curve" |

### Where the training data comes from

Real historical fares are not freely available, so we generate a labelled dataset from
a **transparent price simulation** (`simulate_price`) that encodes three well-known
airfare dynamics, then add Gaussian market noise:

- **Distance**: base fare grows sub-linearly with km.
- **Seasonality**: per-month multipliers (summer + December holidays are pricier).
- **Booking curve**: a U-shape — expensive last-minute (exponential spike inside ~3
  weeks), a trough around 6–10 weeks out, and a mild premium for booking > 4 months ahead.

`build_dataset()` samples ~13,500 (destination × month × lead-time × origin) points.
`train.py` fits the regressor and reports metrics — typically **MAE ≈ $39, R² ≈ 0.96**
on a held-out split.

> **Swapping in real data:** because features and target are decoupled from the
> simulation, plugging in a real historical-fare table is a one-function change —
> replace `build_dataset()` with a loader that returns the same columns, then re-run
> `python -m app.ml.train`. Nothing else changes.

## From model to product answers

`ml/best_time.py` turns raw predictions into recommendations:

- **Book-now-vs-wait** (`recommend_booking`): predicts the whole booking curve for your
  departure month, finds the trough, and compares it to booking today →
  `expected_drop_pct` + a `BOOK NOW / SOON / WAIT` verdict.
- **Best time to travel** (`best_time_scores`): predicts the cheapest fare for each of
  the 12 months, normalises it to a 0–100 *price score*, blends it 50/50 with the
  weather **comfort score** from the weather service, and returns the top month. (The
  blend weight is tunable via `?price_weight=` on `/api/predict/best-time`.)

The weather comfort score itself (`services/mock_data.mock_monthly_weather`) is a
latitude-driven climate model peaking near 22 °C with low rainfall — which is why, for
example, Rio's best month comes out as February (its southern-hemisphere summer).

## Retraining

```bash
cd backend
python -m app.ml.train      # writes data/models/price_model.joblib
```

The API loads the model once at startup. If the file is missing it falls back to the
`simulate_price` heuristic, so predictions still work (just less smoothed) — the
`model` field in the response tells you which path served the request
(`gradient-boosting` vs `heuristic`).
