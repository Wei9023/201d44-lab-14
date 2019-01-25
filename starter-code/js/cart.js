/* global Cart */
'use strict';


// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('productItems')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  // clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  var trEl = document.createElement('tr')
  for (var i = 0; i < cart.items.length; i++){
    trEl = document.createElement('tr')
    var onetdEl = document.createElement('td');
    onetdEl.textContent = 'X';
    trEl.appendChild(onetdEl);
    var twotdEl = document.createElement('td');
    twotdEl.textContent = cart.items[i].product;
    trEl.appendChild(twotdEl);
    var threetdEl = document.createElement('td');
    threetdEl.textContent = parseInt(cart.items[i].quantity);
    trEl.appendChild(threetdEl);
  }

    table.appendChild(trEl);
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();

table.addEventListener('click', removeItemFromCart);