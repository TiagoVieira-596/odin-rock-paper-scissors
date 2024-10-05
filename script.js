// initialize scores
let humanScore = 0;
let computerScore = 0;

// randomly choose the cpu play
function getComputerChoice() {
	let cpuChoice = Math.floor(Math.random() * 100);
	if (cpuChoice > 66) {
		return "ROCK";
	} else if (cpuChoice < 66 && cpuChoice > 33) {
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

function playRound(cpuChoice, humanChoice) {
	if (cpuChoice == "ROCK" && humanChoice == "SCISSORS") {
		console.log("You lose! Rock beats scissors!");
		computerScore += 1;
	} else if (cpuChoice == "PAPER" && humanChoice == "ROCK") {
		console.log("You lose! PAPER beats rock!");
		computerScore += 1;
	} else if (cpuChoice == "SCISSORS" && humanChoice == "PAPER") {
		console.log("You lose! SCISSORS beats paper!");
		computerScore += 1;
	} else if (humanChoice == "ROCK" && cpuChoice == "SCISSORS") {
		console.log("You Win! Rock beats scissors");
		humanScore += 1;
	} else if (humanChoice == "PAPER" && cpuChoice == "SCISSORS") {
		console.log("You Win! Paper beats scissors");
		humanScore += 1;
	} else if (humanChoice == "SCISSORS" && cpuChoice == "PAPER") {
		console.log("You Win! Scissors beats paper");
		humanScore += 1;
	} else {
		console.log("That's a tie!");
	}
}
