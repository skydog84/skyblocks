# SkyBlocks — AdMob Setup & Wiring

## Your AdMob IDs (created July 17, 2026)

| What | ID |
|---|---|
| **App ID** | `ca-app-pub-5768994898556694~3610804456` |
| **Interstitial** ad unit | `ca-app-pub-5768994898556694/4137418064` |
| **Banner** ad unit | `ca-app-pub-5768994898556694/5339387319` |

These are safe to keep in the app — ad unit IDs are public and ship inside every app.

---

## What's already wired (done for you in `index.html`)

- Both ad units and the App ID are baked into the game's `ADMOB_IDS` block.
- On launch **inside the iOS app**, the game now initializes AdMob, shows the bottom
  banner, and pre-loads an interstitial.
- The interstitial fires on **every 3rd game over** (unchanged behavior, now real).
- If someone buys **Remove Ads**, the banner is removed and no interstitials show —
  and that choice is remembered next time they open the app.
- In a plain browser, all of this safely does nothing, so `index.html` still plays
  normally for testing. (Verified: 0 console errors.)

### ⚠️ The one switch you must flip before you ship
Near the top of the game script:
```js
const ADMOB_TESTING = true;
```
- **Leave it `true`** the whole time you're testing on your own iPhone. It shows
  Google's *test* ads, so you can tap them freely.
- **Set it to `false`** ONLY in the final build you upload to Apple.
- Never tap your own *real* ads — AdMob can ban your account for it. That's the
  entire reason this switch exists.

---

## What's left to do (needs Xcode on your Mac — do it with me)

1. **Build the iOS project** (installs the AdMob plugin automatically — I already
   added it to your setup script):
   ```bash
   cd ~/Projects/ACCOS/SkyBlocks
   mkdir -p www && cp index.html www/
   npm run ios:setup
   npm run ios:sync
   npm run ios:open
   ```

2. **Add 3 entries to the iOS app's `Info.plist`** (I'll do this in Xcode with you —
   the iOS project doesn't exist until step 1 runs). For the record, they are:
   - `GADApplicationIdentifier` → `ca-app-pub-5768994898556694~3610804456`
   - `NSUserTrackingUsageDescription` → *"This lets us show ads relevant to you. You can play without allowing it."*
   - `SKAdNetworkItems` → Google's SKAdNetwork IDs (from the AdMob iOS docs; improves ad revenue). I'll paste the current list in when we do it.

3. **Test on your iPhone** with `ADMOB_TESTING = true` — confirm the banner shows and
   an interstitial appears after 3 games. Tune banner position if it overlaps.

4. **Remove Ads ($2.99) purchase** — this is the *only* money piece still stubbed,
   because it can't be finished until your **Apple Developer account is approved** and
   the app + in-app-purchase product exist in App Store Connect. Once that's done, we
   add a StoreKit/RevenueCat plugin and it's a 15-minute job. The game code already
   calls the right product ID (`com.skydog.skyblocks.removeads`).

---

*Wired and browser-verified July 17, 2026.*
