


const homeAPILink =
"https://afternoon-falls-30227.herokuapp.com/api/v1/products/";
const xhr = new XMLHttpRequest();
xhr.open("GET", homeAPILink);
xhr.send();

const all = document.querySelector("#content");

xhr.onload = function getHomePage() {
  const res = xhr.response;
  const users = JSON.parse(res).data;

  const cart = [];

  users.forEach((user) => {
    const divEl = document.createElement("div");
    const h2El = document.createElement("h3");
    const aEl = document.createElement("a");
    const imgEl = document.createElement("img");
    const Q_out = document.createElement("input");
    const pEl = document.createElement("p");
    const Quant =document.createElement("p")
    const addItemToCart = document.createElement("button");
    
    divEl.classList.add("col-4", "p-3");
    imgEl.classList.add("img-thumbnail", "img-fluid");
    
    aEl.href = `singlePage.html?ProductId=${user.ProductId}`;
    h2El.innerText = `${user.Name}`;
    imgEl.src = user.ProductPicUrl;
    pEl.innerText = `${user.Price} $ ----------------------->`;
    addItemToCart.innerText = "Add To Cart";
    Quant.innerText=`Quantity remain: ${user.Quantity}`

    divEl.appendChild(h2El);
    aEl.appendChild(imgEl);
    divEl.appendChild(aEl);
    divEl.appendChild(pEl);
    divEl.appendChild(Quant)
    divEl.appendChild(Q_out);
    divEl.appendChild(addItemToCart);
    all.appendChild(divEl);
    
    
    
    Q_out.setAttribute("disabled", "true");
    Q_out.setAttribute("value", "0");
    let number = parseInt(Q_out.value, 10);
    number = isNaN(number) ? 0 : number;


    let count = 0;

    addItemToCart.setAttribute("class", "add-btn");
    addItemToCart.addEventListener("click", function () {
      if (user.Quantity >= 1) {
        number++;
        Q_out.value = number;
        let dataInCart = {
          Name: `${user.Name}`,
          Price: `${user.Price}`,
          ProductPicUrl: `${user.ProductPicUrl}`,
          Quantity: `${number}`,
        };
        user.Quantity--;
        cart.push(dataInCart);
        ++count;
        Quant.innerText=`Quantity remain: ${user.Quantity}`
      } else {
      
        addItemToCart.disabled = true;
      }
      window.localStorage.setItem("list", JSON.stringify(cart));

    });
  });
};
