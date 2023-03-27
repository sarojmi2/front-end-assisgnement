//import "../styles/style.css"
import "../styles/main.scss"
import "../styles/footer.scss"
import "../styles/header.scss"
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
    PRODUCT_GRID.innerHTML = tempHTML; 

  });

  
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

// fs.writeFile("logs.html", "hello world", "utf-8", function (err) {
//   if (err) {
//     console.log("error");
//   } else {
//     console.log("data saved");
//   }
// });