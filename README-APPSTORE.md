# SkyBlocks — App Store Launch Guide
### by SkyDog AI

This is your complete path from "game file on my Mac" to "app earning money on the App Store."
Do the steps in order. Ask Claude when you get stuck on any step — that's what I'm here for.

---

## What you have right now

- `index.html` — the complete game. Double-click it and it plays in any browser. This exact file becomes the iPhone app.
- `capacitor.config.json` + `package.json` — the wrapper config that turns the game into a real iOS app.
- Hidden god mode: tap the SKYBLOCKS logo 5 times (reroll button appears — great for testing, and a fun secret for players).

## The money model (how you actually get paid)

1. **Ads (main income):** Google AdMob shows a full-screen video ad every 3rd game over. Google pays you roughly $10–$25 per 1,000 ad views from US players. Money lands in your bank account monthly once you pass $100.
2. **Remove Ads — $2.99:** the in-app purchase. Apple pays you 85% ($2.54 per sale) monthly.
3. **Later, if it grows:** sellable neon themes/skins ($0.99 each), or sell the whole app on Flippa/Acquire.com for 2–4x yearly profit.

**Realistic math:** 1,000 downloads → maybe 300 regular players → roughly $50–150/month. 50,000 downloads → real side income. Nobody can promise virality; the winners iterate and market (see Step 7).

---

## Step 1 — Apple Developer Account (you must do this — ~20 min + a day or two of waiting)

1. Go to https://developer.apple.com/programs/enroll
2. Sign in with your Apple ID → enroll as an **Individual** → pay **$99/year**.
3. Wait for the approval email (usually 24–48 hours).

## Step 2 — Google AdMob Account (free, ~15 min)

1. Go to https://admob.google.com → sign in with your Google account.
2. Add app → iOS → name it SkyBlocks (choose "app not published yet").
3. Create two ad units: one **Interstitial**, one **Banner**.
4. Save these three IDs somewhere — Claude needs them to wire up the ads:
   - App ID (looks like `ca-app-pub-XXXXXXXX~YYYYYYY`)
   - Interstitial unit ID
   - Banner unit ID

## Step 3 — Install the build tools on your Mac (~15 min)

Open Terminal on your Mac:

```bash
# Install Xcode from the Mac App Store first (it's big, start the download early)
xcode-select --install        # command line tools

# Install Node.js if you don't have it: https://nodejs.org (LTS version)

cd ~/Projects/ACCOS/SkyBlocks
mkdir -p www && cp index.html www/
npm run ios:setup             # installs Capacitor and creates the ios/ project
npm run ios:sync
npm run ios:open              # opens the project in Xcode
```

## Step 4 — Wire up ads + purchase (do this WITH Claude)

Once you have your AdMob IDs from Step 2, start a session with Claude and say:
*"Wire AdMob and the remove-ads purchase into SkyBlocks, here are my IDs."*

What gets added (Claude does this for you):
- `@capacitor-community/admob` plugin → connects to the `SkyAds` hook already in the game.
- In-app purchase plugin (RevenueCat is the easy route) → connects to the `SkyIAP` hook, product ID `com.skydog.skyblocks.removeads`.
- The game already calls these hooks — that's why the ad/purchase code slots right in.

## Step 5 — Test on your own iPhone (free, same day)

1. In Xcode: plug in your iPhone → select it as the target → press ▶ Run.
2. First time: Xcode asks you to sign in with your Apple ID and "trust" the app on the phone (Settings → General → VPN & Device Management).
3. Play it. Check the drag feel, the glow, the game over flow. This is your quality bar — if it doesn't feel great to YOU, we polish before shipping.

## Step 6 — Submit to the App Store (~1 hour + 1–3 days review)

1. Go to https://appstoreconnect.apple.com → My Apps → **+ New App**.
   - Name: **SkyBlocks** (if taken, try "SkyBlocks — Neon Puzzle")
   - Bundle ID: `com.skydog.skyblocks` · Price: **Free** · Category: Games → Puzzle
2. Create the **Remove Ads** in-app purchase: Features → In-App Purchases → `com.skydog.skyblocks.removeads`, Non-Consumable, $2.99.
3. Screenshots: play the game on your iPhone, screenshot the best moments (mid-combo with particles flying looks great). Apple needs 6.7" and 6.5" sizes — Claude can resize them for you.
4. Description — short and punchy, e.g.:
   > *Drag. Drop. DETONATE. SkyBlocks is the neon block puzzle from the future — fill lines, chain combos, chase the glow. Easy to learn, impossible to put down. A SkyDog AI game.*
5. In Xcode: Product → Archive → Distribute App → App Store Connect → Upload.
6. In App Store Connect: select the build → **Submit for Review**.
7. Review usually takes 24–72 hours. Rejections are normal and fixable — send Claude the rejection text and we fix it same day.

## Step 7 — Getting downloads (this decides everything)

An app with zero marketing gets ~0–5 downloads a day. The playbook that works for puzzle games:

- **TikTok / Reels / Shorts:** post 15-second clips of satisfying combo clears (the particle explosions are made for this). 2–3 clips a week. One video hitting is how small games blow up.
- **App Store keywords:** "block puzzle", "block blast", "brain games", "puzzle" in the keyword field.
- Ask friends/family to download + leave 5-star reviews the first week — early ratings boost ranking.
- Watch your AdMob + App Store Connect dashboards; when we see people playing, we add the features that keep them longer (daily streaks, leaderboards, skins).

## Legal notes (keeping you safe)

- The block-puzzle *mechanic* is fair game — mechanics can't be copyrighted, and dozens of top apps use it.
- Everything in SkyBlocks (name, art, colors, code) is original SkyDog style. Never copy another game's name, icon art, or assets, and don't use "Block Blast" in your app name or keywords beyond the generic term "block puzzle."
- You'll need a privacy policy URL (Apple requires it since the app shows ads). Claude can generate this page for you — just ask.

---

**Your immediate to-do list:** Step 1 (Apple, $99) and Step 2 (AdMob, free) — everything else, do together with Claude. Go get 'em. ⚡
