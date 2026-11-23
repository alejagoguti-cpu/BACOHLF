import puppeteer from 'puppeteer-core';
const url = process.argv[2]; const tams = [[1887, 905], [1366, 768], [1440, 900], [1920, 1080], [390, 844]];
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: 'new', args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage();
for (const [W, H] of tams) {
  await p.setViewport({ width: W, height: H });
  await p.goto(url, { waitUntil: 'networkidle0', timeout: 120000 }); await new Promise((r) => setTimeout(r, 7000));
  // choques: rectángulos de los bloques del hero que se cruzan entre sí o con cabecera/dock
  const choques = await p.evaluate(() => {
    const sel = ['#top', '.badge', '.hero h1', '.rota', '.hero .lead', '.ctas-hero', '.hero .stats', '.hero .marquee', '#dock', '.fl1 .fcard', '.fl2 .fcard', '.fl3 .fcard', '.fl4 .fcard'];
    const r = sel.map((s) => { const e = document.querySelector(s); if (!e) return null; const cs = getComputedStyle(e); if (cs.display === 'none' || e.offsetParent === null && s !== '#top') return null; const b = e.getBoundingClientRect(); return b.width ? { s, b } : null; }).filter(Boolean);
    const out = [];
    for (let i = 0; i < r.length; i++) for (let j = i + 1; j < r.length; j++) {
      const A = r[i].b, B = r[j].b;
      if (A.left < B.right - 2 && B.left < A.right - 2 && A.top < B.bottom - 2 && B.top < A.bottom - 2) out.push(r[i].s + ' × ' + r[j].s);
    }
    return out;
  });
  console.log(W + 'x' + H, choques.length ? choques.join(' | ') : 'sin choques');
  await p.screenshot({ path: `tools/cap/hh_${W}.jpg`, quality: 70 });
}
await b.close();
