/**
 * Render video.html -> out/video.mp4 (frames -> ffmpeg stdin),
 * campur narasi per scene -> out/audio.wav, lalu mux -> out/final.mp4
 *
 * Pakai yang sudah terpasang: Chrome sistem + puppeteer + ffmpeg (imageio-ffmpeg).
 */
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const puppeteer = require('C:/Users/Asus/node_modules/puppeteer');

const ROOT = 'D:/video-algo';
const SRC = path.join(ROOT, 'src');
const OUT = path.join(ROOT, 'out');
const BUILD = path.join(ROOT, 'build');
const FFMPEG = 'C:/Users/Asus/AppData/Local/Python/pythoncore-3.14-64/Lib/site-packages/imageio_ffmpeg/binaries/ffmpeg-win-x86_64-v7.1.exe';

const manifest = JSON.parse(fs.readFileSync(path.join(SRC, 'manifest.json'), 'utf8'));
const FPS = manifest.fps || 30;
const W = manifest.width || 1920;
const H = manifest.height || 1080;
const TOTAL = manifest.total;
const FRAMES = Math.round(TOTAL * FPS);

fs.mkdirSync(OUT, { recursive: true });

function ff(args, opts = {}) {
  return new Promise((resolve, reject) => {
    const p = spawn(FFMPEG, args, { stdio: ['pipe', 'inherit', 'inherit'], ...opts });
    p.on('error', reject);
    p.on('close', code => (code === 0 ? resolve() : reject(new Error('ffmpeg exit ' + code))));
    opts.onSpawn && opts.onSpawn(p);
  });
}

async function renderFrames() {
  const html = fs.readFileSync(path.join(SRC, 'video.html'), 'utf8')
    .replace('const M = window.MANIFEST;', 'const M = ' + JSON.stringify(manifest) + ';');
  const pageFile = path.join(BUILD, 'page.html');
  fs.writeFileSync(pageFile, html, 'utf8');

  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: [
      '--user-data-dir=' + path.join(BUILD, 'chrome-profile'),
      '--no-first-run', '--no-default-browser-check', '--disable-extensions',
      '--hide-scrollbars', '--force-device-scale-factor=1', '--font-render-hinting=none',
      '--disable-background-timer-throttling', '--disable-renderer-backgrounding',
    ],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: W, height: H, deviceScaleFactor: 1 });
  await page.goto('file:///' + pageFile.replace(/\\/g, '/'), { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r))));

  return new Promise((resolve, reject) => {
    const ffp = spawn(FFMPEG, [
      '-y', '-hide_banner', '-loglevel', 'error',
      '-f', 'image2pipe', '-framerate', String(FPS), '-i', '-',
      '-c:v', 'libx264', '-preset', 'medium', '-crf', '19',
      '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
      path.join(OUT, 'video.mp4'),
    ], { stdio: ['pipe', 'inherit', 'inherit'] });
    ffp.on('error', reject);
    ffp.on('close', code => code === 0 ? resolve() : reject(new Error('ffmpeg video exit ' + code)));

    (async () => {
      const t0 = Date.now();
      for (let i = 0; i < FRAMES; i++) {
        const t = i / FPS;
        await page.evaluate(tt => window.renderAt(tt), t);
        const buf = await page.screenshot({ type: 'jpeg', quality: 95, optimizeForSpeed: true });
        if (!ffp.stdin.write(buf)) await new Promise(r => ffp.stdin.once('drain', r));
        if (i % 150 === 0) {
          const el = (Date.now() - t0) / 1000;
          process.stdout.write(`frame ${i}/${FRAMES} (${(i / FRAMES * 100).toFixed(0)}%) ${el.toFixed(0)}s\n`);
        }
      }
      ffp.stdin.end();
      await browser.close();
      process.stdout.write(`frames selesai: ${FRAMES} frame dalam ${((Date.now() - t0) / 1000).toFixed(0)}s\n`);
    })().catch(async e => { try { await browser.close(); } catch (_) {} reject(e); });
  });
}

async function mixAudio() {
  const inputs = [];
  const filters = [];
  manifest.scenes.forEach((s, i) => {
    inputs.push('-i', s.audio);
    const ms = Math.round(s.narrationStart * 1000);
    filters.push(`[${i}:a]adelay=${ms}|${ms},volume=1.0[a${i}]`);
  });
  const mix = manifest.scenes.map((_, i) => `[a${i}]`).join('');
  const fc = filters.join(';') + `;${mix}amix=inputs=${manifest.scenes.length}:duration=longest:normalize=0,apad[aout]`;
  await ff([
    '-y', '-hide_banner', '-loglevel', 'error', ...inputs,
    '-filter_complex', fc, '-map', '[aout]',
    '-c:a', 'pcm_s16le', '-ar', '48000', '-ac', '2', '-t', String(TOTAL),
    path.join(OUT, 'audio.wav'),
  ]);
  console.log('audio.wav selesai');
}

async function mux() {
  await ff([
    '-y', '-hide_banner', '-loglevel', 'error',
    '-i', path.join(OUT, 'video.mp4'),
    '-i', path.join(OUT, 'audio.wav'),
    '-map', '0:v:0', '-map', '1:a:0',
    '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-ar', '48000',
    '-shortest', '-movflags', '+faststart',
    path.join(OUT, 'computational-thinking.mp4'),
  ]);
  const st = fs.statSync(path.join(OUT, 'computational-thinking.mp4'));
  console.log(`final: ${(st.size / 1024 / 1024).toFixed(1)} MB`);
}

(async () => {
  const step = process.argv[2] || 'all';
  if (step === 'frames' || step === 'all') await renderFrames();
  if (step === 'audio' || step === 'all') await mixAudio();
  if (step === 'mux' || step === 'all') await mux();
})().catch(e => { console.error(e); process.exit(1); });
