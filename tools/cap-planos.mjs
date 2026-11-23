import puppeteer from 'puppeteer-core'; import fs from 'node:fs';
const [url, W, H] = [process.argv[2], +process.argv[3], +process.argv[4]];
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: 'new', args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage(); await p.setViewport({ width: W, height: H });
p.on('pageerror', (e) => console.log('PAGEERR', e.message));
await p.goto(url, { waitUntil: 'networkidle0', timeout: 120000 }); await new Promise((r) => setTimeout(r, 5000));
const top = await p.evaluate(() => document.querySelector('[data-escena="planos"]').offsetTop);
for (const y of [top - 900, top - 400, top + 40]) { await p.evaluate((y) => scrollTo(0, y), y); await new Promise((r) => setTimeout(r, 700)); }
await new Promise((r) => setTimeout(r, 1200)); await p.screenshot({ path: `tools/cap/pl_${W}_a.jpg`, quality: 70 });
await new Promise((r) => setTimeout(r, 3500)); await p.screenshot({ path: `tools/cap/pl_${W}_b.jpg`, quality: 70 });
await p.click('#tabsPlanos [data-s="agua"]'); await new Promise((r) => setTimeout(r, 3500)); await p.screenshot({ path: `tools/cap/pl_${W}_c.jpg`, quality: 70 });
await p.click('#tabsPlanos [data-s="san"]'); await new Promise((r) => setTimeout(r, 3500)); await p.screenshot({ path: `tools/cap/pl_${W}_e.jpg`, quality: 70 });
await new Promise((r) => setTimeout(r, 1200));
await p.evaluate(() => document.querySelector('.lamina.on').click()); await new Promise((r) => setTimeout(r, 2500));
await p.screenshot({ path: `tools/cap/pl_${W}_d.jpg`, quality: 70 });
await b.close();
