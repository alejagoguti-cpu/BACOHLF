import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: 'new', args: ['--use-angle=d3d11', '--enable-gpu'] });
const p = await b.newPage(); await p.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
p.on('pageerror', (e) => console.log('PAGEERR', e.message));
const t0 = Date.now();
await p.goto(process.argv[2], { waitUntil: 'domcontentloaded', timeout: 120000 });
await p.waitForSelector('#cargando.fin', { timeout: 120000 });
console.log('modelo listo en', ((Date.now() - t0) / 1000).toFixed(1) + ' s');
await new Promise((r) => setTimeout(r, 5000));
const top = await p.evaluate(() => document.querySelector('[data-escena="problema"]').offsetTop);
await p.evaluate((y) => scrollTo(0, y), top + 20); await new Promise((r) => setTimeout(r, 4000));
await p.screenshot({ path: 'tools/cap/mv_problema.jpg', quality: 70 });
// tocar una capa en el dock: aviso
console.log(await p.evaluate(() => { const b = document.querySelectorAll('#capas .capa')[4]; const r = b.getBoundingClientRect(); return JSON.stringify([r.x, r.y, r.width, r.height, getComputedStyle(b).visibility]); }));
await p.evaluate(() => document.querySelectorAll('#capas .capa')[4].click()); await new Promise((r) => setTimeout(r, 500));
await p.screenshot({ path: 'tools/cap/mv_aviso.jpg', quality: 70 });
// modo exploración
await p.evaluate(() => document.querySelector('.btn-explorar').click()); await new Promise((r) => setTimeout(r, 2500));
await p.screenshot({ path: 'tools/cap/mv_libre.jpg', quality: 70 });
const m = await p.metrics(); console.log('JS heap', (m.JSHeapUsedSize / 1e6).toFixed(0) + ' MB');
await b.close();
