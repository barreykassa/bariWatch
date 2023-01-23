let product = document.getElementsByClassName("row")[0];

for (let i = 0; i < arrayProducts.length; i++) {
  if (arrayProducts[i].discription == "rolex watch") {
    product.innerHTML += `  <div class="col-md-3">
        <div class="product-top">
        <img src="${arrayProducts[i].img[0]}" alt="">
      
            <div class="overlay">
                <button class="btn btn-secondary" title="quick shop" type="button"><i class="fa fa-eye"></i></button>
                <button class="btn btn-secondary" title="add i wish list" type="button"><i
                        class="fa fa-heart-o"></i></button>
                <button class="btn btn-secondary" title="add to cart" type="button" onclick = "addToCart(${arrayProducts[i].id})"><i
                        class="fa fa-shopping-cart" ></i></button>
            </div>
        </div>
        <div class="product-bottom text-center">
            <i class="fa fa-star"></i>
           <i class="fa fa-star"></i>
           <i class="fa fa-star"></i>
           <i class="fa fa-star-half-o"></i>
           <i class="fa fa-star-o"></i> 
           <h3>${arrayProducts[i].name}</h3>
           <h5 class="h5">${arrayProducts[i].price}$</h5>
          </div>  
    </div>`
  }
}


let heart=document.getElementsByClassName("fa fa-heart-o");
let eye=document.getElementsByClassName("fa fa-eye");
for(let i=0;i<eye.length;i++){
  eye[i].onclick=function(){
    if(arrayProducts[i].discription =="rolex watch"){
      
      eye[i].innerHTML += `$<img src="${arrayProducts[i].img[0]}" style="width:400px;height:400px;position: absolute;z-index:1">`
      
    }
    
  }

}

for(let i=0;i<heart.length;i++){
  heart[i].onclick=function(){
    if(arrayProducts[i].discription =="rolex watch"){
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


// let container=document.getElementsByClassName("container");
// window.onload= function(){
// container.innerHTML += "welcome to rolex";
// }



    
 
 





























































//!!!!!!!!!!!!!!!111
// const  rolexArr=[
//   {id:1,name:"DATE-MASTER",price:5000,discription:"rolex watch", img:["../images/rolex/1  datejust  .webp","../images/rolex/1  datejust  .webp"]},
//   {id:2,name:"GMT-MASTER",price:10000,discription:"rolex watch",img:["../images/rolex/2 GMT-MASTER II.webp","../images/rolex/2 GMT-MASTER II.webp"]},
//   {id:3,name:"DATE-DAY",price:15000,discription:"rolex watch",img:["../images/rolex/3 DATE-DAY.webp","../images/rolex/3 DATE-DAY.webp"]},
//   {id:4,name:"SUBMARINE",price:20000,discription:"rolex watch",img:["../images/rolex/4SUBMARINE.webp","../images/rolex/4SUBMARINE.webp"]},
//   {id:5,name:"OYSTER PERPETULA",price:25000,discription:"rolex watch",img:["../images/rolex/5 oyster perpetual.webp","../images/rolex/5 oyster perpetual.webp"]},
//   {id:6,name:"COSMOGRAPH DYTON",price:30000,discription:"rolex watch",img:["../images/rolex/6Cosmograph Daytona.webp","../images/rolex/6Cosmograph Daytona.webp"]},
//   {id:7,name:"YACHT MASTER",price:35000,discription:"rolex watch",img:["../images/rolex/7 Yacht-Master.webp","../images/rolex/7 Yacht-Master.webp"]},
//   {id:8,name:"LADY DATEHUST",price:40000,discription:"rolex watch",img:["../images/rolex/8 Lady-Datejust.webp","../images/rolex/8 Lady-Datejust.webp"]},
//   {id:9,name:"SEA DWELLER",price:45000,discription:"rolex watch",img:["../images/rolex/9 Sea-Dweller.webp","../images/rolex/9 Sea-Dweller.webp"]},
//   {id:10,name:"EXPLORE",price:50000,discription:"rolex watch",img:["../images/rolex/10 Explorer.webp","../images/rolex/10 Explorer.webp"]},
//   {id:11,name:"SKY DWELLER",price:55000,discription:"rolex watch",img:["../images/rolex/11 Sky-Dweller.webp","../images/rolex/11 Sky-Dweller.webp"]},
//   {id:12,name:"MILGAUESS",price:60000,discription:"rolex watch",img:["../images/rolex/12 Milgauss.jpg","../images/rolex/12 Milgauss.jpg"]},
//   {id:13,name:"CELLIN",price:65000,discription:"rolex watch",img:["../images/rolex/13 CELLINI.webp","../images/rolex/13 CELLINI.webp"]},
//   {id:14,name:"PEARLMASTER",price:70000,discription:"rolex watch",img:["../images/rolex/14 Pearlmaster.webp","../images/rolex/14 Pearlmaster.webp"]},
//   {id:15,name:"AIR KING",price:75000,discription:"rolex watch",img:["../images/rolex/15 Air-King.webp","../images/rolex/15 Air-King.webp"]},
//   {id:16,name:"PEARLMASTER DWELLER",price:80000,discription:"rolex watch",img:["../images/rolex/6Cosmograph Daytona.webp","../images/rolex/6Cosmograph Daytona.webp"]},
//   {id:17,name:"CELLIN SKY",price:85000,discription:"rolex watch",img:["../images/rolex/7 Yacht-Master.webp","../images/rolex/7 Yacht-Master.webp"]},
//   {id:18,name:"PEARLMASTER QUEEN",price:90000,discription:"rolex watch",img:["../images/rolex/8 Lady-Datejust.webp","../images/rolex/8 Lady-Datejust.webp"]},
//   {id:19,name:"KING OF KINGS",price:95000,discription:"rolex watch",img:["../images/rolex/11 Sky-Dweller.webp","../images/rolex/11 Sky-Dweller.webp"]},
//   {id:20,name:"GMT-QUENN",price:100000,discription:"rolex watch",img:["../images/rolex/14 Pearlmaster.webp","../images/rolex/14 Pearlmaster.webp"]},
// ]





// const  rolexArr=[
  //   {id:1,name:"DATE-MASTER",price:5000,discription:"rolex watch", img:["../images/Louis Moinet/3 Louis Moinet.jpg","../images/Louis Moinet/3 Louis Moinet.jpg"]},
  //   {id:2,name:"GMT-MASTER",price:10000,discription:"rolex watch"},
  //   {id:3,name:"DATE-DAY",price:15000,discription:"rolex watch"},
  //   {id:4,name:"SUBMARINE",price:20000,discription:"rolex watch"},
  //   {id:5,name:"OYSTER PERPETULA",price:25000,discription:"rolex watch"},
  //   {id:6,name:"COSMOGRAPH DYTON",price:30000,discription:"rolex watch"},
  //   {id:7,name:"YACHT MASTER",price:35000,discription:"rolex watch"},
  //   {id:8,name:"LADY DATEHUST",price:40000,discription:"rolex watch"},
  //   {id:9,name:"SEA DWELLER",price:45000,discription:"rolex watch"},
  //   {id:10,name:"EXPLORE",price:50000,discription:"rolex watch"},
  //   {id:11,name:"SKY DWELLER",price:55000,discription:"rolex watch"},
  //   {id:12,name:"MILGAUESS",price:60000,discription:"rolex watch"},
  //   {id:13,name:"CELLIN",price:65000,discription:"rolex watch"},
  //   {id:14,name:"PEARLMASTER",price:70000,discription:"rolex watch"},
  //   {id:15,name:"AIR KING",price:75000,discription:"rolex watch"},
  //   {id:16,name:"PEARLMASTER DWELLER",price:80000,discription:"rolex watch"},
  //   {id:17,name:"CELLIN SKY",price:85000,discription:"rolex watch"},
  //   {id:18,name:"PEARLMASTER QUEEN",price:90000,discription:"rolex watch"},
  //   {id:19,name:"KING OF KINGS",price:95000,discription:"rolex watch"},
  //   {id:20,name:"GMT-QUENN",price:100000,discription:"rolex watch"},
  // ]

  // let divcheack=document.getElementById("cheack");
  // for(let i=0;i<rolexArr.length;i++){
  //   if(rolexArr[i].id == 1){

  //      divcheack.innerHTML += `<img src="${rolexArr[i].img[0]}"> <img src="${rolexArr[i].img[0]}">`
  //   console.log("111");
  //   }
  // }
// let eye=document.getElementsByClassName("fa fa-eye");
// let overlay=document.getElementsByClassName("overlay");


  // for(let i=0;i<eye.length;i++){
  //   eye[i].onclick=function(){
  //     eye[i].innerHTML += `<p><img src="https://cdn.webshopapp.com/shops/277113/files/373313631/365x486x1/seafarer-jet.jpg" style="width:30px; height:30px" </style></p>`
  //     eye[i].src = 'Images/rolex/1 datejust.webp'

  //   };

  // };

// function showPictures(){
//   for(let i=0;i<rolexArr.length;i++){
//     eye[i].innerHTML = `<p><img src="${rolexArr.id}"></p>`
//   }
//  };










































//   let h2=document.getElementById("h2");
//   let classh2=document.getElementsByClassName("classh2")[0];

//   classh2.onclick=function(){
//       setInterval(function(){
//         classh2.innerText += `"that is amazing"`
//       },2000)
//       console.log(classh2);

//   }















//! old to erase
// const vintageProducts=[

//     {
//         id:1,
//         name:"Universal Genève Compax",
//         price:2600,
//         catagories:"vintage",
//         discription:"Gold Chronograph Handaufzug Ref",
//         images:["https://cdn2.chrono24.com/images/uhren/20274735-kilpx77hrkli9wix6ljs5op4-ExtraLarge.jpg",
//         	"https://cdn2.chrono24.com/images/uhren/20274735-4ekyzrg4d9bx2wumzcrp8hdk-ExtraLarge.jpg"
//     ]   
//     },
//     {
//         id:2,
//         name:"Rolex Bubble Back",
//         price:500,
//         catagories:"vintage",
//         discription:"1983 (Approximation)",
//         images:["https://cdn2.chrono24.com/images/uhren/images_37/s4/9992437_xxl_v1554938366044.jpg",
//         	"https://cdn2.chrono24.com/images/uhren/images_37/s4/9992437c_xxl.jpg"

//     ] 
//     },
//     {
//         id:3,
//         name:"Patek Philippe Calatrava 3429",
//         price:500,
//         catagories:"vintage",
//         discription:"Good (Light signs of wear or scratches)",
//         images:["https://cdn2.chrono24.com/images/uhren/15522259-uhxqbakqlimsd0qpphnv8qjn-ExtraLarge.jpg",
//         "https://cdn2.chrono24.com/images/uhren/15522259-kwgwqka5q1istxuflvtpwvnc-ExtraLarge.jpg"
//     ]   
//     }

// ]
// console.log(vintageProducts);

// //! bdicat for 
// for(let i=0;i<vintageProducts.length;i++){
//     document.write(vintageProducts[i].discription);
//     document.write(vintageProducts[i].id)
//     document.write(`<img src ="${vintageProducts[i].images[i]}" style="width:400px; hight:400px">`);
// };