var userChoice = prompt("Do you choose rock, paper or scissors?Spelling does matter!");
var computerChoice = Math.random();

//console.log(computerChoice)

if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}

//life's about choices

function compare(ch1, ch2) {
	if (ch1 === ch2) {
		return "Its a tie!";
	}
	if (ch1 === "rock") {
		if (ch2 === "scissors") {
			return "rock wins";
		} else {
			return "paper wins";
		}
	}
	if (ch1 === "paper") {
		if(ch2 === "rock") {
			return "paper wins";
		} else {
			return "scissor wins"
		}
	}
	if (ch1 === "scissor") {
		if (ch2 === "rock") {
			return "rock wins";
		} else {
			return "paper wins";
		}
	}
}
console.log(compare(userChoice, computerChoice))