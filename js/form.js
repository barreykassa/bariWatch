
let btn=document.getElementById("btn");
let input=document.getElementsByClassName("form-control");
let newClient = []
btn.onclick=function(e){
    e.preventDefault();
    for(i=0;i<input.length;i++){
  if(input[i].value == ""){
      alert("form must be filled out")
  }
  newClient.push(input[i].value);
    }
    
    console.log(newClient);
}

