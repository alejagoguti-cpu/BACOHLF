// Capturas por sección: node tools/cap-landing.mjs <url> [ancho alto]
import puppeteer from 'puppeteer-core';
import fs from 'node:fs';
const url = process.argv[2]; const W = +(process.argv[3] ?? 1440), H = +(process.argv[4] ?? 860);
const exe = ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'].find((p) => fs.existsSync(p));
const b = await puppeteer.launch({ executablePath: exe, headless: 'new', args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage(); await p.setViewport({ width: W, height: H });
p.on('console', (m) => m.type() === 'error' && console.log('CONSOLE', m.text()));
p.on('pageerror', (e) => console.log('PAGEERR', e.message));
await p.goto(url, { waitUntil: 'networkidle0', timeout: 120000 }); await new Promise((r) => setTimeout(r, 6000));
fs.mkdirSync('tools/cap', { recursive: true });
await p.screenshot({ path: `tools/cap/l_${W}_00hero.jpg`, quality: 70 });
const secs = await p.evaluate(() => [...document.querySelectorAll('[data-escena]')].map((s) => ({ n: s.dataset.escena, top: s.offsetTop, h: s.offsetHeight })));
let k = 1;
for (const s of secs) {
  if (s.n === 'hero') continue;
  const offs = s.n === 'capas' ? [0.03, 0.2, 0.37, 0.53, 0.7, 0.86] : [0.1];
  for (const o of offs) {
    // bajar por pasos para que disparen los ScrollTrigger
    await p.evaluate((y) => window.scrollTo(0, y), s.top + s.h * o);
    await new Promise((r) => setTimeout(r, s.n === 'interior' ? 9000 : 3400));
    await p.screenshot({ path: `tools/cap/l_${W}_${String(k++).padStart(2, '0')}${s.n}.jpg`, quality: 70 });
  }
}
await b.close();
