let num=document.getElementById("number");
let increase=document.getElementById("increase");
let reset=document.getElementById("reset");
let decrease=document.getElementById("decrease");
let count=0;

increase.onclick= function(){
   count++;
    num.textContent=count;
}


reset.onclick= function(){
    count=0;
     num.textContent=count;
 }


 
decrease.onclick= function(){
    count--;
     num.textContent=count;
 }


 
