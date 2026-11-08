/**
 * RUANG BELAJAR UMS — MODERN TECH DEVELOPER SCRIPT
 * Raycast/Linear style command search, keyboard shortcuts, and dark/light persistence
 */

document.addEventListener('DOMContentLoaded', () => {
  // Theme Switching (Default: Dark)
  const htmlEl = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const storedTheme = localStorage.getItem('ums_portal_theme') || 'dark';
  
  function applyTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('ums_portal_theme', theme);
  }
  
  applyTheme(storedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = htmlEl.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }

  // Live Spotlight Search & Filtering
  const searchInput = document.getElementById('courseSearch');
  const filterPills = document.querySelectorAll('.filter-pill');
  const courseCards = document.querySelectorAll('.course-card');
  const dockItems = document.querySelectorAll('.dock-item');
  const emptyState = document.getElementById('emptyState');
  const resetBtn = document.getElementById('resetSearch');

  let activeCategory = 'all';
  let searchQuery = '';

  function filterItems() {
    let visibleCards = 0;
    const q = searchQuery.toLowerCase().trim();

    // Filter Cards
    courseCards.forEach(card => {
      const categories = (card.dataset.category || '').toLowerCase().split(' ');
      const text = (card.innerText || '').toLowerCase();

      const matchesCategory = (activeCategory === 'all') || categories.includes(activeCategory);
      const matchesSearch = !q || text.includes(q);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        visibleCards++;
      } else {
        card.style.display = 'none';
      }
    });

    // Filter Dock items
    dockItems.forEach(dock => {
      const categories = (dock.dataset.category || '').toLowerCase().split(' ');
      const text = (dock.innerText || '').toLowerCase();

      const matchesCategory = (activeCategory === 'all') || categories.includes(activeCategory);
      const matchesSearch = !q || text.includes(q);

      dock.style.display = (matchesCategory && matchesSearch) ? 'flex' : 'none';
    });

    // Handle Empty State
    if (emptyState) {
      emptyState.style.display = visibleCards === 0 ? 'block' : 'none';
    }
  }

  // Search input listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      filterItems();
    });

    // Keyboard shortcuts: '/' or 'Cmd+K / Ctrl+K' to focus search, 'Escape' to clear
    document.addEventListener('keydown', (e) => {
      if ((e.key === '/' || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
      } else if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.value = '';
        searchQuery = '';
        searchInput.blur();
        filterItems();
      }
    });
  }

  // Category filter tabs
  filterPills.forEach(btn => {
    btn.addEventListener('click', () => {
      filterPills.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      activeCategory = btn.dataset.filter || 'all';
      filterItems();
    });
  });

  // Reset search button
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      searchQuery = '';
      activeCategory = 'all';
      filterPills.forEach(b => {
        const isAll = b.dataset.filter === 'all';
        b.classList.toggle('active', isAll);
        b.setAttribute('aria-selected', isAll ? 'true' : 'false');
      });
      filterItems();
      if (searchInput) searchInput.focus();
    });
  }
});
