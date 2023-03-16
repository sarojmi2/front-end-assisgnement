/*  SCHEMA  */
const $ = document;
const TICKET = [
  {
    "_id": "6411865b398f767ae12f3c50",
    "ticketClass": "GOLD",
    "subClass": "Standing",
    "Price": 1330,
    "maxTicket": 3,
    "address": "496 Rockwell Place, Gardners, Kentucky, 951",
    "venuPlan": "Laborum id cupidatat nulla non ad id incididunt laboris. Ex dolore nulla anim enim pariatur proident occaecat tempor id exercitation incididunt nostrud laborum elit. Voluptate laboris culpa duis sunt amet et. Sint ipsum deserunt aliquip deserunt esse officia reprehenderit exercitation aute voluptate ad Lorem voluptate labore.\r\n"
  },
  {
    "_id": "6411865b6f740b41501d0bc3",
    "ticketClass": "PLATUNUM",
    "subClass": "Standing",
    "Price": 3940,
    "maxTicket": 5,
    "address": "452 Creamer Street, Lindcove, Colorado, 6864",
    "venuPlan": "Sit ullamco culpa proident pariatur magna ea. Et velit irure ex dolore laborum irure. Aliquip nisi mollit nulla duis consectetur culpa qui qui non amet labore dolor voluptate. Qui nisi in voluptate occaecat esse velit dolor ullamco qui consectetur fugiat do non velit. Et minim consectetur cupidatat est occaecat.\r\n"
  },
  {
    "_id": "6411865b14b9f2eef7fd42e8",
    "ticketClass": "SILVER",
    "subClass": "Standing",
    "Price": 2316,
    "maxTicket": 1,
    "address": "813 Blake Court, Lodoga, Indiana, 8542",
    "venuPlan": "Fugiat velit ad cillum proident elit ut amet sint eiusmod minim id Lorem. Nostrud irure eiusmod aliquip ad adipisicing exercitation consectetur dolor minim do veniam tempor aute. Non laborum aliqua consectetur quis sit commodo eiusmod deserunt.\r\n"
  },
  {
    "_id": "6411865bb95f4a36958bb351",
    "ticketClass": "EXECUTIVE",
    "subClass": "Standing",
    "Price": 1403,
    "maxTicket": 9,
    "address": "706 Pitkin Avenue, Bourg, Michigan, 2947",
    "venuPlan": "Enim ipsum ullamco incididunt qui. Officia sint duis voluptate fugiat non sint nisi. Labore pariatur voluptate veniam do voluptate pariatur aute. Laboris ut culpa et sit deserunt fugiat veniam velit aliqua Lorem dolore nisi anim.\r\n"
  },
  {
    "_id": "6411865baf34039a290b8e00",
    "ticketClass": "RUBBY",
    "subClass": "Standing",
    "Price": 2328,
    "maxTicket": 10,
    "address": "505 President Street, Abiquiu, Illinois, 6100",
    "venuPlan": "Dolore voluptate culpa ullamco Lorem reprehenderit ad reprehenderit consequat. Incididunt velit velit elit ipsum. Id ullamco sint non aliquip id qui Lorem ad culpa. Consectetur dolor veniam nisi minim enim dolor laboris commodo tempor officia officia incididunt. Sit labore cupidatat reprehenderit reprehenderit in sit.\r\n"
  },
  {
    "_id": "6411865ba9fbd13c9e69a296",
    "ticketClass": "PERL",
    "subClass": "Standing",
    "Price": 1763,
    "maxTicket": 2,
    "address": "736 Fulton Street, Sehili, Wyoming, 5637",
    "venuPlan": "Officia commodo mollit eu deserunt aute adipisicing Lorem elit magna exercitation voluptate in. Cupidatat pariatur exercitation laboris fugiat ad magna aliquip. Eu quis amet amet ipsum enim sint Lorem irure. Fugiat tempor irure officia nostrud culpa cillum qui nisi ut commodo Lorem ea in. Et id do sit amet dolor officia elit in esse laboris. Exercitation labore et nostrud culpa nisi laborum sit esse officia officia est est in. Magna aliqua nisi nulla fugiat mollit enim deserunt deserunt anim mollit cupidatat eiusmod.\r\n"
  },
  {
    "_id": "6411865b49ab0ec08074da67",
    "ticketClass": "PLAZE",
    "subClass": "Standing",
    "Price": 3449,
    "maxTicket": 8,
    "address": "791 Hull Street, Neahkahnie, Palau, 8321",
    "venuPlan": "Proident culpa officia enim aute anim non id. Proident dolor et proident non ea nulla consequat quis ipsum labore in laborum anim est. Amet amet occaecat Lorem cillum dolore Lorem qui magna sunt sint. Minim nostrud sunt culpa pariatur elit velit quis ut ex mollit enim ex officia do.\r\n"
  },
  {
    "_id": "6411865b49ab0ec08454da67",
    "ticketClass": "DIMOND",
    "subClass": "Standing",
    "Price": 3789,
    "maxTicket": 7,
    "address": "791 Hull Street, Neahkahnie, Palau, 8321",
    "venuPlan": "Proident culpa officia enim aute anim non id. Proident dolor et proident non ea nulla consequat quis ipsum labore in laborum anim est. Amet amet occaecat Lorem cillum dolore Lorem qui magna sunt sint. Minim nostrud sunt culpa pariatur elit velit quis ut ex mollit enim ex officia do.\r\n"
  }
]
  
let topLeftHTML = "";
let tempHTML = "";
let topRightHTML = "";

const TOP_LEFT = $.getElementById('topLeft');
const TOP_RIGHT = $.getElementById('topRight');
const BUTTOM = $.getElementById('buttom');
const CARD = $.getElementById('card');
// Loop th the PRODUCTS to get the unique collections 
for (let i=0 ; i< TICKET.length ; i++)
{
  topLeftHTML += `<p>${TICKET[i].ticketClass} </p>`;
  topLeftHTML += `<p> ${TICKET[i].subClass} </p>`;
  TOP_LEFT.innerHTML=topLeftHTML;
  topRightHTML+= `<p id='price'> ${TICKET[i].Price} </p>`;
  TOP_RIGHT.innerHTML = topRightHTML;
  tempHTML += `<p>${TICKET[i].venuPlan} </p>`;
  BUTTOM.innerHTML = tempHTML;
  CARD.innerHTML = $.getElementById('top');
}

function increment() {
  $.getElementById('noOfTicket').stepUp();
  $.getElementById('ticketCounter').stepUp();
  let price = $.getElementById('price').innerText;
  setTicketPrice(price);
}
function decrement() {
  $.getElementById('noOfTicket').stepDown();
  $.getElementById('ticketCounter').stepDown();
  let price = $.getElementById('price').innerText;
  setTicketPrice(price);
}
function setTicketPrice(price){
  let quantiry = $.getElementById('ticketCounter').value;
  if(quantiry <=10)
    {
        $.getElementById('price').innerText = price * quantiry;
  }
}
