let product=document.getElementsByClassName("row")[0];
for(let i=0;i<arrayProducts.length;i++){
    if(arrayProducts[i].discription == "LOUIS-MOINET"){
        product.innerHTML += ` <div class="col-md-3">
        <div class="product-top">
            <img src="${arrayProducts[i].img[0]}" alt="">
            <div class="overlay">
                <button id="btn1" class="btn btn-secondary" title="quick shop" type="button"><i
                        class="fa fa-eye"></i></button>
                <button class="btn btn-secondary" title="add i wish list" type="button"><i
                        class="fa fa-heart-o"></i></button>
                <button class="btn btn-secondary" title="add to cart" type="button" onclick = "addToCart(${arrayProducts[i].id})"><i
                        class="fa fa-shopping-cart"></i></button>
            </div>
        </div>
        <div class="product-bottom text-center">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-o"></i>
            <i class="fa fa-star-o"></i>
            <h3>${arrayProducts[i].name}</h3>
            <h5>${arrayProducts[i].price}$</h5>
        </div>
    </div>`
    }

}


let eye=document.getElementsByClassName("fa fa-eye");
let heart=document.getElementsByClassName("fa fa-heart-o");
for(let i=0;i<eye.length;i++){
  eye[i].onclick=function(){
    if(arrayProducts[i+60].discription == "LOUIS-MOINET"){
      
      eye[i].innerHTML += `$<img src="${arrayProducts[i+60].img[0]}" style="width:400px;height:400px;position: absolute;z-index:1"">`
    }
    
  }

}

for(let i=0;i<heart.length;i++){
  heart[i].onclick=function(){
    if(arrayProducts[i+60].discription == "LOUIS-MOINET"){
      heart[i].style.color="red"
      
    }
    
  }

}




function addToCart(id) {
  for(let i=0;i<arrayProducts.length;i++){
    if(arrayProducts[i].id == id){
      cartProducts.push(arrayProducts[i]);
      console.log(cartProducts);
    }
  }
}






































//!!!!!!!!!!!!!!!!!!!!11
// const  louisMoinetArr=[
//     {id:61,name:"PERPEDER",price:5000,discription:"LOUIS-MOINET", img :["../Images/Louis Moine",""]},
//     {id:62,name:"CTUAL CALAN",price:10000,discription:"LOUIS-MOINET"},
//     {id:63,name:"FIRST PETUAL",price:15000,discription:"LOUIS-MOINET"},
//     {id:64,name:"TOURBILLIN",price:20000,discription:"LOUIS-MOINET"},
//     {id:65,name:"SEA DWELLER",price:25000,discription:"LOUIS-MOINET"},
//     {id:66,name:"PEARLMASTER",price:30000,discription:"LOUIS-MOINET"},
//     {id:67,name:"CHRONOGRAPH",price:35000,discription:"LOUIS-MOINET"},
//     {id:68,name:"CELLIN ",price:40000,discription:"LOUIS-MOINET"},
//     {id:69,name:"MONOPUSHER",price:45000,discription:"LOUIS-MOINET"},
//     {id:70,name:"GMT-QUENN",price:50000,discription:"LOUIS-MOINET"},
//     {id:71,name:" MOON AGE",price:55000,discription:"LOUIS-MOINET"},
//     {id:72,name:"TIME TRAVEL",price:60000,discription:"LOUIS-MOINET"},
//     {id:73,name:"TOURBILLION",price:65000,discription:"LOUIS-MOINET"},
//     {id:74,name:"PEARL AND GOLD",price:70000,discription:"LOUIS-MOINET"},
//     {id:75,name:"AIR KING",price:75000,discription:"LOUIS-MOINET"},
//     {id:76,name:" DWELLER",price:80000,discription:"LOUIS-MOINET"},
//     {id:77,name:"CELLIN SKY",price:85000,discription:"LOUIS-MOINET"},
//     {id:78,name:" QUEEN",price:90000,discription:"LOUIS-MOINET"},
//     {id:79,name:"GOLD",price:95000,discription:"LOUIS-MOINET"},
//     {id:80,name:"DATE MASTER",price:100000,discription:"LOUIS-MOINET"},
//   ]


// let btn=document.getElementById("btn1");

// let overlay=document.getElementsByClassName("overlay");
// let heart=document.getElementsByClassName("product-bottom text-center");
// let btns=document.getElementsByClassName("btn btn-secondary");
// function btnHendler(){
   
//     for(i=0;i<btns.length;i++){
//         let btns=document.getElementsByClassName("btn btn-secondary")[i];
//         btns.onclick=function(){
//             btns.innerText += "ttt"
//         }
//     }
// }
// btnHendler();








//   let div=document.getElementsByClassName("col-md-3");
//   let container=document.getElementsByClassName("container");
//   for(i=0;i<div.length;i++){
//       div.onclick=function(){
//        div.innerHTML += `<p>${ louisMoinetArr}</p>`
//       };
//   }