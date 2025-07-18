document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.topic-card').forEach(card => {
    card.addEventListener('click', () => {
      const target = card.getAttribute('data-link');
      if (target) {
        const overlay = document.getElementById('loading-overlay');
        overlay.style.display = 'flex';
        setTimeout(() => {
          window.location.href = target;
        }, 100);
      }
    });

    card.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const target = card.getAttribute('data-link');
        if (target) {
          const overlay = document.getElementById('loading-overlay');
          overlay.style.display = 'flex';
          setTimeout(() => {
            window.location.href = target;
          }, 100);
        }
      }
    });
  });
});