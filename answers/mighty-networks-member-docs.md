# Mighty Networks member documentation — candidate FAQs

**Status: FOR APPROVAL. Nothing here is implemented yet.**

Every page below sits under `docs.mightynetworks.com/for-members/` — the
member-facing guides, not the host guides. Host pages were excluded.

## How this was gathered, and its limit

`docs.mightynetworks.com` and `faq.mightynetworks.com` are both blocked by this
environment's network egress policy, so the pages could not be opened directly.
Titles and URLs come from search results; the content notes come from search
snippets of those pages. **Before any of these ships, the exact steps need
checking against the live UI** — the same rule we applied to the cancel path.

## The critical filter: features PPN has turned OFF

Importing these wholesale would repeat the FAQ Zone failure — instructions that
describe a UI the member does not have. Verified from the PatriotChute network
settings:

| Feature | PPN setting | Consequence |
|---|---|---|
| `chat` | **off** | Chat guidance does not apply |
| `private_chat` | **off** | Members cannot DM each other |
| `polls` | **off** | Poll guidance does not apply |
| `courses` / `course_content` | **off** | Course guidance does not apply |
| `leaderboards` | **off** | The leaderboard half of the streaks page is wrong |
| `gamification_points` / `streaks` | **on** | The points/streaks half IS right |
| `member_event_creation` | **off** | Members cannot create events |
| `member_post_creation` | on | Posting guidance applies |
| `member_article_creation` | on | Article guidance applies |
| `member_invites` | on | Invite guidance applies |

---

## account-and-purchases (7 pages)

| # | Page | Answers | Rec |
|---|---|---|---|
| 1 | [How Do I Leave a Mighty Network?](https://docs.mightynetworks.com/for-members/account-and-purchases/how-do-i-leave-a-mighty-network) | Leaving / unsubscribing | **Adopt** — Giulia's pick for the unsubscribe answer |
| 2 | [How Do I Manage My Membership or Space Purchases?](https://docs.mightynetworks.com/for-members/account-and-purchases/how-do-i-manage-my-membership-or-space-purchases) | Cancel subscription; switch plans | **Adopt** — replaces our unverified cancel steps |
| 3 | [How Do I Update My Billing Information?](https://docs.mightynetworks.com/for-members/account-and-purchases/how-do-i-update-my-billing-information) | Change the card | **Adopt** — "change my bank account" |
| 4 | [How Do I Manage My Personal Settings?](https://docs.mightynetworks.com/for-members/account-and-purchases/how-do-i-manage-my-personal-settings) | Profile, profile photo, **email address**, password, language | **Adopt** — covers 3 of your 4 examples |
| 5 | [How Do I Set or Reset My Password?](https://docs.mightynetworks.com/for-members/account-and-purchases/how-do-i-set-or-reset-my-password) | Password reset | **Adopt** — password reset was reported broken |
| 6 | [What Notifications Will I Get as a Member?](https://docs.mightynetworks.com/for-members/account-and-purchases/what-notifications-will-i-get-as-a-member) | The 5 notification channels and defaults | **Adopt** — feeds the notifications triage |
| 7 | [How Do I Purchase a Token-Gated Plan?](https://docs.mightynetworks.com/for-members/account-and-purchases/how-do-i-purchase-a-token-gated-plan) | Crypto token-gated plans | **Skip** — PPN does not use this |

## explore-mighty (6 pages)

| # | Page | Answers | Rec |
|---|---|---|---|
| 8 | [Can I Access My Mighty Network from an App?](https://docs.mightynetworks.com/for-members/explore-mighty/can-i-access-my-mighty-network-from-an-app) | Which app, web vs iOS vs Android | **Adopt** — "which app do I download" is a live question |
| 9 | [How Do I Join a Mighty Network?](https://docs.mightynetworks.com/for-members/explore-mighty/how-do-i-join-a-mighty-network) | Sign-up, Google/Apple login | **Adopt** — matches the Talk Time Google sign-in |
| 10 | [Where Can I Get Help?](https://docs.mightynetworks.com/for-members/explore-mighty/where-can-i-get-help) | Reaching Mighty's own support | **Adapt** — send members to PPN's chat first |
| 11 | [Does Mighty Networks Sell My Data?](https://docs.mightynetworks.com/for-members/explore-mighty/does-mighty-networks-sell-my-data) | Data ownership and privacy | **Adopt** — trust question for this audience |
| 12 | [What is a Mighty Network?](https://docs.mightynetworks.com/for-members/explore-mighty/what-is-a-mighty-network) | Platform overview | **Skip** — generic; PPN's own welcome does this |
| 13 | [I Want To Become a Host](https://docs.mightynetworks.com/for-members/explore-mighty/i-want-to-become-a-host-how-do-i-do-that) | Starting your own network | **Skip** — recruits members away |

## engage-and-interact (7 pages)

| # | Page | Answers | Rec |
|---|---|---|---|
| 14 | [How Do I Post in a Mighty Network?](https://docs.mightynetworks.com/for-members/engage-and-interact/how-do-i-post-in-a-mighty-network) | Posting, comments, GIFs, media | **Adopt** — replaces the 2022 FAQ Zone posts |
| 15 | [How Does the Feed Work?](https://docs.mightynetworks.com/for-members/engage-and-interact/how-does-the-feed-work) | Global feed, liking, reacting | **Adopt** — "am I in the right place" |
| 16 | [How Do I Use Hashtags?](https://docs.mightynetworks.com/for-members/engage-and-interact/how-do-i-use-hashtags-in-my-mighty-network) | Hashtags | **Adopt** — county hashtags were undocumented |
| 17 | [My Host is Going Live — Where Do I Watch?](https://docs.mightynetworks.com/for-members/engage-and-interact/my-host-is-going-livewhere-do-i-watch-them) | Finding a livestream | **Adapt** — PPN's own answer is more specific |
| 18 | [How Do I Set My Preferred Language?](https://docs.mightynetworks.com/for-members/engage-and-interact/HowDoISetMyPreferredLanguage) | Language setting | **Low priority** — US audience |
| 19 | [How Do Streaks, Recognitions and the Leaderboard Work?](https://docs.mightynetworks.com/for-members/engage-and-interact/what-are-streaks-and-recognitions) | Streaks, points, leaderboard | **Adapt with care** — points and streaks are ON, leaderboards are **OFF**. Members already ask what the rocket and streak icons mean |
| 20 | [How Do I Create Events as a Member?](https://docs.mightynetworks.com/for-members/engage-and-interact/how-do-i-create-events-as-a-member) | Members creating events | **Skip** — `member_event_creation` is OFF at PPN |

---

## Summary

- **Adopt: 12**  ·  **Adapt: 4**  ·  **Skip: 4**

## Your four examples, mapped

| You asked for | Covered by |
|---|---|
| How do I set up a profile | #4 Personal Settings |
| How do I change my picture | #4 — note: photo must be **at least 500 x 500 px**, cropped to a circle |
| How do I change my bank account | #3 Update Billing Information |
| How do I change my email address | #4 — Personal Settings > Account |

There is no standalone "change your profile picture" member page; it lives
inside Personal Settings.

## Notable gaps — no member page exists

Real questions from the PPN scan that Mighty's own member docs do not answer:

- Deleting a comment you posted by mistake
- What happens to your posts after you cancel, and rejoining later
- Managing a deceased relative's account
- Photo and video size limits in a post
- Making the text bigger (a device setting, not a platform one)

These stay ours to write.
