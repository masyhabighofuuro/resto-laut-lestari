//Toggle class active for hamburger menu
const nN = document.querySelector('.navbar-nav');
// ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = (e) => {
  nN.classList.toggle('active');
  e.preventDefault();
};
//Toggle class active for search form
const sf = document.querySelector('.search-form');
const sb = document.querySelector('#search-box');
const searchButton = document.querySelector('#search-button');
//Toggle class active for shopping cart
const ShopCart = document.querySelector('.shopping-cart')
// ketika shopping cart item diklik
document.querySelector('#shopping-cart-button').onclick = (e) => {
  ShopCart.classList.toggle('active');
  e.preventDefault();
};
// ketika search button diklik
searchButton.onclick = (e) => {
  sf.classList.toggle('active');
  sb.focus();
  e.preventDefault();
};
// klik di luar elemen untuk menutup
const hm = document.querySelector('#hamburger-menu');
const ShopCartButton = document.querySelector('#shopping-cart-button')
document.addEventListener('click', function(e) {
  if(!hm.contains(e.target) && !nN.contains(e.target)) {
    nN.classList.remove('active');
  }
  if(!searchButton.contains(e.target) && !sf.contains(e.target)) {
    sf.classList.remove('active');
  }
  if(!ShopCartButton.contains(e.target) && !ShopCart.contains(e.target)) {
    ShopCart.classList.remove('active');
  }
});
// Modal Box Item Detail (1)
const itemDetailModal1 = document.querySelector('#item-detail-modal1');
const itemDetailButton1 = document.querySelector('.item-detail-button1');

itemDetailButton1.onclick = (e) => {
  itemDetailModal1.style.display = 'flex';
  e.preventDefault();
};

itemDetailModal1.querySelector('.close-icon').onclick = (e) => {
  itemDetailModal1.style.display = 'none';
  e.preventDefault();
};

window.addEventListener('click', (e) => {
  if (e.target === itemDetailModal1) {
    itemDetailModal1.style.display = 'none';
  }
});

// Modal Box Item Detail (2)
const itemDetailModal2 = document.querySelector('#item-detail-modal2');
const itemDetailButton2 = document.querySelector('.item-detail-button2').closest('a');

itemDetailButton2.onclick = (e) => {
  itemDetailModal2.style.display = 'flex';
  e.preventDefault();
};

itemDetailModal2.querySelector('.close-icon').onclick = (e) => {
  itemDetailModal2.style.display = 'none';
  e.preventDefault();
};

window.addEventListener('click', (e) => {
  if (e.target === itemDetailModal2) {
    itemDetailModal2.style.display = 'none';
  }
});

// Modal Box Item Detail (3)
const itemDetailModal3 = document.querySelector('#item-detail-modal3');
const itemDetailButton3 = document.querySelector('.item-detail-button3').closest('a');

itemDetailButton3.onclick = (e) => {
  itemDetailModal3.style.display = 'flex';
  e.preventDefault();
};

itemDetailModal3.querySelector('.close-icon').onclick = (e) => {
  itemDetailModal3.style.display = 'none';
  e.preventDefault();
};

window.addEventListener('click', (e) => {
  if (e.target === itemDetailModal3) {
    itemDetailModal3.style.display = 'none';
  }
});

// Modal Box Item Detail (4)
const itemDetailModal4 = document.querySelector('#item-detail-modal4');
const itemDetailButton4 = document.querySelector('.item-detail-button4').closest('a');

itemDetailButton4.onclick = (e) => {
  itemDetailModal4.style.display = 'flex';
  e.preventDefault();
};

itemDetailModal4.querySelector('.close-icon').onclick = (e) => {
  itemDetailModal4.style.display = 'none';
  e.preventDefault();
};

window.addEventListener('click', (e) => {
  if (e.target === itemDetailModal4) {
    itemDetailModal4.style.display = 'none';
  }
});

// Modal Box Item Detail (5)
const itemDetailModal5 = document.querySelector('#item-detail-modal5');
const itemDetailButton5 = document.querySelector('.item-detail-button5').closest('a');

itemDetailButton5.onclick = (e) => {
  itemDetailModal5.style.display = 'flex';
  e.preventDefault();
};

itemDetailModal5.querySelector('.close-icon').onclick = (e) => {
  itemDetailModal5.style.display = 'none';
  e.preventDefault();
};

window.addEventListener('click', (e) => {
  if (e.target === itemDetailModal5) {
    itemDetailModal5.style.display = 'none';
  }
});

// Modal Box Item Detail (6)
const itemDetailModal6 = document.querySelector('#item-detail-modal6');
const itemDetailButton6 = document.querySelector('.item-detail-button6').closest('a');

itemDetailButton6.onclick = (e) => {
  itemDetailModal6.style.display = 'flex';
  e.preventDefault();
};

itemDetailModal6.querySelector('.close-icon').onclick = (e) => {
  itemDetailModal6.style.display = 'none';
  e.preventDefault();
};

window.addEventListener('click', (e) => {
  if (e.target === itemDetailModal6) {
    itemDetailModal6.style.display = 'none';
  }
});