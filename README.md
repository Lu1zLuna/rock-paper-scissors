# rock-paper-scissors
The Odin Project's first project using Javascript. 

It's a simple rock paper scissors game that can be played through the console.

## The plan:

- [x] Create a repository
- [x] Adds the files to the repository
- [x] Read the Assignment
- [x] Create a pseudocode
- [x] Start to write the code in steps
	- [x] Write the logic to get the computer choice
	- [x] Write the logic to get the human choice
		- [x] make user input case-insensitive
	- [x] Declare the players score variables
	- [x] Write the logic to play a single round
	- [x] Write the logic to play the entire game
- [x] Test the code

### Expected result:

The program should input a string from the user, with three possible values: "Rock", "Paper" or "Scissor".

Then randomly choose one between these 3 values for the computer.

So it will output a string in console showing the winner of the game.

A Full game will be a best of 5 rounds, the player with most scores, wins the game.

### Pseudocode

```
FUNCTION getComputerChoice
	RETURN a random string between 3 values: “rock”, “paper” or “scissors”;
ENDFUNC

FUNCTION getHumanChoice prompt's user for a string
	If input is valid, make it case-insensitive;
	RETURN one of the valid 3 values: “rock”, “paper” or “scissors”;
ENDFUNC

Create variables to store human score and computer score

FUNCTION playRound (receives humanChoice and computerChoice as arguments)
	Plays a round then shows the winner on console;
	Call playRound recursively if round result in a tie;
	Increment humanScore or computerScore base on the round winner;
ENDFUNC

FUNCTION playGame
	calls PlayRound 5 times
ENDFUNC
```