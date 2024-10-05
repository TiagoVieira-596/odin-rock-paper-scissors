// randomly choose the cpu play
function getComputerChoice() {
	let cpuChoice = Math.floor(Math.random() * 3);
	if (cpuChoice == 0) {
		return "ROCK";
	} else if (cpuChoice == 1) {
		return "PAPER";
	} else {
		return "SCISSORS";
	}
}

// prompt the player's choice
function getHumanChoice() {
	let humanChoice = prompt("What will you play?").toUpperCase();
	if (
		humanChoice != "ROCK" &&
		humanChoice != "PAPER" &&
		humanChoice != "SCISSORS"
	) {
		getHumanChoice();
	} else {
		return humanChoice;
	}
}

function playGame() {
	// initialize scores
	let humanScore = 0;
	let computerScore = 0;

	// play a round of rock paper scissors and add to the winner score
	function playRound(cpuChoice, humanChoice) {
		if (cpuChoice == "ROCK" && humanChoice == "SCISSORS") {
			alert("You lose! Rock beats scissors!");
			computerScore += 1;
		} else if (cpuChoice == "PAPER" && humanChoice == "ROCK") {
			alert("You lose! Paper beats rock!");
			computerScore += 1;
		} else if (cpuChoice == "SCISSORS" && humanChoice == "PAPER") {
			alert("You lose! Scissor beats paper!");
			computerScore += 1;
		} else if (humanChoice == "ROCK" && cpuChoice == "SCISSORS") {
			alert("You Win! Rock beats scissors");
			humanScore += 1;
		} else if (humanChoice == "PAPER" && cpuChoice == "SCISSORS") {
			alert("You Win! Paper beats scissors");
			humanScore += 1;
		} else if (humanChoice == "SCISSORS" && cpuChoice == "PAPER") {
			alert("You Win! Scissors beats paper");
			humanScore += 1;
		} else {
			alert("That's a tie!");
		}
	}
	for (i = 0; i < 5; i++) {
		// get the user and cpu selections to play the game 5 times
		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();
		playRound(computerSelection, humanSelection);
	}
	if (humanScore > computerScore) {
		alert(
			`Your Score: ${humanScore}\nComputer Score: ${computerScore}\nYou Won!!!`
		);
	} else if (humanScore < computerScore) {
		alert(
			`Your Score: ${humanScore}\nComputer Score: ${computerScore}\nYou Lost.`
		);
	} else {
		alert(
			`Your Score: ${humanScore}\nComputer Score: ${computerScore}\nIt's a Tie!`
		);
	}
}

playGame();
