let divcart = document.getElementById("cartTable");
const cartProducts = [
  { id: 1, name: "DATE-MASTER", price: 5000, discription: "rolex watch", img: ["../images/rolex/1  datejust  .webp", "../images/rolex/1  datejust  .webp"] },
  { id: 2, name: "GMT-MASTER", price: 10000, discription: "rolex watch", img: ["../images/rolex/2 GMT-MASTER II.webp", "../images/rolex/2 GMT-MASTER II.webp"] },
  { id: 3, name: "DATE-DAY", price: 15000, discription: "rolex watch", img: ["../images/rolex/3 DATE-DAY.webp", "../images/rolex/3 DATE-DAY.webp"] },
]
let btn = document.getElementById("btn");
let table = document.getElementById("table");
let divTotal = document.getElementById("divcart");
var sum = 0;


for (let i = 0; i < cartProducts.length; i++) {
  sum += cartProducts[i].price;
  table.innerHTML += `<tr id="${cartProducts[i].id}">
    <td>${cartProducts[i].discription}</td>
    <td>${cartProducts[i].name}</td>
    <td>${cartProducts[i].price}$</td>
    <td><img src="${cartProducts[i].img[0]}"></td>
    <td><button onclick="removeFromCart(${cartProducts[i].id})" )">remove </button></td>
  </tr> 
    </table>
  `
  
}
divTotal.innerHTML = `<p id="sum">TOTAL = ${sum}$</p>`
console.log(sum);
let itemsSum = document.getElementById("sum");


function removeFromCart(id) {
  for (let i = 0; i < cartProducts.length; i++) {
    if (cartProducts[i].id == id) {
      cartProducts.splice(i, 1);
      document.getElementById(id).innerHTML = "";
      let allSum = sum1();
      itemsSum.innerText = `${allSum}$`
      console.log(cartProducts);
    }
  }
}

function sum1() {
  let allSum = 0;
  for (let i = 0; i < cartProducts.length; i++) {
    allSum += cartProducts[i].price;
  }
  return allSum;
};
console.log(sum1());


 






























































