import puppeteer from 'puppeteer-core';
const [url, W, H] = [process.argv[2], +process.argv[3], +process.argv[4]];
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: 'new', args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage(); await p.setViewport({ width: W, height: H });
p.on('pageerror', (e) => console.log('PAGEERR', e.message));
await p.goto(url, { waitUntil: 'networkidle0', timeout: 120000 });
for (const t of [1500, 3500, 7000]) { await new Promise((r) => setTimeout(r, t === 1500 ? 1500 : t === 3500 ? 2000 : 3500)); await p.screenshot({ path: `tools/cap/h_${W}_${t}.jpg`, quality: 72 }); }
await p.mouse.move(W * 0.85, H * 0.2); await new Promise((r) => setTimeout(r, 1500)); await p.screenshot({ path: `tools/cap/h_${W}_mouse.jpg`, quality: 72 });
await b.close();
