// Randomly returns one of the following string values: “rock”, “paper” or “scissors”
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

    // indexOf searches for 'humanChoice' in the array,
    // it returns the index of the array if found, or -1 if not
    while (["rock", "paper", "scissors"].indexOf(humanChoice) === -1) {
        humanChoice = prompt(
            'Please, choose between "rock", "paper" or "scissors":'
        );
    }

    humanChoice =
        humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
    return humanChoice;
}

function playGame() {
    // Players scores
    let humanScore = 0;
    let computerScore = 0;

    // Plays a single round
    function playRound(humanChoice, computerChoice) {
        let winMessage = `You win! ${humanChoice} beats ${computerChoice}`;
        let loseMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
        let tieMessage = `It's a tie! You both chose ${humanChoice} for this round.`;

        // Human wins the round
        if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")
        ) {
            humanScore++;
            console.log(winMessage);
        }
        // Computer win the round
        else if (
            (computerChoice === "Rock" && humanChoice === "Scissors") ||
            (computerChoice === "Paper" && humanChoice === "Rock") ||
            (computerChoice === "Scissors" && humanChoice === "Paper")
        ) {
            computerScore++;
            console.log(winMessage);
        }
        // In case of a tie
        else if (computerChoice == humanChoice) {
            console.log(tieMessage);

            humanSelection = getHumanChoice();
            computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
        }
    }

    let humanSelection;
    let computerSelection;

    // A game consists in 5 rounds
    for (i = 1; i <= 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`Congratulations! You won the game!
                    The final score is: ${humanScore} to ${computerScore}`);
    }
    else if (computerScore > humanScore) {
        console.log(
            `Oh no! You lost the game. The final score is: ${humanScore} to ${computerScore}`
        );
    }
    else {
        console.log(`Good game! You tied! Challenge the computer again for a tiebreak! ;)
            The final score is: ${humanScore} to ${computerScore}`);
    }
}

playGame();
