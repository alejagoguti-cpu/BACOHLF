// Capturas del recorrido en puntos del scroll: node tools/cap.mjs <url> [p1 p2 ...]
import puppeteer from 'puppeteer-core';
const url = process.argv[2]; const pts = process.argv.slice(3).map(Number);
const exe = ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'];
const fs = await import('node:fs');
const b = await puppeteer.launch({ executablePath: exe.find((p) => fs.existsSync(p)), headless: 'new', args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage(); await p.setViewport({ width: 1440, height: 860 });
p.on('console', (m) => m.type() === 'error' && console.log('CONSOLE', m.text()));
p.on('pageerror', (e) => console.log('PAGEERR', e.message));
await p.goto(url, { waitUntil: 'networkidle0' }); await new Promise((r) => setTimeout(r, 9000));
for (const pr of pts) {
  await p.evaluate((pr) => { const st = window.scrollMax ?? (document.documentElement.scrollHeight - innerHeight); window.scrollTo(0, pr * (innerHeight * 17)); }, pr);
  await new Promise((r) => setTimeout(r, 1200));
  await p.screenshot({ path: `tools/cap/p${String(Math.round(pr * 1000)).padStart(4, '0')}.jpg`, quality: 70 });
}
await b.close();
