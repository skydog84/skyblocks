# SkyBlocks — App Store Connect Listing Copy

Everything below is ready to paste into App Store Connect when your Apple Developer
account is approved. Character limits are noted next to each field — I've kept
everything inside them. Fields marked **(you choose)** need a quick decision from you.

---

## App Name  *(max 30 characters)*

**Primary:** `SkyBlocks`  *(9 chars)*

If "SkyBlocks" is already taken, use one of these (both under 30):
- `SkyBlocks: Neon Block Puzzle`  *(28)*
- `SkyBlocks - Block Blast Glow`  *(28)*

---

## Subtitle  *(max 30 characters — shows under the name)*

**`Neon block puzzle, chase glow`**  *(29)*

Alternates:
- `Drag, drop, detonate blocks`  *(27)*
- `Block puzzle from the future`  *(28)*

---

## Promotional Text  *(max 170 characters — you can change this anytime without review)*

**`Fill lines, chain combos, watch the neon detonate. Easy to learn, impossible to put down. New shapes and glow every game — how high can your score climb?`**  *(151 chars)*

---

## Description  *(max 4000 characters)*

```
Drag. Drop. DETONATE.

SkyBlocks is the neon block puzzle from the future. Drag glowing pieces onto the
8x8 grid, fill full rows and columns to clear them, and chain combos for
score-multiplying chain reactions that explode across the board.

It's the classic block-puzzle you love — rebuilt with a SkyDog AI glow. No timer,
no pressure. Just you, the grid, and that perfect satisfying clear.

WHY YOU'LL GET HOOKED
• Simple to learn — drag a block, fill a line, watch it burst. That's it.
• Deep to master — plan ahead, set up multi-line combos, chase your best score.
• Gorgeous neon visuals — glowing blocks, particle explosions, a living starfield.
• Feels amazing — every clear lands with a satisfying pop and a haptic buzz.
• Play anywhere — works fully offline. No account, no sign-up, no nonsense.
• Beat your best — your high score is always waiting to be broken.

HOW IT PLAYS
Three blocks appear at the bottom. Drag them onto the grid however they fit.
Complete a full row or column and it clears in a shower of light. Clear more
than one line at once — or clear lines on back-to-back moves — and your combo
multiplier stacks the points. The game ends when none of your three pieces
can fit. Then you do the only reasonable thing: tap PLAY AGAIN.

FOR EVERYONE
Whether you've got 30 seconds in line or 30 relaxing minutes on the couch,
SkyBlocks fits. It's the perfect brain break — calming, colorful, and endlessly
replayable.

A SkyDog AI game. Made with love. Chase the glow. ⚡
```

*(~1,180 chars — well under the limit, leaves room to add feature bullets later.)*

---

## Keywords  *(max 100 characters total, comma-separated, NO spaces after commas)*

**`block,puzzle,blocks,brain,blast,neon,grid,logic,relax,combo,offline,drag,match,tap,game`**

*(Count: 87 characters. Notes: don't repeat words already in your app name/subtitle —
Apple indexes those automatically, so I left "sky" out. Avoid trademarked terms like
"Block Blast" as a phrase — the generic word "blast" alone is fine.)*

---

## What's New (version notes for v1.0)  *(max 4000 characters)*

```
Welcome to SkyBlocks 1.0 ⚡
The neon block puzzle is here. Drag, drop, and detonate your way to a new high
score. Thanks for playing — this is just the beginning.
```

---

## Category

- **Primary:** Games → Puzzle
- **Secondary (optional):** Games → Board

---

## Age Rating

Answer Apple's questionnaire with all "None" — SkyBlocks has no violence, no
mature content, no gambling. It will land at **4+**.

Note: because it shows ads, when Apple asks *"Does this app contain third-party
advertising?"* answer **Yes**. That's normal and does not raise the age rating.

---

## Price

**Free** (with a $2.99 "Remove Ads" in-app purchase)

### In-App Purchase to create
- **Reference Name:** Remove Ads
- **Product ID:** `com.skydog.skyblocks.removeads`
- **Type:** Non-Consumable
- **Price:** $2.99 (Tier 3)
- **Display Name:** Remove Ads
- **Description:** `Remove all ads from SkyBlocks forever. One-time purchase.`

---

## URLs

- **Support URL:** *(required)* — a page where players can reach you. Simplest option:
  a plain page that says "SkyBlocks support — email skydog8426@gmail.com". I can make
  this for you (same as the privacy page).
- **Marketing URL:** *(optional)* — leave blank for now, or point at a landing page later.
- **Privacy Policy URL:** *(required)* — the privacy-policy.html I already made you, once hosted.

---

## App Privacy ("nutrition label") — how to answer

This is the part most first-timers get wrong, so here's the honest answer for SkyBlocks.
When App Store Connect asks *"Does this app collect data?"* answer **Yes** — because
AdMob does. Then declare, on AdMob's behalf:

- **Identifiers → Device ID:** collected, **used for Third-Party Advertising**, **linked
  to the user? No**, **used for tracking? Yes** (if you keep personalized ads on).
- **Usage Data → Product Interaction / Advertising Data:** collected for Third-Party
  Advertising, not linked to identity.
- Everything else (name, email, location, contacts, photos, health, etc.): **Not collected.**

Google publishes the exact list of what AdMob collects — I'll match our declaration to
their current data-safety guidance when we do the submission together, so it's airtight.

---

## Copyright field

`2026 SkyDog`

---

## Screenshot plan  *(Apple needs 6.7" iPhone screenshots; 6.5" recommended too)*

Capture these five on your iPhone once the app runs — I'll resize/frame them for you:

1. **Mid-combo money shot** — a big multi-line clear with particles flying and a
   "COMBO x2 +320" popup on screen. This is your hero image (first screenshot matters most).
2. **A full, colorful board** mid-game — lots of neon blocks placed, three pieces in the tray.
3. **The PLAY screen** — clean logo + "Drag blocks. Fill lines. Feel the glow."
4. **A new-record GAME OVER** — big score, "NEW RECORD ⚡".
5. **Close-up of a satisfying single-line clear** with the glow trail.

Tip: turn on a high score first so the numbers look impressive in the shots.

---

## Quick submission order (for when we're ready)

1. App Store Connect → My Apps → **+ New App** → fill Name / Bundle ID `com.skydog.skyblocks` / Free / Puzzle.
2. Paste Subtitle, Promo Text, Description, Keywords, URLs, Copyright (all above).
3. Create the Remove Ads in-app purchase (details above).
4. Upload screenshots (I'll prep them).
5. Answer Age Rating + App Privacy (guides above).
6. Upload the build from Xcode (Archive → Distribute).
7. Select the build → **Submit for Review**.

Rejections are routine and fixable — send me the text and we fix it same day.
