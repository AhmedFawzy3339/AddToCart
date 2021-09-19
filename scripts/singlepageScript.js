
const productDiv = document.querySelector("#product-page");
productDiv.style.margin = "20px";

const productId = new URLSearchParams(window.location.search).get(`ProductId`);
const singleProductApiLink =
  "https://afternoon-falls-30227.herokuapp.com/api/v1/products/" + productId;
const xhr = new XMLHttpRequest();
xhr.open("GET", singleProductApiLink);
xhr.send();


xhr.onload = function singlePage() {

  const receivedResponse = xhr.response;
  const product = JSON.parse(receivedResponse).data;
  const cart = [];


  const divEl = document.createElement("div");
  divEl.style.display = "flex";
  divEl.style.flexWrap = "wrap";
  divEl.style.flexDirection = "column";
  divEl.style.alignItems = "center";
  divEl.style.border = "3px black solid";
  divEl.style.padding = "30px";
  productDiv.appendChild(divEl);

  const h2El = document.createElement("h2");
  h2El.innerText = `${product.Category}`;
  divEl.appendChild(h2El);

  const h3El = document.createElement("h3");
  h3El.innerText = `${product.Name}`;
  divEl.appendChild(h3El);

  const pEl = document.createElement("p");
  pEl.innerText = `${product.Description}`;
  divEl.appendChild(pEl);

  const pEl2 = document.createElement("p");
  pEl2.innerText = `You can add up to = ${product.Quantity} items`;
  divEl.appendChild(pEl2);

  const imgEl2 = document.createElement("img");
  imgEl2.src = `${product.ProductPicUrl}`;
  imgEl2.maxWidth = "100%";
  imgEl2.alt = "Image";
  divEl.appendChild(imgEl2);

  const numInput = document.createElement("input");
  numInput.setAttribute("type", "text");
  numInput.setAttribute("value", "0");
  divEl.appendChild(numInput);
  let number = parseInt(numInput.value, 10);
  number = isNaN(number) ? 0 : number;

  let index1 = 0;

  const addItemToCart = document.createElement("button");
  addItemToCart.setAttribute("class", "add-btn");
  addItemToCart.innerText = "Add item to cart";
  addItemToCart.addEventListener("click", function () {
    if (product.Quantity >= 1) {
      number++;
      numInput.value = number;
      let dataInCart = {
        Name: `${product.Name}`,
        Price: `${product.Price}`,
        ProductPicUrl: `${product.ProductPicUrl}`,
        Quantity: `${number}`,
      };
      --product.Quantity;
      cart.push(dataInCart);
      ++index1;
    } else {
      numInput.value = `You can't add more items`;
      addItemToCart.disabled = true;
    }
    window.localStorage.setItem("list1", JSON.stringify(cart));
    });
  divEl.appendChild(addItemToCart);
};
