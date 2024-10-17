// create event listeners for each button
const divChoices = document.querySelector(".choices");
divChoices.addEventListener("click", (e) => {
	let target = e.target;

	switch (target.id) {
		case "rock":
			playRound(getComputerChoice(), "ROCK");
			break;
		case "paper":
			playRound(getComputerChoice(), "PAPER");
			break;
		case "scissors":
			playRound(getComputerChoice(), "SCISSORS");
			break;
	}
});

// initialize scores
let humanScore = 0;
let computerScore = 0;

// randomly chooses the cpu choice
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

// plays a round of rock paper scissors and adds to the winner score
function playRound(cpuChoice, humanChoice) {
	// erase previous winner display
	let winnerDisplay = document.querySelector(".winner");
	if (winnerDisplay.firstChild != null) {
		winnerDisplay.removeChild(winnerDisplay.firstChild);
	}

	// get the p that displays the score
	let cpuScoreDisplay = document.querySelector(".computerScore");
	let humanScoreDisplay = document.querySelector(".humanScore");

	humanScoreDisplay.textContent = `Your Score = ${humanScore}`;
	cpuScoreDisplay.textContent = `Computer Score = ${computerScore}`;

	// check the winner of that round, update the scores and the page
	if (cpuChoice == "ROCK" && humanChoice == "SCISSORS") {
		alert("You lose! Rock beats scissors!");
		computerScore += 1;
		cpuScoreDisplay.textContent = `Computer Score = ${computerScore}`;
	} else if (cpuChoice == "PAPER" && humanChoice == "ROCK") {
		alert("You lose! Paper beats rock!");
		computerScore += 1;
		cpuScoreDisplay.textContent = `Computer Score = ${computerScore}`;
	} else if (cpuChoice == "SCISSORS" && humanChoice == "PAPER") {
		alert("You lose! Scissor beats paper!");
		computerScore += 1;
		cpuScoreDisplay.textContent = `Computer Score = ${computerScore}`;
	} else if (humanChoice == "ROCK" && cpuChoice == "SCISSORS") {
		alert("You Win! Rock beats scissors");
		humanScore += 1;
		humanScoreDisplay.textContent = `Your Score = ${humanScore}`;
	} else if (humanChoice == "PAPER" && cpuChoice == "SCISSORS") {
		alert("You Win! Paper beats scissors");
		humanScore += 1;
		humanScoreDisplay.textContent = `Your Score = ${humanScore}`;
	} else if (humanChoice == "SCISSORS" && cpuChoice == "PAPER") {
		alert("You Win! Scissors beats paper");
		humanScore += 1;
		humanScoreDisplay.textContent = `Your Score = ${humanScore}`;
	} else {
		alert("That's a tie!");
	}

	// check if someone won and display the winner
	if (humanScore >= 5 || computerScore >= 5) {
		displayWinner();
	}
}

// display the winner of a number of rounds
function displayWinner() {
	let roundWinnerDisplay = document.querySelector(".winner");
	let winner = document.createElement("h1");

	if (humanScore > computerScore) {
		winner.textContent = "YOU WIN!!!";
		roundWinnerDisplay.appendChild(winner);
		humanScore = 0;
		computerScore = 0;
	} else if (humanScore < computerScore) {
		winner.textContent = "YOU LOSE.";
		roundWinnerDisplay.appendChild(winner);
		humanScore = 0;
		computerScore = 0;
	} else {
		winner.textContent = "IT'S A TIE!";
		roundWinnerDisplay.appendChild(winner);
		humanScore = 0;
		computerScore = 0;
	}
}
