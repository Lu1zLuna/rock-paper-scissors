// Randomly returns one of the following string values:
// “rock”, “paper” or “scissors”
function getComputerChoice() {
    let computerChoice = Math.random();

    if (computerChoice > 2 / 3) {
        return "Rock";
    }
    else if (computerChoice <= 2 / 3 && computerChoice >= 1 / 3) {
        return "Paper";
    }
    else if (computerChoice < 1 / 3) {
        return "Scissors";
    }
}

// Gets the player input
function getHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissors?");
    humanChoice = humanChoice.toLowerCase();

    // continues to prompt user if his choice is not between valid values
    let isHumanChoiceValid = VerifyHumanChoice(humanChoice);

    while (isHumanChoiceValid === -1) {
        humanChoice = prompt(
            'Please, choose between "rock", "paper" or "scissors":'
        );
        humanChoice = humanChoice.toLowerCase();
        isHumanChoiceValid = VerifyHumanChoice(humanChoice);
    }

    humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1);

    return humanChoice;

    // Returns the index of the array if choice is valid, or -1 if not
    function VerifyHumanChoice(humanChoice) {
        return ["rock", "paper", "scissors"].indexOf(humanChoice);;
    }
}

function playGame() {
    // Players scores
    let humanScore = 0;
    let computerScore = 0;

    let humanSelection;
    let computerSelection;

    // Plays a single round
    function playRound(humanChoice, computerChoice) {
        let winMessage = `You win! ${humanChoice} beats ${computerChoice}`;
        let loseMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
        let tieMessage = "It's a tie! You both chose ${humanChoice} for this round." +
            "\nPlay again for a tie-break ;D";

        // Human wins the round
        if (humanChoice === "Rock" && computerChoice === "Scissors") {
            humanScore++;
            console.log(winMessage);
        }
        else if (humanChoice === "Paper" && computerChoice === "Rock") {
            humanScore++;
            console.log(winMessage);
        }
        else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            humanScore++;
            console.log(winMessage);
        }
        // Computer win the round
        else if (computerChoice === "Rock" && humanChoice === "Scissors") {
            computerScore++;
            console.log(winMessage);
        }
        else if (computerChoice === "Paper" && humanChoice === "Rock") {
            computerScore++;
            console.log(loseMessage);
        }
        else if (computerChoice === "Scissors" && humanChoice === "Paper") {
            computerScore++;
            console.log(loseMessage);
        }
        // In case of a tie, plays a new round
        else if (computerChoice == humanChoice) {
            console.log(tieMessage);
        }
    }

    function showGameResult() {
        if (humanScore > computerScore) {
            console.log(`Congratulations! You won the game!
                    The final score is: ${humanScore} to ${computerScore}`);
        }
        else if (computerScore > humanScore) {
            console.log(
                `Oh no! You lost the game. The final score is: 
            ${humanScore} to ${computerScore}`
            );
        }
        else {
            console.log(`Good game! You tied! Challenge the computer again for a tiebreak! ;)
            The final score is: ${humanScore} to ${computerScore}`);
        }
    }

    // A game consists in 5 rounds
    // for (i = 1; i <= 5; i++) {
    //     humanSelection = getHumanChoice();
    //     computerSelection = getComputerChoice();

    //     playRound(humanSelection, computerSelection);
    // }

    const containerButton = document.querySelector("#container-button");

    const rockButton = document.createElement("button");
    rockButton.textContent = "Rock";

    const paperButton = document.createElement("button");
    paperButton.textContent = "Paper";

    const scissorsButton = document.createElement("button");
    scissorsButton.textContent = "Scissors";

    rockButton.addEventListener("click", function () {
        computerSelection = getComputerChoice();
        playRound(rockButton.textContent, computerSelection);
    });;

    paperButton.addEventListener("click", function () {
        computerSelection = getComputerChoice();
        playRound(paperButton.textContent, computerSelection);
    });;

    scissorsButton.addEventListener("click", function () {
        computerSelection = getComputerChoice();
        playRound(scissorsButton.textContent, computerSelection);
    });;

    containerButton.appendChild(rockButton);
    containerButton.appendChild(paperButton);
    containerButton.appendChild(scissorsButton);

    showGameResult();

}



playGame();