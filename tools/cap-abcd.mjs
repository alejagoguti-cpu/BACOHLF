import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: 'new', args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage(); await p.setViewport({ width: 1887, height: 905 });
p.on('pageerror', (e) => console.log('PAGEERR', e.message));
await p.goto(process.argv[2], { waitUntil: 'networkidle0', timeout: 120000 }); await new Promise((r) => setTimeout(r, 6000));
for (const n of ['problema', 'etapas', 'honorarios']) {
  const top = await p.evaluate((n) => document.querySelector(`[data-escena="${n}"]`).offsetTop, n);
  await p.evaluate((y) => scrollTo(0, y), top + 30); await new Promise((r) => setTimeout(r, 4500));
  if (n === 'honorarios') { await p.click('#segModo [data-m="int"]'); await new Promise((r) => setTimeout(r, 2200)); }
  await p.screenshot({ path: `tools/cap/abcd_${n}.jpg`, quality: 72 });
}
await b.close();
