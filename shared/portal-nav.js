/**
 * RUANG BELAJAR UMS — UNIVERSAL PORTAL NAVIGATION
 * Medical Clinic Style Navbar connecting all 7 course modules
 */

(function () {
  if (document.getElementById('ums-portal-bar')) return;

  const courses = [
    { id: 'latihan-eap', name: 'English for Academic Purposes (EAP)', badge: 'Listening & Essay', path: 'latihan-eap/' },
    { id: 'belajar-uts-kepemimpinan', name: 'Kepemimpinan & KKI', badge: '40+ Kasus Esai', path: 'belajar-uts-kepemimpinan/' },
    { id: 'latihan-pemrograman-visual', name: 'Pemrograman Visual', badge: 'Alice 3 & OOP', path: 'latihan-pemrograman-visual/' },
    { id: 'materi-alpro', name: 'Algoritma & Pemrograman', badge: 'Python Dasar', path: 'materi-alpro/' },
    { id: 'latihan-kalkulus', name: 'Kalkulus Reguler', badge: 'Limit & Turunan', path: 'latihan-kalkulus/' },
    { id: 'materi-fungsi', name: 'Fungsi & Komposisi', badge: 'Modul Matematika', path: 'materi-fungsi/' },
    { id: 'materi-lohim', name: 'Logika & Himpunan', badge: 'Boolean & Venn', path: 'materi-lohim/' }
  ];

  // Determine root path & base URLs
  const isGitHubPages = window.location.hostname.includes('github.io');
  const basePortalUrl = isGitHubPages ? 'https://voltakyy.github.io/' : '../';

  // Determine current course
  const currentPath = window.location.pathname.replace(/\\/g, '/');
  let currentCourse = courses.find(c => currentPath.includes(c.id));

  // Determine relative root for local CSS/JS fallback
  let localRoot = '../';
  if (document.currentScript && document.currentScript.src) {
    try {
      const scriptUrl = new URL(document.currentScript.src, window.location.href);
      const idx = scriptUrl.pathname.lastIndexOf('shared/');
      if (idx !== -1) {
        localRoot = scriptUrl.pathname.substring(0, idx);
        if (!localRoot.endsWith('/')) localRoot += '/';
      }
    } catch (e) {}
  }

  // Create navbar DOM
  const nav = document.createElement('nav');
  nav.id = 'ums-portal-bar';
  nav.setAttribute('aria-label', 'Navigasi Portal Utama UMS');

  const currentTitle = currentCourse ? currentCourse.name : 'Ruang Belajar UMS';
  const homeUrl = isGitHubPages ? 'https://voltakyy.github.io/' : localRoot;

  nav.innerHTML = `
    <div class="ums-portal-inner">
      <div class="ums-portal-left">
        <a href="${homeUrl}" class="ums-portal-home-link" title="Kembali ke Beranda Portal Ruang Belajar UMS">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <span>Portal Utama</span>
        </a>
        <span class="ums-portal-crumb-sep" aria-hidden="true">/</span>
        <div class="ums-portal-current-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--portal-bar-accent);" aria-hidden="true">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
          <span>${currentTitle}</span>
        </div>
      </div>
      <div class="ums-portal-right">
        <div class="ums-portal-dropdown">
          <button type="button" class="ums-portal-dropbtn" id="umsPortalDropBtn" aria-expanded="false" aria-haspopup="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>Ganti Matkul</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <ul class="ums-portal-menu" id="umsPortalMenu" role="menu" aria-labelledby="umsPortalDropBtn">
            <li class="ums-portal-menu-header">Mata Kuliah Tersedia</li>
            ${courses.map(c => {
              const isCurrent = currentCourse && currentCourse.id === c.id;
              const targetUrl = isGitHubPages ? `https://voltakyy.github.io/${c.path}` : `${localRoot}${c.path}`;
              return `
                <li role="none">
                  <a href="${targetUrl}" class="ums-portal-item ${isCurrent ? 'current' : ''}" role="menuitem">
                    <span>${c.name}</span>
                    <span class="ums-portal-item-tag">${c.badge}</span>
                  </a>
                </li>
              `;
            }).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;

  function insertNav() {
    if (document.body) {
      document.body.insertBefore(nav, document.body.firstChild);
      bindDropdown();
    } else {
      document.addEventListener('DOMContentLoaded', () => {
        document.body.insertBefore(nav, document.body.firstChild);
        bindDropdown();
      });
    }
  }

  function bindDropdown() {
    const btn = document.getElementById('umsPortalDropBtn');
    const menu = document.getElementById('umsPortalMenu');
    if (!btn || !menu) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = menu.classList.toggle('active');
      btn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    });

    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) {
        menu.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        menu.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  insertNav();
})();
