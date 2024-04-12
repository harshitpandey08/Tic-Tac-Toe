let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgpara = document.querySelector("#msg");

const usrscrpara = document.querySelector("#user-score");
const compscrpara = document.querySelector("#comp-score");


const  genComputerChoice = () => {
       // rock , paper, scissor
       const option = ["rock" , "paper" , "scissor"];
       const RandIdx =  Math.floor(Math.random() * 3);
       return option[RandIdx];
}

const drawGame = () => {
    msg.innerText = "Game was draw. Play again."
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin , userChoice , compChoice) => {
    if (userWin) {
        userScore++;
        usrscrpara.innerText = userScore;
        msg.innerText = `You win!, your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else { 
        compScore++
        compscrpara.innerText = compScore;
        msg.innerText = `You lose, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    
    // generate compu choice
    const compChoice = genComputerChoice();
    

    if(userChoice === compChoice){
        //Draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
             userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper") {
            userWin = compChoice === " scissor" ? false:true;
        } else {
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin, userChoice , compChoice); 
    }
}

choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});