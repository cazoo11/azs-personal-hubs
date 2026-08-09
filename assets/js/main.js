// Cursor glow, hero parallax, scroll-reveal for catalog entries,
// and the type filter — shared across every page.

const cursor = document.querySelector('.cursor-glow');
if (cursor) {
  addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
}

const hero = document.querySelector('.hero');
if (hero) {
  let ticking = false;
  addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        hero.style.transform = `translateY(-${Math.min(window.scrollY * 0.25, 120)}px)`;
        ticking = false;
      });
      ticking = true;
    }
  });
}

const revealTargets = document.querySelectorAll('.entry, .detail-body');
if (revealTargets.length) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => en.isIntersecting && en.target.classList.add('show'));
  });
  revealTargets.forEach(t => io.observe(t));
}

const flags = document.querySelectorAll('.filter-flag');
const entries = document.querySelectorAll('.entry');
flags.forEach(flag => {
  flag.addEventListener('click', () => {
    flags.forEach(f => f.classList.remove('active'));
    flag.classList.add('active');
    const type = flag.dataset.type;
    entries.forEach(entry => {
      const show = type === 'all' || entry.dataset.type === type;
      entry.classList.toggle('hidden', !show);
    });
  });
});
