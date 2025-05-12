
// ===== Menu in Header =====
const menuBtn = document.getElementById('menu-btn');
const mobileLinks = document.getElementById('mobile-links');

if (menuBtn && mobileLinks) {
  menuBtn.onclick = (event) => {
    event.stopPropagation();
    mobileLinks.style.display = (mobileLinks.style.display === "flex") ? "none" : "flex";
  };

  document.onclick = () =>{
    mobileLinks.style.display = "none";
  };
}


// ===== Landing Photo Buttons =====
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const firstImage = document.querySelector('.first');

if (firstImage) {
  if (btn1) {
    btn1.onclick = () => {
      firstImage.children[0].src = "images/image-product-1.jpg";
    };
  }
  if (btn2) {
    btn2.onclick = () => {
      firstImage.children[0].src = "images/image-product-2.jpg";
    };
  }
  if (btn3) {
    btn3.onclick = () => {
      firstImage.children[0].src = "images/image-product-3.jpg";
    };
  }
  if (btn4) {
    btn4.onclick = () => {
      firstImage.children[0].src = "images/image-product-4.jpg";
    };
  }
}


// ===== Cart Quantity Buttons =====
const btnm = document.querySelector('.cart .add img:first-child');
const btnp = document.querySelector('.cart .add img:last-child');
const p = document.querySelector('.cart .add p');

let count = 0; 

if (btnm && btnp && p ) {
  count = parseInt(p.innerHTML) ;


  btnp.onclick = function () {
    count++;
    p.innerHTML = `${count}`;
    
  };

  btnm.onclick = function () {
    if (count <= 0) return;
    count--;
    p.innerHTML = `${count}`;
  };
}

// ===== Add to Cart Button ( =====
const addToCartBtn = document.querySelector('.cart button');
const profileBtn = document.querySelector('.header .profile button:first-child');

profileBtn.setAttribute('data-count', profileBtn.getAttribute('data-count') );
addToCartBtn.onclick = function () {
  if (count > 0) {
    let currentBadge = parseInt(profileBtn.getAttribute('data-count')) ;
    profileBtn.setAttribute('data-count', (currentBadge + count));
    count = 0;
    p.innerHTML = '0';
  }
};



// display cart badge
profileBtn.onclick = function displaycart() {
  const cartNav = document.querySelector('.cartnav');
  cartNav.style.display = (cartNav.style.display === 'block') ? 'none' : 'block';

  const items = document.querySelector('.cartnav .items');
  const item = document.createElement('div');
  items.innerHTML = ''; // Clear existing items

  const badgeCount = parseInt(profileBtn.getAttribute('data-count')) ;

  item.classList.add('item');
  item.innerHTML = `
    <img src="images/image-product-1-thumbnail.jpg" alt="Product thumbnail">
    <div class="item-details">
      <p>Fall Limited Edition Sneakers</p>
      <p>$125.00 x ${badgeCount} <span>$${125 * badgeCount}.00</span></p>
    </div>
    <div class="remove">
      <img src="images/icon-delete.svg" alt="Remove item"> 
    </div>
  `;


  items.appendChild(item.cloneNode(true));

  
};

// Remove item from cart
document.addEventListener('click', (event) => {
  if (event.target.closest('.cartnav .remove img')) {
    const badgeCount = parseInt(profileBtn.getAttribute('data-count'));
    if (badgeCount > 0) {
      profileBtn.setAttribute('data-count', badgeCount - 1);
      displaycart();
    }
  }
});




