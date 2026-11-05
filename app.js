/**
 * RUANG BELAJAR INFORMATIKA UMS
 * iOS 18 Cupertino Light Interaction Script
 */

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('courseSearch');
  const segmentButtons = document.querySelectorAll('.segment-btn');
  const cards = document.querySelectorAll('.ios-card');
  const emptyState = document.getElementById('emptyState');
  const resetBtn = document.getElementById('resetSearch');

  let activeCategory = 'all';
  let searchQuery = '';

  function filterCards() {
    let visibleCount = 0;
    const q = searchQuery.toLowerCase().trim();

    cards.forEach(card => {
      const cardCategory = card.dataset.category || '';
      const cardText = (card.innerText || '').toLowerCase();

      // Check category match
      const matchesCategory = (activeCategory === 'all') || (cardCategory === activeCategory) || (card.classList.contains('card-roadmap'));

      // Check search query match
      const matchesSearch = !q || cardText.includes(q);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (emptyState) {
      if (visibleCount === 0) {
        emptyState.classList.add('visible');
      } else {
        emptyState.classList.remove('visible');
      }
    }
  }

  // Live search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      filterCards();
    });

    // Keyboard shortcut '/' to focus search, 'Esc' to clear
    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
      } else if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.value = '';
        searchQuery = '';
        searchInput.blur();
        filterCards();
      }
    });
  }

  // Segmented control tabs
  segmentButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      segmentButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      activeCategory = btn.dataset.filter || 'all';
      filterCards();
    });
  });

  // Reset button in empty state
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      searchQuery = '';
      activeCategory = 'all';
      segmentButtons.forEach(b => {
        const isAll = b.dataset.filter === 'all';
        b.classList.toggle('active', isAll);
        b.setAttribute('aria-selected', isAll ? 'true' : 'false');
      });
      filterCards();
      if (searchInput) searchInput.focus();
    });
  }
});
