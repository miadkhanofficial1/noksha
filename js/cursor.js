/* ============================================================
   NOKSHA — Custom Cursor + Entry Animation + Smart Effects
   Logo colors: Navy #1C1259 | Pink #EE4367 | Orange #FF7800
   ============================================================ */

(function () {

  /* ── 1. ENTRY ANIMATION ── */
  function createEntryOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'noksha-entry';
    overlay.innerHTML = `
      <div class="entry-inner">
        <div class="entry-logo-wrap">
          <img src="${document.body.getAttribute('data-root') || '.'}/images/logo.png" alt="Noksha" class="entry-logo-img">
          <div class="entry-ring entry-ring-1"></div>
          <div class="entry-ring entry-ring-2"></div>
          <div class="entry-ring entry-ring-3"></div>
        </div>
        <div class="entry-brand">
          <span class="entry-bn">নকশা</span>
          <span class="entry-en">Noksha</span>
        </div>
        <div class="entry-bar"><div class="entry-bar-fill"></div></div>
        <div class="entry-tagline">বাংলা গ্রাফিক রিসোর্সের বিশাল ভান্ডার</div>
      </div>
    `;
    document.body.appendChild(overlay);

    // Dismiss after animation
    setTimeout(() => {
      overlay.classList.add('entry-fade-out');
      setTimeout(() => overlay.remove(), 700);
    }, 2600);
  }

  /* ── 2. CUSTOM CURSOR ── */
  function createCursor() {
    const dot = document.createElement('div');
    dot.id = 'nk-cursor-dot';
    const ring = document.createElement('div');
    ring.id = 'nk-cursor-ring';
    const trail = document.createElement('div');
    trail.id = 'nk-cursor-trail';
    document.body.appendChild(trail);
    document.body.appendChild(ring);
    document.body.appendChild(dot);

    let mx = -200, my = -200;
    let rx = -200, ry = -200;
    let clicking = false;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px,${my}px)`;
      // Spawn sparkle occasionally
      if (Math.random() < 0.12) spawnSparkle(mx, my);
    });

    // Ring follows with lag
    (function animateRing() {
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      ring.style.transform = `translate(${rx}px,${ry}px)`;
      trail.style.transform = `translate(${rx}px,${ry}px)`;
      requestAnimationFrame(animateRing);
    })();

    document.addEventListener('mousedown', () => {
      clicking = true;
      dot.classList.add('clicking');
      ring.classList.add('clicking');
      spawnClickBurst(mx, my);
    });
    document.addEventListener('mouseup', () => {
      clicking = false;
      dot.classList.remove('clicking');
      ring.classList.remove('clicking');
    });

    // Hover on interactive elements
    const hoverTargets = 'a, button, input, select, textarea, .design-card, .cat-card, .btn, label';
    document.addEventListener('mouseover', e => {
      if (e.target.closest(hoverTargets)) {
        ring.classList.add('hovering');
        dot.classList.add('hovering');
      }
    });
    document.addEventListener('mouseout', e => {
      if (e.target.closest(hoverTargets)) {
        ring.classList.remove('hovering');
        dot.classList.remove('hovering');
      }
    });

    // Hide native cursor
    document.documentElement.style.cursor = 'none';
    document.addEventListener('mouseleave', () => {
      dot.style.opacity = '0'; ring.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      dot.style.opacity = '1'; ring.style.opacity = '1';
    });
  }

  /* ── 3. SPARKLE TRAIL ── */
  const COLORS = ['#1C1259','#EE4367','#FF7800','#EE4367','#1C1259'];
  function spawnSparkle(x, y) {
    const s = document.createElement('div');
    s.className = 'nk-sparkle';
    const c = COLORS[Math.floor(Math.random() * COLORS.length)];
    const size = 4 + Math.random() * 5;
    s.style.cssText = `left:${x}px;top:${y}px;width:${size}px;height:${size}px;background:${c};`;
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 700);
  }

  /* ── 4. CLICK BURST ── */
  function spawnClickBurst(x, y) {
    for (let i = 0; i < 8; i++) {
      const p = document.createElement('div');
      p.className = 'nk-burst-particle';
      const angle = (i / 8) * Math.PI * 2;
      const dist = 30 + Math.random() * 30;
      const dx = Math.cos(angle) * dist;
      const dy = Math.sin(angle) * dist;
      const c = COLORS[Math.floor(Math.random() * COLORS.length)];
      p.style.cssText = `left:${x}px;top:${y}px;background:${c};
        --dx:${dx}px;--dy:${dy}px;`;
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 600);
    }
    // Ripple
    const r = document.createElement('div');
    r.className = 'nk-ripple';
    r.style.cssText = `left:${x}px;top:${y}px;`;
    document.body.appendChild(r);
    setTimeout(() => r.remove(), 700);
  }

  /* ── 5. SCROLL REVEAL ── */
  function initScrollReveal() {
    const targets = document.querySelectorAll(
      '.design-card, .cat-card, .feature-item, .collection-card, .section-head h2, .section-head p, .cta-band'
    );
    if (!targets.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('nk-revealed'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    targets.forEach((el, i) => {
      el.classList.add('nk-reveal');
      el.style.transitionDelay = `${(i % 6) * 55}ms`;
      io.observe(el);
    });
  }

  /* ── 6. FLOATING PARTICLES (background) ── */
  function initFloatingParticles() {
    const canvas = document.createElement('canvas');
    canvas.id = 'nk-particles-canvas';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    const particles = [];
    const COUNT = 28;
    const PCOLS = ['rgba(28,18,89,0.18)', 'rgba(238,67,103,0.15)', 'rgba(255,120,0,0.13)'];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: 3 + Math.random() * 6,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        col: PCOLS[Math.floor(Math.random() * PCOLS.length)],
        pulse: Math.random() * Math.PI * 2
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const dark = document.documentElement.getAttribute('data-theme') === 'dark';
      particles.forEach(p => {
        p.pulse += 0.02;
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        const scale = 1 + 0.3 * Math.sin(p.pulse);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * scale, 0, Math.PI * 2);
        // Brighten in dark mode
        const col = dark ? p.col.replace(/[\d.]+\)$/, m => Math.min(1, parseFloat(m) * 2.5) + ')') : p.col;
        ctx.fillStyle = col;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }
    draw();
  }

  /* ── 7. LOGO COLOR THEMING ── */
  function applyLogoColors() {
    const root = document.documentElement;
    const dark = root.getAttribute('data-theme') === 'dark';
    if (dark) {
      root.style.setProperty('--purple', '#7C72D9');
      root.style.setProperty('--red', '#EE4367');
      root.style.setProperty('--orange', '#FF7800');
    } else {
      root.style.setProperty('--purple', '#1C1259');
      root.style.setProperty('--red', '#EE4367');
      root.style.setProperty('--orange', '#FF7800');
    }
  }

  // Watch theme changes
  const themeObserver = new MutationObserver(applyLogoColors);
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  applyLogoColors();

  /* ── INIT ── */
  // Entry only on first visit per session
  const entryShown = sessionStorage.getItem('nk_entry_shown');
  if (!entryShown) {
    document.addEventListener('DOMContentLoaded', () => {
      createEntryOverlay();
      sessionStorage.setItem('nk_entry_shown', '1');
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    createCursor();
    initScrollReveal();
    initFloatingParticles();
  });

})();
