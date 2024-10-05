function getComputerChoice() {
	let choice = Math.floor(Math.random() * 100);
	if (choice > 66) {
		return "Rock";
	} else if (choice < 66 && choice > 33) {
		return "Paper";
	} else {
		return "Scissors";
	}
}

console.log(getComputerChoice());
