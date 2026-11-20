// Capturas de las secciones comerciales (después del recorrido)
import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: 'new', args: ['--use-angle=d3d11', '--ignore-gpu-blocklist'] });
const p = await b.newPage(); await p.setViewport({ width: 1440, height: 860 });
p.on('pageerror', (e) => console.log('PAGEERR', e.message));
const w = (ms) => new Promise((r) => setTimeout(r, ms));
await p.goto(process.argv[2], { waitUntil: 'networkidle0' }); await w(7000);
for (const id of process.argv.slice(3)) {
  await p.evaluate((id) => { const el = document.getElementById(id); window.scrollTo(0, el.getBoundingClientRect().top + scrollY - 40); }, id);
  await w(400); await p.evaluate(() => window.scrollBy(0, 1)); await w(2600);
  await p.screenshot({ path: `tools/cap/s_${id}.jpg`, quality: 70 });
}
await b.close();
