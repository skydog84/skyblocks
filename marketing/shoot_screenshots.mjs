// SkyBlocks — App Store screenshot generator (1284x2778, 6.5")
// Runs the real game in the owner's Chrome via playwright-core and
// scripts authentic board states through the window.__sb test hook.
import { chromium } from '/tmp/sdtest/node_modules/playwright-core/index.mjs';

const CHROME = '/Users/skydog/Desktop/Google Chrome.app/Contents/MacOS/Google Chrome';
const GAME = 'file:///Users/skydog/Projects/ACCOS/SkyBlocks/index.html';
const OUT = '/Users/skydog/Projects/ACCOS/SkyBlocks/marketing/appstore_shots';

const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage({
  viewport: { width: 428, height: 926 },
  deviceScaleFactor: 3,
});
await page.goto(GAME);
await page.waitForTimeout(1200);
// hide the web ad placeholder text so shots look clean, then re-layout
await page.evaluate(() => {
  const b = document.getElementById('adBanner');
  if (b) { b.textContent = ''; b.style.background = 'transparent'; b.style.border = 'none'; }
});
await page.waitForTimeout(300);

// ---- Shot 3: PLAY screen ----
await page.screenshot({ path: OUT + '/03_play_screen.png' });

// start the game
await page.click('#playBtn');
await page.waitForTimeout(600);

// helper: paint a pleasing mid-game board
async function paintBoard(pattern) {
  await page.evaluate((pat) => {
    const sb = window.__sb;
    for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) sb.setCell(r, c, null);
    for (const [r, c, col] of pat) sb.setCell(r, c, col);
  }, pattern);
}

// ---- Shot 2: full colorful board mid-game ----
const midPattern = [];
const rows = [
  [0,1,1,0,2,2,0,3], [1,1,0,2,2,0,3,3], [0,4,4,0,0,5,5,0],
  [4,4,0,6,6,0,5,0], [0,0,3,3,0,1,0,2], [2,0,3,0,4,1,1,0],
  [2,2,0,5,4,0,1,6], [0,2,5,5,0,6,6,6],
];
for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) {
  if (rows[r][c] !== 0 || (r * 8 + c) % 5 === 0) {
    if (rows[r][c] !== 0) midPattern.push([r, c, rows[r][c] - 1]);
  }
}
// build a believable score first (a few line clears)
await page.evaluate(() => {
  const sb = window.__sb;
  for (let i = 0; i < 6; i++) {
    for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) sb.setCell(r, c, null);
    for (let c = 0; c < 7; c++) sb.setCell(0, c, c % 6);
    sb.place({ shape: [[0, 0]], color: 2, used: false }, 0, 7);
  }
});
await paintBoard(midPattern);
// open up space so tray pieces fit (keeps them rendered bright)
await page.evaluate(() => {
  const sb = window.__sb;
  for (let r = 3; r <= 5; r++) for (let c = 2; c <= 5; c++) sb.setCell(r, c, null);
});
await page.waitForTimeout(1300);
await page.screenshot({ path: OUT + '/02_midgame_board.png' });

// ---- Shot 1: mid-combo money shot (double line clear, COMBO x2) ----
await page.evaluate(() => {
  const sb = window.__sb;
  // clear board, then two rows nearly full + scattered color
  for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) sb.setCell(r, c, null);
  for (let c = 0; c < 8; c++) { if (c !== 7) { sb.setCell(3, c, c % 6); sb.setCell(4, c, (c + 2) % 6); } }
  sb.setCell(0, 0, 1); sb.setCell(0, 1, 1); sb.setCell(1, 0, 4);
  sb.setCell(6, 2, 2); sb.setCell(6, 3, 2); sb.setCell(7, 5, 5);
  // first clear -> combo 1
  sb.setCell(5, 0, 3); for (let c = 1; c < 8; c++) sb.setCell(5, c, (c + 1) % 6);
  sb.place({ shape: [[0, 0]], color: 3, used: false }, 5, 0) ;
});
await page.waitForTimeout(120);
await page.evaluate(() => {
  const sb = window.__sb;
  // rebuild rows 3+4 missing col 7, then place vertical duo -> 2 lines, COMBO x2
  for (let c = 0; c < 7; c++) { sb.setCell(3, c, c % 6); sb.setCell(4, c, (c + 2) % 6); }
  sb.place({ shape: [[0, 0], [1, 0]], color: 0, used: false }, 3, 7);
});
await page.waitForTimeout(230);
await page.screenshot({ path: OUT + '/01_combo_blast.png' });

// ---- Shot 5: single-line clear glow ----
await page.evaluate(() => {
  const sb = window.__sb;
  for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) sb.setCell(r, c, null);
  sb.setCell(1, 1, 0); sb.setCell(1, 2, 0); sb.setCell(2, 4, 5); sb.setCell(6, 6, 2);
  for (let c = 0; c < 7; c++) sb.setCell(2, c, (c + 1) % 6);
  sb.place({ shape: [[0, 0]], color: 4, used: false }, 2, 7);
});
await page.waitForTimeout(200);
await page.screenshot({ path: OUT + '/05_line_clear_glow.png' });

// ---- Shot 4: NEW RECORD game over ----
// build a real score with repeated combo clears, then force game over
await page.evaluate(() => {
  const sb = window.__sb;
  // build score with repeated single-line combo clears
  for (let i = 0; i < 14; i++) {
    for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) sb.setCell(r, c, null);
    for (let c = 0; c < 7; c++) sb.setCell(0, c, c % 6);
    sb.place({ shape: [[0, 0]], color: 2, used: false }, 0, 7);
  }
  // fill board, leaving isolated holes so every row+col stays incomplete
  const holes = [[0,2],[0,5],[1,7],[2,0],[3,3],[4,6],[5,1],[6,4],[7,2],[7,6]];
  for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) {
    sb.setCell(r, c, holes.some(h => h[0] === r && h[1] === c) ? null : ((r + c) % 6));
  }
  // swap tray for 3x3 blocks that cannot fit anywhere
  const big = [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]];
  const tray = sb.pieces();
  for (let i = 0; i < 3; i++) tray[i] = { shape: big, color: i, used: false };
  // final move: fill (0,2) — row 0 and col 2 still have holes, so no clear,
  // then no tray piece fits => endGame() => NEW RECORD overlay
  sb.place({ shape: [[0, 0]], color: 1, used: false }, 0, 2);
});
await page.waitForTimeout(900);
await page.screenshot({ path: OUT + '/04_new_record.png' });

await browser.close();
console.log('DONE — 5 screenshots written to ' + OUT);
