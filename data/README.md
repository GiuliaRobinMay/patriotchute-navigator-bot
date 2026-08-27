# Data

Raw output of the PatriotChute community scan. Source: the **PatriotChute MCP
server only** (`ppn-the-patriot-party-news`). No other community was queried.

| File | What it is |
|---|---|
| `verified-ground-truth.md` | Facts read directly by the lead session against the live community |
| `raw-harvests.json` | 16 harvest agents' output — 1,585 question items + 228 observations |
| `observations.json` | The 228 observations, flattened and themed |
| `cluster-chunks.json` | 188 partial clusters from 3 independent clustering passes |
| `cluster-counts.json` | Per-cluster counts, date ranges, unanswered counts, emotional charge |
| `merge-input.json` | Compact input to the canonicalization pass |

## Corpus shape

- **1,585** raw question items -> **930** unique by source id
- Date range **2021-04-03 -> 2026-08-25**
- **518 of 1,585 (33%)** had zero replies — silence is the dominant failure mode
- Volume by year: 2023 (834), 2024 (278), 2022 (209), 2025 (132), 2026 (98), 2021 (34)

## Method

16 agents swept in parallel: 13 themed multi-modal search sweeps (semantic POST
search + keyword COMMENT search, paged 3+ deep, many query variants each) and 3
deep feed crawls (Members Lobby, the QUESTION & SUPPORT / START HERE spaces, and
the high-traffic news and live-stream rooms).

Known instrument limits, recorded by the agents themselves:
- The COMMENT index is **keyword-only, not semantic**, and appears to cover only
  ~late-2025 onward. Comment-era support demand from 2021-2024 is undercounted.
- `get_space_feed` returns nothing for coursework/space_page content, so three
  "empty" onboarding spaces are not truly empty — their material is a course.
