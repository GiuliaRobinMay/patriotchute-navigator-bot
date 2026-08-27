#!/usr/bin/env python3
"""Generate the human-readable community map and the Navigator lookup table
from spaces.json.

Regenerate after any change to the community:
    python3 map/build_map.py
"""
import json, pathlib

HERE = pathlib.Path(__file__).parent
d = json.load(open(HERE / "spaces.json"))
NET = d["network"]
SPACE = NET["urlPatterns"]["space"]
COLL = NET["urlPatterns"]["collection"]

coll_by_id = {c["id"]: c for c in d["collections"]}

# Member-language aliases -> space id. This is what lets the Navigator resolve
# what members actually type, not what the space is officially called.
ALIASES = {
    "4758493": ["humanitarian project", "humanitarian projects", "humanitarian room",
                "my project", "submit a project", "project room"],
    "22095618": ["state talk", "discord", "join discord", "patriot talk discord"],
    "7011209": ["telegram", "join telegram", "ppn talk time telegram"],
    "11436100": ["join my state group", "state group invite", "how do i join my state"],
    "22517246": ["welcome", "new member guide", "start here", "getting started", "tour"],
    "22517254": ["launchpad", "new member launchpad", "onboarding", "badge"],
    "7010251": ["faq", "faq zone", "help", "frequently asked questions"],
    "7032251": ["support", "questions and support", "support chat", "help desk"],
    "18992734": ["coffee with chas", "9am show", "morning show"],
    "24417514": ["noon show", "12pm news", "lunchtime news"],
    "4759408": ["8pm news", "evening news", "night show"],
    "22883801": ["ambassador", "ambassador program", "referral", "wegrow10x"],
    "19433867": ["donate", "donation", "give", "support ppn"],
    "11452291": ["code of conduct", "rules", "guidelines"],
    "19581420": ["training", "training room"],
    "4755493": ["lobby", "members lobby", "home", "main feed"],
    "22399429": ["community news", "announcements", "what's new"],
    "4758505": ["health", "medical", "health room"],
    "11424146": ["state director", "county coordinator", "become a director"],
}

BROKEN = {"EMPTY", "EMPTY-CHAT", "EMPTY-FEED", "NEARLY-EMPTY", "STALE",
          "HIDDEN", "DUPLICATE", "ARTIFACT", "orphan", "video-only"}


def url(sid):
    return SPACE.format(spaceId=sid)


def build_destinations():
    """Flat lookup the Navigator app consumes: alias -> destination."""
    out = {}
    for s in d["spaces"]:
        entry = {
            "spaceId": s["id"],
            "title": s["title"],
            "url": url(s["id"]),
            "collection": coll_by_id.get(s["collection"], {}).get("name"),
            "memberVisible": coll_by_id.get(s["collection"], {}).get("visibleToMembers", None),
            "status": s["status"],
            "safeToLink": s["status"] not in BROKEN,
            "note": s.get("note", ""),
            "aliases": ALIASES.get(s["id"], []),
        }
        if s["status"] == "COURSE":
            entry["contentUrl"] = NET["urlPatterns"]["spaceContent"].format(spaceId=s["id"])
            entry["safeToLink"] = True
        out[s["id"]] = entry
    for name, sid in d["stateGroups"]["spaces"].items():
        out[sid] = {
            "spaceId": sid, "title": name, "url": url(sid),
            "collection": "PPN USA STATE GROUPS", "memberVisible": True,
            "status": "state-group",
            "safeToLink": True,
            "note": "Members may join only ONE state." + (
                " Reported empty/low-activity." if name in d["stateGroups"]["reportedEmpty"] else ""),
            "aliases": [name.lower(), f"{name.lower()} group", f"{name.lower()} state group"],
        }
    return out


def main():
    dests = build_destinations()
    json.dump(dests, open(HERE / "destinations.json", "w"), indent=1)

    L = []
    L.append("# PatriotChute community map\n")
    L.append(f"Generated from `map/spaces.json` by `map/build_map.py`. "
             f"**{len(dests)} destinations.**\n")
    L.append("Every row gives the exact URL to send a member to. `link?` = No means "
             "do NOT deep-link there — the destination is empty, stale, duplicated, or "
             "sits in a collection members cannot see.\n")

    L.append("## URL patterns\n")
    for k, v in NET["urlPatterns"].items():
        L.append(f"- `{k}` — `{v}`")
    L.append("")

    unsafe = [e for e in dests.values() if not e["safeToLink"]]
    L.append(f"## Do not link here yet ({len(unsafe)})\n")
    L.append("| Space | URL | Status | Why |")
    L.append("|---|---|---|---|")
    for e in sorted(unsafe, key=lambda x: x["title"]):
        L.append(f"| {e['title']} | `{e['url']}` | `{e['status']}` | {e['note']} |")
    L.append("")

    L.append("## All destinations by collection\n")
    order = {c["id"]: c["sidebarOrder"] for c in d["collections"]}
    by_coll = {}
    for s in d["spaces"]:
        by_coll.setdefault(s["collection"], []).append(s)
    for cid in sorted(by_coll, key=lambda c: order.get(c, 99)):
        c = coll_by_id.get(cid)
        if c:
            vis = "visible to members" if c["visibleToMembers"] else "**HIDDEN from members**"
            L.append(f"### {c['name']} — {vis}")
            L.append(f"`{COLL.format(collectionId=cid)}`\n")
        else:
            L.append("### (no collection — unreachable by browsing)\n")
        L.append("| Space | URL | Status | link? |")
        L.append("|---|---|---|---|")
        for s in sorted(by_coll[cid], key=lambda x: x["position"]):
            e = dests[s["id"]]
            L.append(f"| {s['title']} | `{e['url']}` | {s['status']} | "
                     f"{'Yes' if e['safeToLink'] else 'No'} |")
        L.append("")

    L.append("### PPN USA STATE GROUPS — all 56\n")
    L.append(f"`{COLL.format(collectionId='971897')}`\n")
    L.append("| State | URL |")
    L.append("|---|---|")
    for name, sid in d["stateGroups"]["spaces"].items():
        flag = " *(reported empty)*" if name in d["stateGroups"]["reportedEmpty"] else ""
        L.append(f"| {name}{flag} | `{url(sid)}` |")
    L.append("")

    L.append("## Member-language aliases\n")
    L.append("What members type -> where to send them.\n")
    L.append("| Member says | Destination | URL |")
    L.append("|---|---|---|")
    for e in dests.values():
        for a in e["aliases"]:
            if e["spaceId"] in ALIASES:
                L.append(f"| \"{a}\" | {e['title']} | `{e.get('contentUrl', e['url'])}` |")
    L.append("")

    (HERE / "COMMUNITY-MAP.md").write_text("\n".join(L))
    print(f"destinations: {len(dests)}  safe to link: {sum(1 for e in dests.values() if e['safeToLink'])}"
          f"  unsafe: {len(unsafe)}")


if __name__ == "__main__":
    main()
