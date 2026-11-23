import puppeteer from 'puppeteer-core';
const url = process.argv[2];
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: 'new', args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage(); await p.setViewport({ width: 1600, height: 900 });
p.on('pageerror', (e) => console.log('PAGEERR', e.message));
await p.goto(url, { waitUntil: 'networkidle0', timeout: 120000 }); await new Promise((r) => setTimeout(r, 7000));
// 1) sobre el edificio (hero): elemento encendido + etiqueta
await p.mouse.move(900, 600); await p.mouse.move(1150, 420, { steps: 12 }); await new Promise((r) => setTimeout(r, 500));
await p.screenshot({ path: 'tools/cap/cur_1modelo.jpg', quality: 75 });
// 2) sobre un botón: destello + barrido
await p.mouse.move(260, 640, { steps: 10 });
const bt = await p.$('.ctas-hero .btn.oro'); const r = await bt.boundingBox();
await p.mouse.move(r.x + r.width / 2, r.y + r.height / 2, { steps: 8 }); await new Promise((r) => setTimeout(r, 250));
await p.screenshot({ path: 'tools/cap/cur_2boton.jpg', quality: 75 });
// 3) chips del reto con íconos
const top = await p.evaluate(() => document.querySelector('[data-escena="problema"]').offsetTop);
await p.evaluate((y) => scrollTo(0, y), top + 40); await new Promise((r) => setTimeout(r, 3800));
const ch = await p.$$('.nube-chips .chip'); const r2 = await ch[7].boundingBox();
await p.mouse.move(r2.x + r2.width / 2, r2.y + r2.height / 2, { steps: 10 }); await new Promise((r) => setTimeout(r, 300));
await p.screenshot({ path: 'tools/cap/cur_3chips.jpg', quality: 75 });
// 4) etapas e iconos
const t2 = await p.evaluate(() => document.querySelector('[data-escena="etapas"]').offsetTop);
await p.evaluate((y) => scrollTo(0, y), t2 + 40); await new Promise((r) => setTimeout(r, 3800));
const et = await p.$$('.etapa'); const r3 = await et[2].boundingBox();
await p.mouse.move(r3.x + 60, r3.y + 60, { steps: 8 }); await new Promise((r) => setTimeout(r, 300));
await p.screenshot({ path: 'tools/cap/cur_4etapas.jpg', quality: 75 });
await b.close();
