/**
 * RUANG BELAJAR UMS — PORTAL CLIENT ENGINE
 * Live search, category filtering, responsive dock sync, and keyboard shortcuts
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const searchInput = document.getElementById('courseSearch');
  const filterPills = document.querySelectorAll('.filter-badge-btn, .filter-pill');
  const courseCards = document.querySelectorAll('.service-card, .course-card');
  const dockItems = document.querySelectorAll('.dock-item');
  const emptyState = document.getElementById('emptyState');
  const resetBtn = document.getElementById('resetSearch');

  let activeCategory = 'all';
  let searchQuery = '';

  function filterItems() {
    let visibleCards = 0;
    const q = searchQuery.toLowerCase().trim();

    // Filter Detailed Service Cards
    courseCards.forEach(card => {
      const categories = (card.dataset.category || '').toLowerCase().split(' ');
      const text = (card.innerText || '').toLowerCase();

      const matchesCategory = (activeCategory === 'all') || categories.includes(activeCategory);
      const matchesSearch = !q || text.includes(q);

      if (matchesCategory && matchesSearch) {
        card.style.display = '';
        visibleCards++;
      } else {
        card.style.display = 'none';
      }
    });

    // Filter Quick Dock Launcher items
    dockItems.forEach(dock => {
      const categories = (dock.dataset.category || '').toLowerCase().split(' ');
      const text = (dock.innerText || '').toLowerCase();

      const matchesCategory = (activeCategory === 'all') || categories.includes(activeCategory);
      const matchesSearch = !q || text.includes(q);

      dock.style.display = (matchesCategory && matchesSearch) ? '' : 'none';
    });

    // Handle Empty State
    if (emptyState) {
      emptyState.style.display = visibleCards === 0 ? 'block' : 'none';
    }
  }

  // Live search input listeners
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
        const isAll = (b.dataset.filter === 'all');
        b.classList.toggle('active', isAll);
        b.setAttribute('aria-selected', isAll ? 'true' : 'false');
      });
      filterItems();
      if (searchInput) searchInput.focus();
    });
  }
});
