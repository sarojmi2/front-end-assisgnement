//import "../styles/style.css"
import "../styles/main.scss"
//import "../styles/footer.scss"
import "../styles/header.scss"
import "../styles/hero2.scss"
import "../styles/about.scss"
import "../styles/product.scss"
import "../styles/cart.scss"
// import { createRequire } from 'node:module';
// const require = createRequire(import.meta.url);

// // sibling-module.js is a CommonJS module.
// const fs = require('fs');
//import fs from './fs';
const $ = document;
//const fs = require("fs");
let tempHTML="";
// FETCH API
fetch('https://mocki.io/v1/395d8d77-e761-4997-9704-95b70770bafd')
  .then(res => res.json())
  .then(products => createUI(products, tempHTML))
  .catch((error) => console.log(error))
  const PRODUCT_GRID = $.getElementById('product-grid');
  
function createUI(products, tempHTML){
    products.forEach(element => {
    tempHTML += `<div class="product-card">`;
    tempHTML += `<img src="${element.src}" alt=""/>`;
    tempHTML += `<h3> ${element.name}</h3>`;
    tempHTML += `<p> ${element.price}</p>`;
    tempHTML += `</div>`;
    //createProductPage(products, tempHTML);
    PRODUCT_GRID.innerHTML = tempHTML; 
    // $('#product-grid').html(productHTML);
  });

  // function createProductPage(element, tempHTML){
  //   fs.writeFile('/${element.name}.html', tempHTML, (error) => { /* handle error */ });
  // }
  const HAM = document.getElementById("hammburger");
  HAM.onclick = hideMenu();

  function hideMenu(){
    console.log("Clicked");
    var x = document.getElementById("nav-links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  HAM.addEventListener("click", function() {
    console.log("Clicked");
    var x = document.getElementById("nav-links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  });
}

// On click of add to cart page store data to session storage

 const ADDTOCART = document.getElementById("add_cart");
// ADDTOCART.onclick = addToCart();

if (ADDTOCART){
ADDTOCART.addEventListener("click", function(){
  console.log("Add to cart clicked");

  let price = $.getElementById("price").innerHTML;
	let productName = document.getElementById('productname').innerHTML;
	let quantity = 1;

	var cartItem = {
		productName: productName,
		price: price,
		quantity: quantity
	};
	var cartItemJSON = JSON.stringify(cartItem);

	var cartArray = new Array();
	// If javascript shopping cart session is not empty
	if (sessionStorage.getItem('shopping-cart')) {
		cartArray = JSON.parse(sessionStorage.getItem('shopping-cart'));
	}
	cartArray.push(cartItemJSON);

	var cartJSON = JSON.stringify(cartArray);
	sessionStorage.setItem('shopping-cart', cartJSON);
});
}

// On load of cart page get data from session storage
window.onload = function() {
  showCart();
};

const ITEM_COUNT = document.getElementById("item_count");

function showCart(){
  let cartRowHTML = "";
	let itemCount = 0;
	let grandTotal = 0;

	let price = 0;
	let quantity = 0;
	let subTotal = 0;

	if (sessionStorage.getItem('shopping-cart')) {
		let shoppingCart = JSON.parse(sessionStorage.getItem('shopping-cart'));
		itemCount = shoppingCart.length;
    ITEM_COUNT.setAttribute("data-count" , itemCount);
    const CART_LIST = $.getElementById('cart_list');
    const SUB_TOTAL =  $.getElementById('sub_total');
    const TOTAL =  $.getElementById('total');
    let cartRowHTML="";
		//Iterate javascript shopping cart array
		shoppingCart.forEach(function(item) {
			let cartItem = JSON.parse(item);
      price = (cartItem.price).replace(/\$/g, '');
      price = parseFloat(price);
			quantity = parseInt(cartItem.quantity);
      
			subTotal = price * quantity;
			console.log(cartItem , price, quantity);
      cartRowHTML = `<div class="cart_product" id="cart_product">${cartItem.productName}</div>`;
      cartRowHTML += `<div class= "cart_price" id="cart_price">${cartItem.price}</div>`;
      cartRowHTML += `<input class= "cart_quantity" id="cart_quantity" value="${quantity}"/>`;
      cartRowHTML += `<div class = "cart_quantity" id="cart_quantuty">$ ${subTotal}</div>`;
      console.log(cartRowHTML);
      
		});
    CART_LIST.innerHTML = cartRowHTML;
    TOTAL.innerHTML = "$" + subTotal;
    SUB_TOTAL.innerHTML = "$" + subTotal;
	}

}

// fs.writeFile("logs.html", "hello world", "utf-8", function (err) {
//   if (err) {
//     console.log("error");
//   } else {
//     console.log("data saved");
//   }
// });