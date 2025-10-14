
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    if (!hero) return;
  
    const track  = hero.querySelector('.hero_track');
    const slides = Array.from(hero.querySelectorAll('.hero_slide'));
    const dots   = Array.from(hero.querySelectorAll('.hero_dot'));
    if (!track || slides.length === 0 || dots.length === 0) return;
  
    const clamp = (n, min, max) => Math.min(Math.max(n, min), max);
    const setActive = (i) => dots.forEach((d, idx) => d.classList.toggle('is-active', idx === i));
  
    // init
    setActive(0);
  
    // click dot → scroll to slide
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        slides[i].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
        setActive(i);
      });
    });
  
    // update dots while dragging/scrolling
    let rafId = 0;
    function handleScroll() {
      rafId = 0;
      const idx = Math.round(track.scrollLeft / track.clientWidth);
      setActive(clamp(idx, 0, slides.length - 1));
    }
    track.addEventListener('scroll', () => {
      if (rafId) return;
      rafId = requestAnimationFrame(handleScroll);
    });
  
    window.addEventListener('resize', handleScroll);
  });


  // Tab navigation
document.addEventListener('DOMContentLoaded', () => {
    const tabItems = document.querySelectorAll('.tabbar_item');
    
    tabItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Xóa active khỏi tất cả
        tabItems.forEach(tab => tab.classList.remove('tabbar_item--active'));
        
        // Thêm active cho item được click
        item.classList.add('tabbar_item--active');
      });
    });
  });


  