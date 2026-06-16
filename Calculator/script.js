const btn = document.querySelectorAll(".btn");
const screen = document.querySelector(".js-screen");
let num1;
let num2;
let operator;
let answer;
screen.innerText = "";
for(let button of btn){
    
    button.addEventListener("click" , (evt)=>{
        if(evt.target.value != "CE"){screen.innerText = evt.target.value;}
       if(evt.target.value === "AC"){
        location.reload();
       }else if(evt.target.value === "CE"){
        evt.target.value.slice(0 , (evt.target.value.length-1))
       }else if(evt.target.value === "+" || evt.target.value === "-" || evt.target.value === "*" || evt.target.value === "/"){
        operator = evt.target.value;
       }else if(operator == null){
        num1 = (num1 || "") + evt.target.value;
        console.log(num1);
        screen.innerText = num1;
       }else{
        num2 = (num2 || "") + evt.target.value;
        console.log(num2);
        screen.innerText = num2;
       }

       if(evt.target.value === "="){
        num2 = num2.slice(0 , (num2.length-1))
        if(operator === "+"){
            sum(num1 , num2)
            screen.innerText = sum(num1 , num2);
        }else if(operator === "-"){
            sub(num1 , num2)
            screen.innerText = sub(num1 , num2);
        }else if(operator === "*"){
            multi(num1 , num2)
            screen.innerText = multi(num1 , num2);
        }else if(operator === "/"){
            divi(num1 , num2)
            screen.innerText = divi(num1 , num2);
        }
        num1 = null;
        num2 = null;
        operator = null;
       }
    })
}
function sum(num1 , num2){
    return Number(num1) + Number(num2);
}
function multi(num1 , num2){
    return Number(num1) * Number(num2);
}
function divi(num1 , num2){
     return Number(num1) / Number(num2);
}
function sub(num1 , num2){
    return Number(num1) - Number(num2);
}