
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