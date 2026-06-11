const input = document.querySelector(".inp_user");
const btn = document.querySelector(".btn");
const list = document.querySelector(".list")
const rst = document.querySelector(".reset");
btn.addEventListener("click" , (event) => { 
       const el_box = document.createElement("input");
       const el_p = document.createElement("p");
       const div = document.createElement("div");
       el_p.style = "height: fit-content";

       el_box.type = "checkbox"
       el_box.style = "height : 2.5vh; padding: 3rem; width: 1rem;"

       event.preventDefault();
       list.classList.remove("hide");
       rst.classList.remove("mask");
    //    console.log(input.value);
       div.append(el_box);
       el_p.innerText = input.value;
       div.append(el_p);
       list.prepend(div);
       input.value ="";
       

})
rst.addEventListener("click" , (evt) =>{
    evt.preventDefault();
    list.innerHTML = "";
    list.classList.add("hide");
    rst.classList.add("mask");
})