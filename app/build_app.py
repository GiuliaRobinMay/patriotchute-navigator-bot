#!/usr/bin/env python3
"""Build the PPN Navigator from the template + the live community room map.

    python3 map/build_map.py     # refresh the map first
    python3 app/build_app.py     # then rebuild the app
"""
import json, pathlib

HERE = pathlib.Path(__file__).parent
ROOT = HERE.parent

dest = json.load(open(ROOT / "map" / "destinations.json"))
rooms = []
for e in dest.values():
    if not e.get("safeToLink"):
        continue                       # never link an empty/stale/duplicate room
    if e.get("memberVisible") is False:
        continue                       # HOST HUB / ADMIN ZONE are hidden from members
    rooms.append({
        "t": e["title"],
        "u": e.get("contentUrl") or e["url"],
        "c": (e.get("collection") or "Other").replace("➽ ", "").strip(),
        "a": e.get("aliases", []),
    })
rooms.sort(key=lambda r: (r["c"], r["t"]))

html = (HERE / "template.html").read_text()
assert "__ROOMS__" in html, "template is missing the __ROOMS__ placeholder"
html = html.replace("__ROOMS__", json.dumps(rooms, separators=(",", ":")))

out = HERE / "navigator.html"
out.write_text(html)
print(f"built {out}  —  {len(rooms)} rooms, {len(html):,} bytes")

# ---- standalone page for static hosting (Vercel, Netlify, any web server) ----
# navigator.html is an Artifact FRAGMENT: the Artifact host supplies the
# doctype/html/head/body wrapper. A plain web server does not, so we emit a
# complete document at the repo root as index.html.
head, sep, body = html.partition("</style>")
assert sep, "could not split template on </style>"

standalone = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="Find your way around the Patriot Party News community \u2014 answers to the questions members ask most, with a direct link to the right room.">
<meta name="color-scheme" content="light dark">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='31' fill='%23FCFBF8'/%3E%3Cpath d='M32 9 L47 15 V32 C47 42 40 49 32 53 C24 49 17 42 17 32 V15 Z' fill='%2314284A'/%3E%3Cpath d='M32 27 H43 V37.5 H32 Z' fill='%23A82B33'/%3E%3C/svg%3E">
{head}</style>
</head>
<body>
{body}
</body>
</html>
"""

root_index = ROOT / "index.html"
root_index.write_text(standalone)
print(f"built {root_index}  \u2014  standalone page, {len(standalone):,} bytes")
