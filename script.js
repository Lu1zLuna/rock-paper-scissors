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

        const resultsContainer = document.querySelector(".container#results");

        // Human wins the round
        if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")
        ) {
            const winMessage = document.createElement("p");
            winMessage.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            resultsContainer.appendChild(winMessage);

            humanScore++;
        }
        // Computer win the round
        else if (
            (computerChoice === "Rock" && humanChoice === "Scissors") ||
            (computerChoice === "Paper" && humanChoice === "Rock") ||
            (computerChoice === "Scissors" && humanChoice === "Paper")
        ) {
            const loseMessage = document.createElement("p");
            loseMessage.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            resultsContainer.appendChild(loseMessage);

            computerScore++;
        }
        // In case of a tie, plays a new round
        else if (computerChoice == humanChoice) {
            const tieMessage = document.createElement("p");
            tieMessage.textContent = "It's a tie! You both chose " +
                humanChoice + " for this round." +
                "\nPlay again for a tie-break ;D";
            resultsContainer.appendChild(tieMessage);
        }

        let scoreMessage = "The current score is: " + humanScore +
            " (to you) X " + computerScore + " (to the computer).";
        const runningScore = document.createElement("p");
        runningScore.textContent = scoreMessage;
        resultsContainer.appendChild(runningScore);

        const lineBreak = document.createElement("p");
        lineBreak.textContent = "---------------------------------------------";
        resultsContainer.appendChild(lineBreak);
    }

    function showGameResult() {
        const body = document.querySelector("body");

        const finalMessage = document.createElement("p");

        if (humanScore > computerScore) {
            finalMessage.textContent = `Congratulations! You won the game!
                The final score is: ${humanScore} to ${computerScore}`;
        }
        else if (computerScore > humanScore) {
            finalMessage.textContent = `Oh no! You lost the game. The final score is: 
            ${humanScore} to ${computerScore}`;
        }
        else {
            finalMessage.textContent = "Good game! You tied! Challenge " +
                "the computer again for a tiebreak! ;)\n" +
                "The final score is: " + humanScore + " to " + computerScore;
        }

        body.appendChild(finalMessage);
    }

    // Create buttons for player to interact with

    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");

    rockButton.addEventListener("click", function () {
        computerSelection = getComputerChoice();
        if (humanScore < 5 && computerScore < 5) {
            playRound(scissorsButton.textContent, computerSelection);
        }
        else if (humanScore >= 5 || computerScore >= 5) {
            return showGameResult();
        }
    });

    paperButton.addEventListener("click", function () {
        computerSelection = getComputerChoice();
        if (humanScore < 5 && computerScore < 5) {
            playRound(scissorsButton.textContent, computerSelection);
        }
        else if (humanScore >= 5 || computerScore >= 5) {
            return showGameResult();
        }
    });

    scissorsButton.addEventListener("click", function () {
        computerSelection = getComputerChoice();
        if (humanScore < 5 && computerScore < 5) {
            playRound(scissorsButton.textContent, computerSelection);
        }
        else if (humanScore >= 5 || computerScore >= 5) {
            return showGameResult();
        }
    });
}

playGame();