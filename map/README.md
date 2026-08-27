# Community map

The answer to "where do I find X" — every destination in the community with the
exact URL to send a member to.

| File | Purpose |
|---|---|
| `spaces.json` | Source of truth. Edit this when the community changes. |
| `build_map.py` | Regenerates the two outputs below. |
| `COMMUNITY-MAP.md` | Human-readable map, for you. |
| `destinations.json` | Flat lookup table, for the Navigator app to consume. |

## Regenerating

```bash
python3 map/build_map.py
```

`spaces.json` is hand-maintained because it carries judgement the API does not
expose — whether a space is stale, duplicated, or safe to link. The raw
inventory (ids, titles, URLs, collections, positions) comes from the
PatriotChute MCP server via `list_spaces` and `list_spaces_collections`, and
should be re-pulled whenever spaces are added, renamed, or moved.

## The three fields that matter

- **`url`** — taken verbatim from the API's own `url` field, so it is
  authoritative, not constructed by guesswork.
- **`safeToLink`** — false for 15 of 126 destinations. A Navigator that links
  a member to an empty room is worse than one that says "that doesn't exist
  yet", because the member concludes the app is broken.
- **`aliases`** — what members actually type. They say "humanitarian room",
  not "Humanitarian Projects"; "Talk Time", not "JOIN DISCORD | State Talk".
  Resolution has to happen in member language.

## Known duplicates and artifacts

- **Texas exists twice**: `17400769` (state group, correct) and `11424173`
  (HOST HUB, hidden). Link only the first.
- **State Directors exists twice**: `17522915` (ADMIN ZONE) and `11503345`.
- **`[Copy] Wyoming`** (`22682759`) is a leftover copy.

## Structural problems this map exposes

Three destinations members are actively told to use sit in **HOST HUB**, a
collection whose `visibleToMembers` is `false`:

- `CODE OF CONDUCT` (11452291) — members ask for the rules; they cannot reach them.
- `JOIN DISCORD | State Talk` (22095618) — the single largest support cluster.
- `JOIN TELEGRAM | PPN Talk Time` (7011209)

`Constitution` (4765673) has no collection at all, so it cannot be reached by
browsing the sidebar.
