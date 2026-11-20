// ───────────────────────── landing: interacciones dentro del recorrido ─────────────────────────
function irAFase(f: number) {
  const t = (FASES[f - 1]?.t0 ?? 0) + (f === 3 ? 20 : 6);
  window.scrollTo({ top: st.start + (st.end - st.start) * (t / T_FIN), behavior: 'smooth' });
}
function landing() {
  addEventListener('pointermove', (ev) => { if (modo === 'cine') { U.tpx = ev.clientX / innerWidth - 0.5; U.tpy = ev.clientY / innerHeight - 0.5; } });
  document.querySelectorAll<HTMLElement>('[data-ir]').forEach((b) => b.addEventListener('click', () => irAFase(+b.dataset.ir!)));
  $('#marcas').addEventListener('click', (e) => { const li = (e.target as HTMLElement).closest('li'); if (li) irAFase([...li.parentElement!.children].indexOf(li) + 1); });
  $('#hModo').addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLElement>('button'); if (!b) return;
    hudIntegrada = b.dataset.m === 'int';
    document.querySelectorAll('#hModo button').forEach((x) => x.classList.toggle('on', x === b));
  });
  // B · disciplinas de las redes
  const pintarDisc = () => {
    $('#chipsDisc').innerHTML = DISCS.filter((d) => Object.entries(CATS).some(([c, v]) => v.disc === d && v.mep && niveles.some((n) => n.mats.has(c)))).map((d) => {
      const on = Object.entries(CATS).some(([c, v]) => v.disc === d && catsVisibles.has(c));
      const color = Object.values(CATS).find((v) => v.disc === d && v.mep)?.arq;
      return `<button class="chip ${on ? 'on' : ''}" data-d="${d}"><i style="background:${color}"></i>${d}</button>`;
    }).join('');
  };
  pintarDisc();
  $('#chipsDisc').addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLElement>('.chip'); if (!b?.dataset.d) return;
    const cats = Object.entries(CATS).filter(([, v]) => v.disc === b.dataset.d).map(([c]) => c);
    const on = cats.some((c) => catsVisibles.has(c));
    cats.forEach((c) => on ? catsVisibles.delete(c) : catsVisibles.add(c));
    pintarDisc();
  });
  if (critico.ok) $('#txtCritico').innerHTML = `Separación mínima medida en el modelo entre la red contra incendios y el conduit eléctrico: <b>${(critico.d * 100).toFixed(1).replace('.', ',')} cm</b>. Un punto así se lleva a la mesa técnica antes de instalar.`;
  // C · pisos
  $('#chipsNiveles').innerHTML = niveles.map((n, i) => `<button class="chip" data-n="${i}">${n.info.nombre}</button>`).join('');
  $('#chipsNiveles').addEventListener('mouseover', (e) => { const b = (e.target as HTMLElement).closest<HTMLElement>('.chip'); if (b) S.sel = +b.dataset.n!; });
  $('#chipsNiveles').addEventListener('mouseleave', () => { S.sel = -1; });
  $('#chipsNiveles').addEventListener('click', (e) => { const b = (e.target as HTMLElement).closest<HTMLElement>('.chip'); if (b) entrarLibre(+b.dataset.n!); });
  // simulador (sección de inversión)
  let integrada = false;
  const M = (v: number) => '$' + v.toLocaleString('es-CO', { maximumFractionDigits: 1 }) + ' M';
  const vis = { total: 0, iva: 0, eq: 0 };
  const calc = () => {
    const meses = +$<HTMLInputElement>('#rMeses').value, obra = +$<HTMLInputElement>('#rObra').value;
    $('#vMeses').textContent = meses + ' meses'; $('#vObra').textContent = '$' + obra.toLocaleString('es-CO') + ' M';
    const total = 111 + meses * (integrada ? 13.8 : 23);
    gsap.to(vis, { total, iva: total * 1.19, eq: (100 * total) / obra, duration: 0.6, ease: 'power2.out', onUpdate: () => {
      $('#oTotal').textContent = M(Math.round(vis.total * 10) / 10);
      $('#oIva').textContent = M(Math.round(vis.iva * 10) / 10);
      $('#oEq').textContent = vis.eq.toFixed(2).replace('.', ',') + ' %';
    } });
  };
  $('#rMeses').addEventListener('input', calc); $('#rObra').addEventListener('input', calc);
  $('#segModo').addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLElement>('button'); if (!b) return;
    integrada = b.dataset.m === 'int';
    document.querySelectorAll('#segModo button').forEach((x) => x.classList.toggle('on', x === b)); calc();
  });
  calc();
}

