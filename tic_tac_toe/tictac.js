let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("p");
let turnMsg = document.querySelector("#turn");
let mainContainer = document.querySelector("#main");
let turnO = true; //playerX , playerO
let clickedBoxes = 0;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame = () =>{
    mainContainer.classList.remove("hide");
    turnO = true;
    enableBox();
    msgContainer.style.display = "none";
 

}
const disableBox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) =>{
    msgContainer.style.display = "flex";
    mainContainer.classList.add("hide");
    msg.innerText = `Congratulation!! The winner is ${winner}`;
    }
 const checkWinner = () =>{

    console.log("Function called");
    
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val  &&  pos2val === pos3val){
                disableBox ();
                showWinner(pos1val);
            }
        }

    }
}
boxes.forEach((box) => {
    box.addEventListener("click" , ()=>{
        clickedBoxes++;
        if(clickedBoxes === 9){
            disableBox();
            msgContainer.style.display = "flex";
            mainContainer.classList.add("hide");
            msg.innerText = "It's a Tie!!";
        }
        else{
            if(turnO){
                box.innerText = "O";
                box.style.color = "#0de70d";
                turnO = false;
                turnMsg.innerText = "X Turn";
            }
            else{
                box.innerText = "X";
                box.style.color = "#ff0b0b";
                turnO = true;
                turnMsg.innerText = "O Turn";
            }
            box.disabled = true;
            checkWinner();
        }
    })
})
resetBtn.addEventListener("click" , resetGame);
newGameBtn.addEventListener("click", resetGame);

