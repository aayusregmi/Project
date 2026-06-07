const boxes = document.querySelectorAll(".box");
const msg = document.querySelector(".msg");
const btn = document.querySelector(".btn");
const CHOICES = ['Rock', 'Paper', 'Scissors'];
const result = document.querySelector(".result-container");
const showResult = () =>{
    result.classList.remove("hide");
}
const cpuPick = () => {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}
const winner = (compChoice , userChoice) =>{
    if (compChoice === "Rock") {
        if (userChoice === "Paper") {
           msg.innerText = `Winner is ${userChoice} | Your Choice = ${userChoice} | Computer Choice = ${compChoice}`
        } else if (userChoice === "Scissors") {
            msg.innerText =`Winner is ${compChoice} | Your Choice = ${userChoice} | Computer Choice = ${compChoice}`;
        } else if (userChoice === "Rock") {
            msg.innerText = `Game is  Draw | Your Choice = ${userChoice} | Computer Choice = ${compChoice}`;
        }
    } else if (compChoice === "Paper") {
        if (userChoice === "Rock") {
            msg.innerText =`Winner is ${compChoice} | Your Choice = ${userChoice} | Computer Choice = ${compChoice}`;
        } else if (userChoice === "Scissors") {
            msg.innerText =`Winner is ${userChoice} | Your Choice = ${userChoice} | Computer Choice = ${compChoice}`;
        } else if (userChoice === "Paper") {
            msg.innerText =`Game is Draw | Your Choice = ${userChoice} | Computer Choice = ${compChoice}`;
        }
    } else if (compChoice === "Scissors") {
        if (userChoice === "Rock") {
           msg.innerText = `Winner is ${userChoice} | Your Choice = ${userChoice} | Computer Choice = ${compChoice}`;
        } else if (userChoice === "Paper") {
            msg.innerText =`Winner is ${compChoice} | Your Choice = ${userChoice} | Computer Choice = ${compChoice}`;
        } else if (userChoice === "Scissors") {
            msg.innerText =`Game is Draw | Your Choice = ${userChoice} | Computer Choice = ${compChoice}`;
        }
    }
}

const showWinner = (compChoice, userChoice) => {
    if (compChoice === "Rock") {
        if (userChoice === "Paper") {
            showResult();
            winner(compChoice , userChoice);
        } else if (userChoice === "Scissors") {
         showResult();
            winner(compChoice , userChoice);
        } else if (userChoice === "Rock") {
         showResult();
            winner(compChoice , userChoice);
        }
    } else if (compChoice === "Paper") {
        if (userChoice === "Rock") {
         showResult();
            winner(compChoice , userChoice);
        } else if (userChoice === "Scissors") {
         showResult();
            winner(compChoice , userChoice);
        } else if (userChoice === "Paper") {
         showResult();
            winner(compChoice , userChoice);
        }
    } else if (compChoice === "Scissors") {
        if (userChoice === "Rock") {
         showResult();
            winner(compChoice , userChoice);
        } else if (userChoice === "Paper") {
         showResult();
            winner(compChoice , userChoice);
        } else if (userChoice === "Scissors") {
         showResult();
            winner(compChoice , userChoice);
        }
    }
}
// boxes.forEach((box)=>{
//     box.disabled = true;
// })
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        boxes.forEach((b)=>{
            if(b !== box){
               b.style.display = "none";
            }
            box.disabled = true;
            btn.style.display = "block";
            msg.classList.remove("hide");
        })
        const compChoice = cpuPick();
        const userChoice = box.innerText;
        if (compChoice === "Rock") {
            if (userChoice === "Paper") {
                showWinner(compChoice, userChoice);
                console.log(`cpu = ${compChoice} , user = ${userChoice}`);
            } else if (userChoice === "Scissors") {
                showWinner(compChoice, userChoice);
                console.log(`cpu = ${compChoice} , user = ${userChoice}`);
            } else if (userChoice === "Rock") {
                showWinner(compChoice, userChoice);
                console.log(`cpu = ${compChoice} , user = ${userChoice}`);
            }
        } else if (compChoice === "Paper") {
            if (userChoice === "Rock") {
                showWinner(compChoice, userChoice);
                console.log(`cpu = ${compChoice} , user = ${userChoice}`);
            } else if (userChoice === "Scissors") {
                showWinner(compChoice, userChoice);
                console.log(`cpu = ${compChoice} , user = ${userChoice}`);
            } else if (userChoice === "Paper") {
                showWinner(compChoice, userChoice);
                console.log(`cpu = ${compChoice} , user = ${userChoice}`);
            }
        } else if (compChoice === "Scissors") {
            if (userChoice === "Rock") {
                showWinner(compChoice, userChoice);
                console.log(`cpu = ${compChoice} , user = ${userChoice}`);
            } else if (userChoice === "Paper") {
                showWinner(compChoice, userChoice);
                console.log(`cpu = ${compChoice} , user = ${userChoice}`);
            } else if (userChoice === "Scissors") {
                showWinner(compChoice, userChoice);
                console.log(`cpu = ${compChoice} , user = ${userChoice}`);
            }
        }
    })
})
btn.addEventListener("click" , ()=>{
    msg.classList.add("hide");
    boxes.forEach((box)=>{
    box.style.display = "block";
    btn.style.display = "none";
    box.disabled = false;
   })
})
