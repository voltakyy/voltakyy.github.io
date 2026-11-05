/**
 * RUANG BELAJAR INFORMATIKA UMS — CLIENT LOGIC
 * Features: Instant Search, Category Filter, Keyboard Shortcuts
 */

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('courseSearch');
  const chipButtons = document.querySelectorAll('.chip-btn');
  const courseCards = document.querySelectorAll('.course-card');
  const emptyState = document.getElementById('emptyState');
  const resetSearchBtn = document.getElementById('resetSearch');

  let activeCategory = 'all';
  let searchQuery = '';

  function filterCards() {
    let visibleCount = 0;
    const q = searchQuery.toLowerCase().trim();

    courseCards.forEach(card => {
      // Don't filter out the "coming soon" card on empty searches unless category conflicts
      const isComingSoon = card.classList.contains('card-coming-soon');
      const cardCategory = card.dataset.category || '';
      const cardText = (card.innerText || '').toLowerCase();

      // Check category match
      const matchesCategory = (activeCategory === 'all') || (cardCategory === activeCategory);

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

  // Search input event
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      filterCards();
    });

    // Keyboard shortcut '/' to focus search
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

  // Category chips
  chipButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      chipButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.filter || 'all';
      filterCards();
    });
  });

  // Reset button in empty state
  if (resetSearchBtn) {
    resetSearchBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      searchQuery = '';
      activeCategory = 'all';
      chipButtons.forEach(b => {
        b.classList.toggle('active', b.dataset.filter === 'all');
      });
      filterCards();
      if (searchInput) searchInput.focus();
    });
  }
});
