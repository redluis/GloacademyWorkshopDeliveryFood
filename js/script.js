'use strict'

const cartButton      = document.querySelector('#cart-button'),
      cart            = document.querySelector('#cart'),
      cartCloseButton = document.querySelector('#cart-close'); 


cartButton.addEventListener('click', toggleCart)
cartCloseButton.addEventListener('click', toggleCart)

function toggleCart() {
    cart.classList.toggle('is-open');
}

new WOW().init();