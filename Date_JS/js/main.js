var hour = new Date().getHours();
if(hour > 6 && hour < 12){

   alert("Sabahiniz Xeyir");
   document.body.style.backgroundColor = "white"
   
}


var hour = new Date().getHours();
if(hour > 12 && hour < 18){
    alert("Gunortaniz Xeyir")
    document.body.style.backgroundColor = "yellow"
}


var hour = new Date().getHours();
if(hour > 18 && hour < 23){
    alert("Axsaminiz Xeyir")
    document.body.style.backgroundColor = "black"
}

