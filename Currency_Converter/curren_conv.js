const base_Url = "https://api.exchangerate-api.com/v4/latest/USD";
const dropDown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
 dropDown.forEach((select)=>{
  for(currCode in countryList){
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if(select.name === "From" && currCode === "USD"){
        newOption.selected = "selected";
    }else if(select.name === "To" && currCode === "NPR"){
        newOption.selected = "selected";
    }
    select.append(newOption);
  }
  //<-----------------------||-------------------------------------->

  //<------------------------------||------------------------------------>
  select.addEventListener("change" , (event)=>{
    updateFlag(event.target)
    msg.classList.add("hide");
  })
 })

 const updateFlag = (element) =>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
 }

 btn.addEventListener("click" , async (event)=>{
       event.preventDefault();
       let amount = document.querySelector(".amount input");
       let amtVal = amount.value;
       if(amtVal === "" || amtVal < 1){
          amtVal = 1;
          amount.value = 1;
       }
       const URL = `https://api.exchangerate-api.com/v4/latest/${fromCurr.value}`;
       try{
       let response = await fetch(URL);
       let data = await response.json();
       msg.innerText = `${amtVal} ${fromCurr.value} = ${amtVal * data.rates[toCurr.value]} ${toCurr.value} `;
       msg.classList.remove("hide");
       } catch(error){
        msg.innerText = ` ${fromCurr.value} to ${toCurr.value} Service isnot Provided`;
        msg.classList.remove("hide");
       }
 })