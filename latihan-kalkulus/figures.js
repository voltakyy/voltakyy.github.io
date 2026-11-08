/* Grafik SVG untuk pembahasan domain & range */
(function () {
  const W = 460;
  const H = 300;
  const PAD = 34;

  function graphSVG(config) {
    const {
      xMin, xMax, yMin, yMax,
      a, b, c,
      label,
      roots = [],
      vertex,
      vertexLabel,
      yIntercept
    } = config;

    const sx = x => PAD + ((x - xMin) / (xMax - xMin)) * (W - PAD * 2);
    const sy = y => H - PAD - ((y - yMin) / (yMax - yMin)) * (H - PAD * 2);

    let grid = '';
    for (let x = Math.ceil(xMin); x <= Math.floor(xMax); x += 1) {
      grid += `<line x1="${sx(x).toFixed(1)}" y1="${PAD}" x2="${sx(x).toFixed(1)}" y2="${H - PAD}" stroke="#24549b" stroke-width="1" opacity=".12"/>`;
    }
    for (let y = Math.ceil(yMin); y <= Math.floor(yMax); y += 1) {
      grid += `<line x1="${PAD}" y1="${sy(y).toFixed(1)}" x2="${W - PAD}" y2="${sy(y).toFixed(1)}" stroke="#24549b" stroke-width="1" opacity=".12"/>`;
    }

    let curve = '';
    const steps = 240;
    for (let i = 0; i <= steps; i += 1) {
      const x = xMin + (i / steps) * (xMax - xMin);
      const y = a * x * x + b * x + c;
      curve += `${i === 0 ? 'M' : 'L'}${sx(x).toFixed(1)} ${sy(y).toFixed(1)}`;
    }

    const axisY = sy(0);
    const axisX = sx(0);
    const xAxis = yMin <= 0 && yMax >= 0
      ? `<path d="M${PAD} ${axisY.toFixed(1)}H${W - PAD}" stroke="#1c2a2e" stroke-width="1.7" stroke-linecap="round"/>
         <path d="M${W - PAD} ${axisY.toFixed(1)}l-8-4v8Z" fill="#1c2a2e"/>`
      : '';
    const yAxis = xMin <= 0 && xMax >= 0
      ? `<path d="M${axisX.toFixed(1)} ${H - PAD}V${PAD}" stroke="#1c2a2e" stroke-width="1.7" stroke-linecap="round"/>
         <path d="M${axisX.toFixed(1)} ${PAD}l-4 8h8Z" fill="#1c2a2e"/>`
      : '';

    let points = '';
    roots.forEach(root => {
      const px = sx(root);
      const py = sy(0);
      points += `<circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="4" fill="#d4553f" stroke="#1c2a2e" stroke-width="1.4"/>`;
      points += `<text x="${px.toFixed(1)}" y="${(py + 17).toFixed(1)}" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#5c6b6c">${String(root).replace('-', '−')}</text>`;
    });

    let vertexMark = '';
    if (vertex) {
      const [vx, vy] = vertex;
      const px = sx(vx);
      const py = sy(vy);
      vertexMark += `<path d="M${px.toFixed(1)} ${py.toFixed(1)}V${axisY.toFixed(1)}" stroke="#6e7f3d" stroke-width="1.2" stroke-dasharray="4 4"/>`;
      vertexMark += `<path d="M${px.toFixed(1)} ${py.toFixed(1)}H${axisX.toFixed(1)}" stroke="#6e7f3d" stroke-width="1.2" stroke-dasharray="4 4"/>`;
      vertexMark += `<circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="4.5" fill="#6e7f3d" stroke="#1c2a2e" stroke-width="1.4"/>`;
      vertexMark += `<text x="${(px + 8).toFixed(1)}" y="${(py - 8).toFixed(1)}" font-family="'IBM Plex Mono',monospace" font-size="8.5" fill="#52622c">${vertexLabel || ''}</text>`;
    }

    let intercept = '';
    if (typeof yIntercept === 'number' && xMin <= 0 && xMax >= 0) {
      const py = sy(yIntercept);
      intercept = `<circle cx="${axisX.toFixed(1)}" cy="${py.toFixed(1)}" r="3.2" fill="#e7c45a" stroke="#1c2a2e" stroke-width="1.2"/>
        <text x="${(axisX - 8).toFixed(1)}" y="${(py + 3).toFixed(1)}" text-anchor="end" font-family="'IBM Plex Mono',monospace" font-size="8.5" fill="#5c6b6c">${String(yIntercept).replace('-', '−')}</text>`;
    }

    return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Grafik ${label}">
      <rect width="${W}" height="${H}" fill="#fffdf6"/>
      ${grid}
      <path d="${curve}" fill="none" stroke="#24549b" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
      ${xAxis}
      ${yAxis}
      ${intercept}
      ${points}
      ${vertexMark}
      <text x="${PAD}" y="${PAD - 12}" font-family="'IBM Plex Mono',monospace" font-size="10" fill="#1c2a2e">${label}</text>
      <text x="${W - PAD}" y="${H - 9}" text-anchor="end" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#8b9797">x</text>
      <text x="${PAD + 6}" y="${PAD + 10}" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#8b9797">y</text>
    </svg>`;
  }

  window.FIGURES = {
    parabolaA: {
      svg: graphSVG({
        xMin: -4.7, xMax: 1.5, yMin: -1.6, yMax: 8.4,
        a: 1, b: 5, c: 6,
        label: 'y = x² + 5x + 6',
        roots: [-3, -2],
        vertex: [-2.5, -0.25],
        vertexLabel: '(−2.5, −0.25)',
        yIntercept: 6
      }),
      caption: 'Parabola terbuka ke atas. Nilai terkecil ada di puncak, sehingga range dimulai dari −0.25.'
    },
    parabolaB: {
      svg: graphSVG({
        xMin: -1.4, xMax: 3.9, yMin: -7.8, yMax: 6.2,
        a: 2, b: -5, c: -3,
        label: 'y = 2x² − 5x − 3',
        roots: [-0.5, 3],
        vertex: [1.25, -6.125],
        vertexLabel: '(1.25, −6.125)',
        yIntercept: -3
      }),
      caption: 'Karena a = 2 > 0, parabola terbuka ke atas dan range-nya dimulai dari nilai puncak −6.125.'
    }
  };
})();
