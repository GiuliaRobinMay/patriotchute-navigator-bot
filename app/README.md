# PPN Navigator

First build. Embeddable single-page help navigator for the community.

**Live:** https://claude.ai/code/artifact/9895a28a-2cbd-4a82-a22b-3b2211f796d0

| File | Purpose |
|---|---|
| `template.html` | The app. Edit answers here. |
| `build_app.py` | Injects the live room map into the template. |
| `navigator.html` | Built output — do not edit by hand. |
| `rooms.json` | Room data snapshot, for reference. |

## Rebuild

```bash
python3 map/build_map.py    # refresh the room map first
python3 app/build_app.py    # then rebuild the app
```

## Design

Palette is the flag weathered rather than a campaign banner: union navy
`#14284A`, barn red `#A82B33`, faded chambray `#5B7FA6` on a pale chambray
ground, wheat `#C6912F` on the badge. Zilla Slab for headings (civic print),
Source Sans 3 for body.

**Base text is 16px**, with a Text +/- control (14-26px) in the masthead that
persists per viewer. It started at 18px because the scan's clearest
accessibility finding was members abandoning setup over *"the print is so small
I cannot read it to follow"* — but at 18px the app was too heavy inside the
community embed, so the default came down and the control carries the
accessibility case instead.

## Topic colours

Every answer carries a topic colour, matching the category dots in the right
rail, shown as a stripe along the top of the card and a small eyebrow naming the
topic. It encodes which kind of thing the member is looking at, so a billing
answer and a Talk Time answer are distinguishable at a glance rather than by
reading. Tokens are `--t-*` (stripe) and `--ti-*` (text); the text variants are
darkened in light mode so small uppercase type still meets contrast.

## Typing indicator

Answers appear after a 1000ms pause showing three dots (`THINK_MS`). It is
deliberate: an answer that appears instantly reads as a canned page, not as
something responding to you. Guarded against re-entry so rapid clicks cannot
stack indicators.

## How questions are matched

Member wording is scored against each answer, not looked up. Four things drive
the score:

1. **Keyword phrases** per answer, matched on whole words. (An early version
   used substring matching, so "in**form**ation" matched the humanitarian
   project *form* — hence the word boundaries.)
2. **Word rarity.** A word only one answer uses ("humanitarian") identifies it
   far more strongly than one a dozen use ("room").
3. **Spelling correction** — Damerau edit distance against the known
   vocabulary, so "pikture", "cancle", "chnage" and "notifcations" all land.
   Transposition-aware, because swapped letters are the commonest typo.
4. **Token overlap** with the question text.

Below the score threshold the member gets a "Did you mean one of these?" list
of the three closest answers rather than a dead end.

`node app/test/matcher.test.js` runs 42 real-wording cases against the built
file. Keep it at 42/42.

## Three answer types

The review with Giulia established that not every question wants a canned
answer:

1. **Static** — a real answer exists. Talk Time, state groups, humanitarian
   projects, text size.
2. **Triage** — "it's not working" is a dozen different problems. The app asks
   back (device, URL, what happens), then writes the member a summary to paste
   into the Lobby. Used for app trouble, notifications, and lockouts.
3. **Live data** — replays and the show calendar are actively changing, so
   these must be pulled from the community rather than stored. Currently
   hardcoded from verified event data; wire to the MCP server next.

## Room links

87 member-visible rooms, searchable by name, state, collection, or
member-language alias ("humanitarian room", "talk time"). The 15 destinations
flagged `safeToLink: false` in the map — empty, stale, duplicated — and the
39 in members-hidden collections are excluded from the build. Sending a member
to an empty room is worse than saying "not yet".

## Open items before this is member-ready

- **Support email address** — `still-charged` cannot ship without it.
- **Community guidelines** — `guidelines` is a placeholder until they exist.
- **Cancel + change-card screen recordings** — current steps come from the
  Mighty Networks help centre and are marked "Being updated".
- **New onboarding** — `start-here` is interim.
- **Confirm Apple/iOS billing** — if any members are billed through Apple, that
  explains the "cancelled but still charged" reports.
- Feedback buttons are UI only; they do not record anywhere yet.
- The masthead/answer avatar loads the community's own branding image from
  Mighty Networks, with the shield SVG behind it as a fallback. Artifact
  previews block external images and will show the shield; the Vercel embed
  shows the real logo. To make it work everywhere, inline the logo as a data
  URI (the fetch is blocked from this environment).
