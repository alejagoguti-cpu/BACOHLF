import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: 'new', args: ['--use-angle=d3d11'] });
const p = await b.newPage(); await p.setViewport({ width: 1887, height: 905 });
await p.goto('http://localhost:4317/', { waitUntil: 'networkidle0' }); await new Promise((r) => setTimeout(r, 6000));
const top = await p.evaluate(() => document.querySelector('[data-escena="etapas"]').offsetTop);
await p.evaluate((y) => scrollTo(0, y), top + 30);
for (const t of [300, 1500, 4500]) { await new Promise((r) => setTimeout(r, t === 300 ? 300 : t === 1500 ? 1200 : 3000));
  console.log(t, await p.evaluate(() => ({ y: scrollY, top: document.querySelector('[data-escena="etapas"]').getBoundingClientRect().top, op: getComputedStyle(document.querySelector('[data-escena="etapas"] .etapa')).opacity, html: document.documentElement.style.overflow, modo: document.body.dataset.modo }))); }
await b.close();
