let humanScore = 0;
let computerScore = 0;




function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;

    if (random == 1)  return "rock";
    if (random == 2)  return "paper";
    if (random == 3)  return "scissors";
}

function getHumanChoice() {
    let userInput = prompt("Enter Rock,Paper or Scissors : "); 
    if (!userInput) return "";
    return userInput.toLowerCase();
    
}




function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log("You won! Rock beats Scissors");
        humanScore++;
    }
    if (humanChoice == 'rock' && computerChoice == 'paper') {
        console.log("You lost! paper beats rock");
        computerScore++;
    }
    if (humanChoice == 'rock' && computerChoice == 'rock') {
        console.log("Tie! Both choosed Rock");
    }
    if (humanChoice == 'paper' && computerChoice == 'scissors') {
        console.log("You lost! Scissors beats Paper");
        computerScore++;
    }
    if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log("You Won! Paper beats Rock");
        humanScore++;
    }
    if (humanChoice == 'paper' && computerChoice == 'paper') {
        console.log("Tie! Both choosed Paper");
    }
    if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log("You Won!  Scissors beats Paper");
        humanScore++;
    }
    if (humanChoice == 'scissors' && computerChoice == 'rock') {
        console.log("You Lost!  Rock beats Scissors");
        computerScore++;
    }
    if (humanChoice == 'scissors' && computerChoice == 'scissors') {
        console.log("Tie! Both choosed Scissors ");
    }

}


function playGame() {
    for (let i = 0; i < 5; i++){

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
    }

    if (humanScore > computerScore) {
        alert("Wohoo..🎉 YOU WON THE ROUND 🥳"); 
    }
    else if (humanScore < computerScore) {
        alert("YOU LOST 🥺, Better luck Next Time");
    }
    else {
        alert("ITS A TIE 🎊");
    }
}

playGame();
