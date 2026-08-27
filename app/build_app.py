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
