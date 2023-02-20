import product from "./products.json" assert { type: "json" };

//Change product

document.getElementById("ForMen").addEventListener("click", ShowMen);
document.getElementById("ForWomen").addEventListener("click", ShowWomen);
document.getElementById("ForKids").addEventListener("click", ShowKids);

function ShowMen() {
  document.querySelector("main").remove();
  document.querySelector("#content").append(document.createElement("main"));
  const men = document.querySelector("main");
  for (let i = 0; i < product.length; i++) {
    if (product[i].type == "Men") {
      const menproduct = document.createElement("div");

      menproduct.innerHTML =
        "<img class='product-img' src='images/" +
        product[i].image +
        "' ></br><h2>" +
        product[i].name +
        "</h2></br> <h4>$" +
        product[i].price +
        "</h4></br><button data-id='" +
        product[i].id +
        "' role='button' name='buttonId' class='name noselect addToCartButton' >Add To Cart</button>";

      men.append(menproduct);
    }
  }
  document.querySelectorAll(".addToCartButton").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      addItemToCart(e.target.dataset.id);
    });
  });
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
  for (let i = 0; i < product.length; i++) {
    if (product[i].type == "Women") {
      const womenproduct = document.createElement("div");

      womenproduct.innerHTML =
        "<img class='product-img' src='images/" +
        product[i].image +
        "' ></br><h2>" +
        product[i].name +
        "</h2></br> <h4>$" +
        product[i].price +
        "</h4></br><button id='" +
        product[i].id +
        "' role='button' class='name noselect' onClick=reply_click(this.id)>Add To Cart</button>";
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
  for (let i = 0; i < product.length; i++) {
    if (product[i].type == "Kids") {
      const kidsproduct = document.createElement("div");

      kidsproduct.innerHTML =
        "<img class='product-img' src='images/" +
        product[i].image +
        "' ></br><h2 class='product-name'>" +
        product[i].name +
        "</h2></br> <h4 class='product-price'>$" +
        product[i].price +
        "</h4></br><button id='" +
        product[i].id +
        "' role='button' class='name noselect' onClick=reply_click(this.id)>Add To Cart</button>";
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

window.addEventListener("load", setup);

const get = document.getElementById.bind(document);
const query = document.querySelector.bind(document);

function setup() {
  let modalRoot = get("modal-root");
  let button = get("modal-opener");
  let modal = query(".modal");

  modalRoot.addEventListener("click", rootClick);
  button.addEventListener("click", openModal);
  modal.addEventListener("click", modalClick);

  function rootClick() {
    modalRoot.classList.remove("visible");
  }

  function openModal() {
    modalRoot.classList.add("visible");
  }

  function modalClick(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    return false;
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const cartTotalValue = document.getElementById("cart-total-value");
// const cartCountInfo = document.getElementById("cart-count-info");
// const modalCart = document.querySelector("#addedCart");

function storeToLocal(data) {
  localStorage.setItem("products", JSON.stringify(data));
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", "[]");
  } else {
    setCartItems();
  }
}

storeToLocal(product);

let products = JSON.parse(localStorage.getItem("products"));
let cart = JSON.parse(localStorage.getItem("cart"));

// storeToLocal(product);

let BiD;
function reply_click(clicked_id) {
  BiD = clicked_id;
}

document.querySelector(".name").addEventListener("click", reply_click(BiD));

//Add product in the cart
function addItemToCart(productId) {
  let product = products.find(function (product) {
    return product.id == productId;
  });

  if (cart.length == 0) {
    cart.push(product);
  } else {
    let res = cart.find((element) => element.id == productId);
    if (res === undefined) {
      cart.push(product);
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  setCartItems();
}

function setCartItems() {
  if (localStorage.getItem("cart").length > 0) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let added = document.getElementById("addedCart");
    let products = ``;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price;
      let product = `
          <img src = "./images/${cart[i].image}" alt = "product image">
          <div class = "cart-item-info">
              <h3 class = "cart-item-name">${cart[i].name}</h3>
              <span class = "cart-item-category">${cart[i].type}</span>
              <span class = "cart-item-price">${cart[i].price}</span>
          </div>
        
          <button data-id="${cart[i].id}" type = "button" class = "cart-item-del-btn">x
              <i class = "fas fa-times"></i>
          </button>
        `;
      products += product;
    }

    added.innerHTML = products;
    cartTotalValue.innerHTML = total;
    document.querySelectorAll(".cart-item-del-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        removeItemFromCart(e.target.dataset.id);
      });
    });
  }
}

// let buttonId = document.querySelector("main div button");

// $(document).ready(function () {
//   $(buttonId).click(function () {
//     var idArr = [];
//     $("i").each(function () {
//       idArr.push($(this).attr("id"));
//     });

//     // Join array elements and display in alert
//     alert(idArr.join(", "));
//   });
// });

// purchase product
// function purchaseProduct(e) {
//   if (e.target.classList.contains("name noselect")) {
//     let product = e.target.parentElement.parentElement;
//     getProductInfo(product);
//   }
// }

// get product info after add to cart button click
// function getProductInfo(product) {
//   let productInfo = {
//     id: product.querySelector("span").id,
//     image: product.querySelector(".product-img img").src,
//     name: product.querySelector(".product-name").textContent,
//     type: product.querySelector(".product-type").textContent,
//     price: product.querySelector(".product-price").textContent,
//   };
//   addItemToCart(productInfo.id);
// }

// const spanId = product.querySelector("span").id;
// let PiD = spanId.getAttribute("id");

// console.log(PiD);

// //Removing product from the cart
function removeItemFromCart(productId) {
  let temp = JSON.parse(localStorage.getItem("cart")).filter(
    (item) => item.id != productId
  );
  localStorage.setItem("cart", JSON.stringify(temp));
  setCartItems();
}

// //Update product quantity
// function updateQuantity(productId, quantity) {
//   for (let product of cart) {
//     if (product.id == productId) {
//       product.quantity = quantity;
//     }
//   }
//   localStorage.setItem("cart", JSON.stringify(cart));
// }

// //Total Sum
// function totalSum() {
//   let temp = cart.map(function (item) {
//     return parseInt(item.price);
//   });

//   let sum = temp.reduce(function (prev, next) {
//     return prev + next;
//   });
// }

// totalSum();

// get all the products info if there is any in the local storage
function getProductFromStorage() {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
}
