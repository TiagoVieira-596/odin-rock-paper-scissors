function getComputerChoice() {
	let cpuChoice = Math.floor(Math.random() * 100);
	if (cpuChoice > 66) {
		return "Rock";
	} else if (cpuChoice < 66 && cpuChoice > 33) {
		return "Paper";
	} else {
		return "Scissors";
	}
}

function getHumanChoice() {
	let humanChoice = prompt("What will you play?");
	if (
		humanChoice.toUpperCase() != "ROCK" &&
		humanChoice.toUpperCase() != "PAPER" &&
		humanChoice.toUpperCase() != "SCISSORS"
	) {
		getHumanChoice();
	} else {
		return humanChoice;
	}
}
