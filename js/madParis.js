let product=document.getElementsByClassName("row")[0];
for(let i=0;i<arrayProducts.length;i++){
if(arrayProducts[i].discription == "MAD-PARIS"){
product.innerHTML += `<div class="col-md-3">
<div class="product-top">
    <img src="${arrayProducts[i].img[0]}" alt="">
    <div class="overlay">
        <button class="btn btn-secondary" title="quick shop" type="button"><i class="fa fa-eye"></i></button>
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
};

let eye=document.getElementsByClassName("fa fa-eye");
let heart=document.getElementsByClassName("fa fa-heart-o");
for(let i=0;i<eye.length;i++){
  eye[i].onclick=function(){
    if(arrayProducts[i+40].discription =="MAD-PARIS"){
      
      eye[i].innerHTML += `$<img src="${arrayProducts[i+40].img[0]}" style="width:400px;height:400px;position: absolute;z-index:1"">`
    }
    
  }

}

for(let i=0;i<heart.length;i++){
  heart[i].onclick=function(){
    if(arrayProducts[i+40].discription =="MAD-PARIS"){
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





















































































//!!!!!!!!!!!!!!!!!!!!111
// const  madParisArr=[
//     {id:41,name:"PERPECTUAL",price:5000,discription:"MAD-PARIS"},
//     {id:42,name:"ALANDER",price:10000,discription:"MAD-PARIS"},
//     {id:43,name:" FIRST PERPECTUAL",price:15000,discription:"MAD-PARIS"},
//     {id:44,name:" LADIES ALLENDER",price:20000,discription:"MAD-PARIS"},
//     {id:45,name:"PERPETULA",price:25000,discription:"MAD-PARIS"},
//     {id:46,name:"CHRONOGRAPH",price:30000,discription:"MAD-PARIS"},
//     {id:47,name:"YACHT",price:35000,discription:"MAD-PARIS"},
//     {id:48,name:"SPLIT SECONDS",price:40000,discription:"MAD-PARIS"},
//     {id:49,name:"YACHT DWELLER",price:45000,discription:"MAD-PARIS"},
//     {id:50,name:"CALESTIAL MOON ",price:50000,discription:"MAD-PARIS"},
//     {id:51,name:"TRAVEL TIME",price:55000,discription:"MAD-PARIS"},
//     {id:52,name:"MINUT ",price:60000,discription:"MAD-PARIS"},
//     {id:53,name:"TOURBILLION",price:65000,discription:"MAD-PARIS"},
//     {id:54,name:"PEARL MANER",price:70000,discription:"MAD-PARIS"},
//     {id:55,name:"ROYALS",price:75000,discription:"MAD-PARIS"},
//     {id:56,name:"PEARL MEN",price:80000,discription:"MAD-PARIS"},
//     {id:57,name:"CELLIN SKY",price:85000,discription:"MAD-PARIS"},
//     {id:58,name:"MASTER QUEEN",price:90000,discription:"MAD-PARIS"},
//     {id:59,name:"THE MASTER",price:95000,discription:"MAD-PARIS"},
//     {id:60,name:"REPEAT MAD",price:100000,discription:"MAD-PARIS"},
//   ]

















































