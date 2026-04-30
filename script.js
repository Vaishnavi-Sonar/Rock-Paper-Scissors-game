let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice =  () => {
    const options = ["rock", "paper", "scissors"];
    const randInx = Math.floor(Math.random() * 3);
    return options[randInx];
}
const drawGame = () => {
    // console.log("Game was Draw!")
    msg.innerHTML = "Game was Draw! Try Again.";
    msg.style.backgroundColor = "black"
}
const showWinner = (userwin, userChoice, compChoice) => {
    if(userwin){
        userScore++
        userScorePara.innerHTML = userScore;
        // console.log("YOU WIN!");
        msg.innerHTML = `YOU WIN!  : Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    } else{
        compScore++
        compScorePara.innerHTML = compScore;
        // console.log("YOU LOSE!");
        msg.innerHTML = `YOU LOSE!  : ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);
    //generate computer choice -> modular
    const compChoice = genComputerChoice();
    console.log("Comp Choice = ", compChoice);

    if (userChoice === compChoice){
        //draw game
        drawGame();
    } else {
        let userwin = true;
        if(userChoice === "rock"){
            //paper, scissors
            userwin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //scissors, rock
            userwin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin, userChoice, compChoice);
    }
    
}

choices.forEach((choice) => {
    choice.addEventListener(("click"), () => {
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was clicked", userChoice);
        choice.style.opacity = "0.5"
        setTimeout(() => {
            choice.style.opacity = "1"
        }, 300);

        playGame(userChoice);
    });
});