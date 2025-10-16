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
  }
];

const productList = document.getElementById('product-list');
products.forEach(product => {
  productList.appendChild(createVerticalCard(product));
});