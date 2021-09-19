

let arr2 = JSON.parse(window.localStorage.getItem("list"));
let arr1 = JSON.parse(window.localStorage.getItem("list1"));
//null check
if (arr1 == null || arr2 == null) {
  if (arr1 == null) {
    arr1 = [];}
    if (arr2 == null) {
      arr2 = [];  }
      arr3 = arr2.concat(arr1);
    } else {
      arr3 = arr2.concat(arr1);}
    
   
    let repeat = "Name";
    let total = [];
      arr3.forEach((elem) => {
       if (
          total.some((val) => {
            return val[repeat] == elem[repeat];
          })
          ) {
            total.forEach((obj1) => {
              if (obj1[repeat] === elem[repeat]) {
                obj1["Quantity"]++;
              }
            });
          } else {
            let obj2 = {};
            obj2[repeat] = elem[repeat];
            obj2["Quantity"] = 1;
            obj2["Price"] = elem["Price"];
            obj2["ProductPicUrl"] = elem["ProductPicUrl"];
            total.push(obj2);
          }
        });
       
      
      
     let div = "";
      total.forEach((prod) => {
      div += `<div>
          
            
             

        <tr>
          <td class="aaa"> <img src= ${prod.ProductPicUrl}>  </td>
          <td class ="bbb"><p> ${prod.Name} </p> </td>
          <td class ="bbb"> <p>  $${prod.Price} </p></td>
          <td class ="bbb"> <p>  Quantity: ${prod.Quantity} </p></td>
          <td class ="bbb">   <p>  Total: ${prod.Quantity * prod.Price} </p>
          </td>
        </tr>

        </div>
        
        `;
});

let totalSum = 0;
total.forEach((prod) => {
  totalSum += parseInt(prod.Quantity) * parseInt(prod.Price);
});
div += `<div class ="TP"> <p> Total Price : ${totalSum}  </p> </div>`;

let cartDiv = document.querySelector("#cart");
cartDiv.innerHTML = div;
let backbtn = document.createElement("button")
let clearBtn = document.createElement("button");
clearBtn.innerText = "Clear Item";
backbtn.innerText="back and buyMore"
cartDiv.appendChild(clearBtn);
cartDiv.appendChild(backbtn);
clearBtn.addEventListener("click", function () {
  window.localStorage.removeItem("list");
  window.localStorage.removeItem("list1");
  window.location.reload();
  window.location.href="home.html"
});

backbtn.addEventListener("click", function () {
 
  window.location.href="home.html"
});
