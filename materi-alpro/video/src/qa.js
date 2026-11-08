const fs = require('fs');
const path = require('path');
const puppeteer = require('C:/Users/Asus/node_modules/puppeteer');

const ROOT = 'D:/video-algo';
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'src', 'manifest.json'), 'utf8'));
const times = process.argv.slice(2).map(Number);

(async () => {
  const html = fs.readFileSync(path.join(ROOT, 'src', 'video.html'), 'utf8')
    .replace('const M = window.MANIFEST;', 'const M = ' + JSON.stringify(manifest) + ';');
  const file = path.join(ROOT, 'build', 'page.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html, 'utf8');

  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--user-data-dir=' + path.join(ROOT, 'build', 'chrome-profile'), '--no-first-run',
           '--hide-scrollbars', '--force-device-scale-factor=1'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });
  await page.goto('file:///' + file.replace(/\\/g, '/'), { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  for (const t of times) {
    await page.evaluate(tt => window.renderAt(tt), t);
    const out = path.join(ROOT, 'build', `qa-${t.toFixed(1)}.png`);
    await page.screenshot({ path: out, type: 'png' });
    console.log(out);
  }
  await browser.close();
})();
