
let min=1;
let max=10;
let ans=Math.floor(Math.random()*(max-min+1)+min);

let attempt=0;

let running=true;

let submit=document.getElementById("numsub");



submit.onclick=function(){
    let error=document.getElementById("error");
    let guess=document.getElementById("num").value;
  

        attempt++;
        
        
        if(guess<ans){
            error.textContent="Too low";
        }
        else if(guess>ans){
            error.textContent="Too high";
        }
        else{
            alert(` Congrats \n Number: ${ans} \n Attempts: ${attempt}`);
            running=false;
        }
       
    
        
    
    
}