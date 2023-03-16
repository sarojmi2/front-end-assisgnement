/*  SCHEMA 
const PRODUCT = {
    productCatagory : "catagoryName",    
        imageUrl: "#",
        itemName : "",
        rating:"",
        originalPrice:"",
        offerPrice:""
}
 */
const $ = document;
const PRODUCT = [
    {
      "_id": "640ef4fa549329d3d3e701a1",
      "isActive": true,
      "originalPrice": "$38.00",
      "offerPrice": "$16.00",
      "imgUrl": "http://placehold.it/180X200",
      "rating": 1,
      "name": "Chelsea Figueroa",
      "productCatagory": "Furniture",
      "itemName": "TouchWood Chair"
    },
    {
      "_id": "640ef4fabda820795ce7c5b5",
      "isActive": true,
      "originalPrice": "$10.00",
      "offerPrice": "$29.00",
      "imgUrl": "http://placehold.it/180X200",
      "rating": 4,
      "name": "Clarissa Holder",
      "productCatagory": "Furniture",
      "itemName": "TouchWood Chair"
    },
    {
      "_id": "640ef4fa83d39e0e3826e497",
      "isActive": false,
      "originalPrice": "$24.00",
      "offerPrice": "$28.00",
      "imgUrl": "http://placehold.it/180X200",
      "rating": 5,
      "name": "Debbie Spence",
      "productCatagory": "Furniture",
      "itemName": "TouchWood Chair"
    },
    {
      "_id": "640ef4fa6c2cbab23ca37e0c",
      "isActive": false,
      "originalPrice": "$34.00",
      "offerPrice": "$30.00",
      "imgUrl": "http://placehold.it/180X200",
      "rating": 2,
      "name": "Stafford Pollard",
      "productCatagory": "Furniture",
      "itemName": "TouchWood Chair"
    },
    {
      "_id": "640ef4fa8da909256dd0527a",
      "isActive": false,
      "originalPrice": "$19",
      "offerPrice": "$33",
      "imgUrl": "http://placehold.it/180X200",
      "rating": 3,
      "name": "Norris Simon",
      "productCatagory": "Lighting",
      "itemName": "Classic Light"
    },
    {
      "_id": "640ef4fa19a26a0f83d4c335",
      "isActive": false,
      "originalPrice": "$10",
      "offerPrice": "$40",
      "imgUrl": "http://placehold.it/180X200",
      "rating": 5,
      "name": "Soto Anderson",
      "productCatagory": "Decorative",
      "itemName": "Nice Decoration"
    },
    {
      "_id": "640ef4fa9269d4e5710b4360",
      "isActive": false,
      "originalPrice": "$36",
      "offerPrice": "$27",
      "imgUrl": "http://placehold.it/180X200",
      "rating": 3,
      "name": "Bonnie Brock",
      "productCatagory": "Decorative",
      "itemName": "Nice Decoration"
    },
    {
      "_id": "640ef4fa48713372b28ed464",
      "isActive": true,
      "originalPrice": "$35",
      "offerPrice": "$17",
      "imgUrl": "http://placehold.it/180X200",
      "rating": 1,
      "name": "Dianna Lane",
      "productCatagory": "Lighting",
      "itemName": "Nice Decoration"
    },
    {
      "_id": "640ef4fad877103c8a043003",
      "isActive": false,
      "originalPrice": "$36",
      "offerPrice": "$23",
      "imgUrl": "http://placehold.it/180X200",
      "rating": 4,
      "name": "Monroe Keller",
      "productCatagory": "Outdoor",
      "itemName": " "
    },
    {
      "_id": "640ef4fae95502ff694c2bb6",
      "isActive": false,
      "originalPrice": "$38",
      "offerPrice": "$13",
      "imgUrl": "http://placehold.it/180X200",
      "rating": 5,
      "name": "Rosanna Schmidt",
      "productCatagory": "Storage",
      "itemName": "Cupboard wooden"
    },
    {
      "_id": "640ef4fac36190dfc0079862",
      "isActive": false,
      "originalPrice": "$27",
      "offerPrice": "$18",
      "imgUrl": "http://placehold.it/180X200",
      "rating": 2,
      "name": "Melisa Reid",
      "productCatagory": "Storage",
      "itemName": "Cupboard wooden"
    },
    {
      "_id": "640ef4fa8abe034ccabff09e",
      "isActive": true,
      "originalPrice": "$37",
      "offerPrice": "$12",
      "imgUrl": "http://placehold.it/180X200",
      "rating": 1,
      "name": "Nita Craig",
      "productCatagory": "Storage",
      "itemName": "Cupboard wooden"
    }
  ]

  const COLLECTION = [];
  
// Loop th the PRODUCTS to get the unique collections 
for (let i=0 ; i< PRODUCT.length ; i++)
{
    if(!COLLECTION.includes(PRODUCT[i].productCatagory))
    COLLECTION.push(PRODUCT[i].productCatagory);
}
console.log("Product Category ..." + COLLECTION);

//filter objects from array that have the same value at given key

const FURNITURE = [];//Furniture
const STORAGE = []; //Storage
const OUTDOOR = []; //Outdoor
const LIGHTING = [];//Lighting
const DECORATIVE = []//Decorative
for(i in PRODUCT) { if (PRODUCT[i].productCatagory === "Furniture") 
                        FURNITURE.push(PRODUCT[i]);
                    else if (PRODUCT[i].productCatagory === "Storage") 
                        STORAGE.push(PRODUCT[i]);
                    else if (PRODUCT[i].productCatagory === "Lighting") 
                        LIGHTING.push(PRODUCT[i]);
                    else if (PRODUCT[i].productCatagory === "Outdoor") 
                        OUTDOOR.push(PRODUCT[i]);
                    else if (PRODUCT[i].productCatagory === "Decorative") 
                    DECORATIVE.push(PRODUCT[i]);
                    }


console.log("Product Category ..." + FURNITURE.length);
console.log("Product Category ..." + STORAGE.length);
console.log("Product Category ..." + OUTDOOR.length);

// Constrct left panel with the Collections 
const LEFT_CONTAINER = $.getElementById('left');
let tempHTML = "";
for(let i = 0; i < COLLECTION.length; i++) {
    tempHTML += `<a class="item${i}">${COLLECTION[i]}</a>`
    
}
LEFT_CONTAINER.innerHTML = tempHTML; 
tempHTML = "";
// Constrct left panel with the Collections 
const RIGHT_CONTAINER = $.getElementById('right');
for(let i = 0; i < FURNITURE.length; i++) {
    tempHTML += `<div class="card">`;
    tempHTML += `<img src="${FURNITURE[i].imgUrl}">`;
    tempHTML += `<h4 class="${FURNITURE[i].name}">${FURNITURE[i].itemName}</h4>`;
    tempHTML += `<div class="rating">`;
    for (j=0; j < FURNITURE[i].rating ; j++ )
        {
            tempHTML += `<i class="fa fa-star yellow-color"></i>`;
        }
        tempHTML += `</div>`;
    tempHTML += `<span class="offer-price">${FURNITURE[i].offerPrice}</span>`;
    tempHTML += `<span class="original-price">${FURNITURE[i].originalPrice}</span></div>`;
    RIGHT_CONTAINER.innerHTML = tempHTML; 
}
//RIGHT_CONTAINER.innerHTML = tempHTML; 