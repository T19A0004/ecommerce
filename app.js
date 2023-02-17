import products from "./products.json" assert { type: "json" };

//Change product

document.getElementById("ForMen").addEventListener("click", ShowMen);
document.getElementById("ForWomen").addEventListener("click", ShowWomen);
document.getElementById("ForKids").addEventListener("click", ShowKids);

function ShowMen() {
  document.querySelector("main").remove();
  document.querySelector("#content").append(document.createElement("main"));
  const men = document.querySelector("main");
  for (let i = 0; i < products.length; i++) {
    if (products[i].type == "Men") {
      const menproduct = document.createElement("div");

      menproduct.innerHTML =
        "<img src='images/" +
        products[i].image +
        "' ></br><h2>" +
        products[i].name +
        "</h2></br> <h4>$" +
        products[i].price +
        "</h4></br><button role='button' id='addToCart' class='name noselect'>Add To Cart</button>";

      men.append(menproduct);
    }
  }
  document.getElementById("title").style.color = "#2D2D2D";

  //changecolor active
  var hover = "li p:hover{ background-color: #2D2D2DAB; color: #FFFFFF; }";
  var style = document.createElement("style");

  if (style.styleSheet) {
    style.styleSheet.cssText = hover;
  } else {
    style.appendChild(document.createTextNode(hover));
  }

  document.getElementsByTagName("head")[0].appendChild(style);

  var active = ".active{ background-color: #2D2D2D; color: #FFFFFF; }";
  var style = document.createElement("style");

  if (style.styleSheet) {
    style.styleSheet.cssText = active;
  } else {
    style.appendChild(document.createTextNode(active));
  }

  document.getElementsByTagName("head")[0].appendChild(style);

  //LogoColor
  document.querySelector(".title img").src = "images/m-logo-suit.svg";
}

function ShowWomen() {
  document.querySelector("main").remove();
  document.querySelector("#content").append(document.createElement("main"));
  const women = document.querySelector("main");
  for (let i = 0; i < products.length; i++) {
    if (products[i].type == "Women") {
      const womenproduct = document.createElement("div");

      womenproduct.innerHTML =
        "<img src='images/" +
        products[i].image +
        "' ></br><h2>" +
        products[i].name +
        "</h2></br> <h4>$" +
        products[i].price +
        "</h4></br><button role='button' id='addToCart' class='name noselect'>Add To Cart</button>";
      women.append(womenproduct);
    }
  }
  document.getElementById("title").style.color = "#EE73C4";

  //changecolor active
  var hover = "li p:hover{ background-color: #EE73C4AB; color: #FFFFFF; }";
  var style = document.createElement("style");

  if (style.styleSheet) {
    style.styleSheet.cssText = hover;
  } else {
    style.appendChild(document.createTextNode(hover));
  }

  document.getElementsByTagName("head")[0].appendChild(style);

  var active = ".active{ background-color: #EE73C4; color: #FFFFFF; }";
  var style = document.createElement("style");

  if (style.styleSheet) {
    style.styleSheet.cssText = active;
  } else {
    style.appendChild(document.createTextNode(active));
  }

  document.getElementsByTagName("head")[0].appendChild(style);

  //LogoColor
  document.querySelector(".title img").src = "images/w-logo-suit.svg";
}

function ShowKids() {
  document.querySelector("main").remove();
  document.querySelector("#content").append(document.createElement("main"));
  const kids = document.querySelector("main");
  for (let i = 0; i < products.length; i++) {
    if (products[i].type == "Kids") {
      const kidsproduct = document.createElement("div");

      kidsproduct.innerHTML =
        "<img src='images/" +
        products[i].image +
        "' ></br><h2>" +
        products[i].name +
        "</h2></br> <h4>$" +
        products[i].price +
        "</h4></br><button id='addToCart' class='name noselect'>Add To Cart</button>";
      kids.append(kidsproduct);
    }
  }
  document.getElementById("title").style.color = "#F3C913";

  //changecolor active
  var hover = "li p:hover{ background-color: #F3C913AB; color: #FFFFFF; }";
  var style = document.createElement("style");

  if (style.styleSheet) {
    style.styleSheet.cssText = hover;
  } else {
    style.appendChild(document.createTextNode(hover));
  }

  document.getElementsByTagName("head")[0].appendChild(style);

  var active = ".active{ background-color: #F3C913; color: #FFFFFF; }";
  var style = document.createElement("style");

  if (style.styleSheet) {
    style.styleSheet.cssText = active;
  } else {
    style.appendChild(document.createTextNode(active));
  }

  document.getElementsByTagName("head")[0].appendChild(style);

  //LogoColor
  document.querySelector(".title img").src = "images/k-logo-suit.svg";
}

ShowMen();

//AvtiveOnClick

let divs = document.querySelectorAll("nav ul li");
divs.forEach((e) => {
  e.addEventListener("click", () => {
    remove();
    e.classList.add("active");
  });
});
function remove() {
  divs.forEach((e) => {
    e.classList.remove("active");
  });
}

//Cart

window.addEventListener('load', setup);

const get = document.getElementById.bind(document);
const query = document.querySelector.bind(document);

function setup() {
  
  let modalRoot = get('modal-root');
  let button = get('modal-opener');
  let modal = query('.modal');
  
  modalRoot.addEventListener('click', rootClick);
  button.addEventListener('click', openModal);
  modal.addEventListener('click', modalClick);
  
  function rootClick() {
    modalRoot.classList.remove('visible');
  }
  
  function openModal() {
    modalRoot.classList.add('visible');
  }
  
  function modalClick(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    return false;
  }
  
}
