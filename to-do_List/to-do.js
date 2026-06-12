const input = document.querySelector(".inp_user");
const btn = document.querySelector(".btn");
const list = document.querySelector(".list")
const rst = document.querySelector(".reset");
let count = 1;
btn.addEventListener("click" , (event) => {
    event.preventDefault();
    if(count<=11){
       const el_box = document.createElement("input");
       const el_p = document.createElement("p");
       const div = document.createElement("div");
       const dlt_btn = document.createElement("button");
       dlt_btn.style = "border: 1px solid white; background-color: lightslategray; width: 4rem; height: 1em; padding-bottom:1.1em; border-radius : 1rem"
       dlt_btn.innerText = "Remove"
       el_p.style = "height: fit-content";

       el_box.type = "checkbox"
       el_box.style = "appearance: none; height : 2.5vh; padding: 3rem; width: 1rem; background-color: black" //background color not working

       
       list.classList.remove("hide");
       rst.classList.remove("mask");
    //    console.log(input.value);
      div.append(el_box);
       if(input.value === ""){
        alert("Write the task you want to add")
        el_p.innerText = "Empty List"
        // location.reload();
        el_box.remove();
       }else{
        el_p.innerText = input.value;
       } 
       div.append(el_p);
       div.append(dlt_btn);
       list.prepend(div);
       dlt_btn.addEventListener("click" , ()=>{
       div.remove();
       }) }
       input.value ="";
       count++;
    //    else{
    //     list.innerHTML = " ";
    //    }
})
rst.addEventListener("click" , (evt) =>{
    evt.preventDefault();
    list.innerHTML = "";
    list.classList.add("hide");
    rst.classList.add("mask");
})