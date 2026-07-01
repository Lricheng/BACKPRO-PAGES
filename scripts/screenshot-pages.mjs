const { chromium } = require('playwright');
const path = require('path');

const base = 'https://lricheng.github.io/BACKPRO-PAGES';
const pages = [
  { name: 'home', url: `${base}/` },
  { name: 'privacy', url: `${base}/privacy/` },
  { name: 'support', url: `${base}/support/` },
];
const outDir = path.join(__dirname, 'tmp/e2e/before');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();
  for (const p of pages) {
    for (const lang of ['zh', 'en']) {
      await page.goto(p.url, { waitUntil: 'networkidle' });
      await page.evaluate((l) => {
        document.documentElement.dataset.lang = l;
        document.documentElement.lang = l === 'zh' ? 'zh-Hans' : 'en';
        localStorage.setItem('backpro-pages-lang', l);
      }, lang);
      await page.waitForTimeout(300);
      await page.screenshot({
        path: path.join(outDir, `${p.name}-${lang}.png`),
        fullPage: true,
      });
    }
  }
  await browser.close();
  console.log('screenshots saved to', outDir);
})();
