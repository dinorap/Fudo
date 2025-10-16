
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





const track = document.querySelector('.hero_track');
let isDown = false;
let startX;
let scrollLeft;

track.addEventListener('mousedown', e => {
  isDown = true;
  track.classList.add('active');
  startX = e.pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;
});

track.addEventListener('mouseleave', () => {
  isDown = false;
  track.classList.remove('active');
});

track.addEventListener('mouseup', () => {
  isDown = false;
  track.classList.remove('active');
});

track.addEventListener('mousemove', e => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - track.offsetLeft;
  const walk = (x - startX) * 2; // tốc độ kéo
  track.scrollLeft = scrollLeft - walk;
});


function createVerticalCard({ image, tag, title, desc, price }) {
  const card = document.createElement('div');
  card.classList.add('vertical');
  
  card.innerHTML = `
    <img src="${image}" alt="${title}">
    ${tag ? `<div class="vertical_tag"><span class="vertical_tag_text">${tag}</span></div>` : ""}
    <div class="vertical_info">
      <div class="vertical_info_1">
        <span class="vertical_info_title">${title}</span>
        <span class="vertical_info_text">${desc}</span>
      </div>
      <div class="vertical_price">
        <span class="vertical_price_text">${price}</span>
        <button class="add_to_cart">+</button>
      </div>
    </div>
  `;
  
  return card;
}


const products = [
  {
    image: "assets/home/singlefix.png",
    tag: "",
    title: "Thùng 20 gói khăn giấy tre TISSUEPack",
    desc: "",
    price: "80.000 đ"
  },
  {
    image: "assets/home/loc.png",
    tag: "Combo",
    title: "Combo mình ên",
    desc: "02 túi lớn TISSUEPack x 01 lốc TISSUEPocket",
    price: "80.000 đ"
  },
  {
    image: "assets/home/singlefix.png",
    tag: "",
    title: "Thùng 20 gói khăn giấy tre TISSUEPack",
    desc: "",
    price: "80.000 đ"
  },
  {
    image: "assets/home/singlefix.png",
    tag: "",
    title: "Thùng 20 gói khăn giấy tre TISSUEPack",
    desc: "",
    price: "80.000 đ"
  },
  {
    image: "assets/home/singlefix.png",
    tag: "",
    title: "Thùng 20 gói khăn giấy tre TISSUEPack",
    desc: "",
    price: "80.000 đ"
  },
];


const productList = document.getElementById('product-list');
products.forEach(product => {
  productList.appendChild(createVerticalCard(product));
});


const products_1 = [
  {
    image: "assets/home/loc.png",
    tag: "Combo",
    title: "Combo mình ên",
    desc: "02 túi lớn TISSUEPack x 01 lốc TISSUEPocket",
    price: "80.000 đ"
  },
  {
    image: "assets/home/loc.png",
    tag: "Combo",
    title: "Combo mình ên",
    desc: "02 túi lớn TISSUEPack x 01 lốc TISSUEPocket",
    price: "80.000 đ"
  },
  {
    image: "assets/home/loc.png",
    tag: "Combo",
    title: "Combo mình ên",
    desc: "02 túi lớn TISSUEPack x 01 lốc TISSUEPocket",
    price: "80.000 đ"
  },  {
    image: "assets/home/loc.png",
    tag: "Combo",
    title: "Combo mình ên",
    desc: "02 túi lớn TISSUEPack x 01 lốc TISSUEPocket",
    price: "80.000 đ"
  },  {
    image: "assets/home/loc.png",
    tag: "Combo",
    title: "Combo mình ên",
    desc: "02 túi lớn TISSUEPack x 01 lốc TISSUEPocket",
    price: "80.000 đ"
  },
  
];

const productList_1 = document.getElementById('product-list_1');
products_1.forEach(product => {
  productList_1.appendChild(createVerticalCard(product));
});

// Voucher button functionality
document.addEventListener('DOMContentLoaded', () => {
  const voucherButtons = document.querySelectorAll('.button_voucher');
  
  voucherButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Toggle active class
      button.classList.toggle('active');
      
      // Update button text based on state
      const buttonText = button.querySelector('.button_voucher_text');
      if (button.classList.contains('active')) {
        buttonText.textContent = 'Đã lấy';
      } else {
        buttonText.textContent = 'Lấy mã';
      }
    });
  });

  // Search functionality
  const searchTrigger = document.getElementById('searchTrigger');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchClose = document.getElementById('searchClose');
  const searchInput = document.getElementById('searchInput');
  
  // Get elements to hide/show
  const hero = document.querySelector('.hero');
  const shortcuts = document.querySelector('.shortcuts');
  const vouchers = document.querySelectorAll('.voucher');
  const scrollUp = document.querySelector('.scroll_up');
  const wellcome = document.querySelector('.wellcome');
  const search_bar = document.querySelector('.search_bar');
const menu_bar = document.querySelector('.menu_bar');
  // Open search mode
  searchTrigger.addEventListener('click', () => {
    // Hide main content but keep topbar and welcome section
    if (hero) hero.style.display = 'none';
    shortcuts.style.display = 'none';
    vouchers.forEach(voucher => voucher.style.display = 'none');
    if (scrollUp) scrollUp.style.display = 'none';
    wellcome.style.display = 'none';
    search_bar.style.display = 'none';
    menu_bar.style.display = 'none';
    // Show search overlay
    searchOverlay.classList.add('active');
    
    // Focus on input after animation
    setTimeout(() => {
      searchInput.focus();
    }, 300);
  });

  // Close search mode
  const closeSearchMode = () => {
    searchOverlay.classList.remove('active');
    searchInput.value = '';
    
    // Show main content again
    if (hero) hero.style.display = '';
    shortcuts.style.display = '';
    vouchers.forEach(voucher => voucher.style.display = '');
    wellcome.style.display = '';
    search_bar.style.display = '';
    menu_bar.style.display = '';
    if (scrollUp) scrollUp.style.display = '';
  };

  searchClose.addEventListener('click', closeSearchMode);

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
      closeSearchMode();
    }
  });
});



