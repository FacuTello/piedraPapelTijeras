function getComputerChoice() {
	const choices = ["piedra", "papel", "tijera"];
	const randomIndex = Math.floor(Math.random() * choices.length);
	return choices[randomIndex];
};

let playerScore = 0;
let computerScore = 0;

function oneRound(playerSelection, computerSelection) {
	computerSelection = getComputerChoice();
	if (playerSelection === "piedra" && computerSelection === "tijera" || playerSelection === "papel" && computerSelection === "piedra" ||
		playerSelection === "tijera" && computerSelection === "papel") {
		console.log("Ganaste! Elegiste " + playerSelection + " y tu oponente " + computerSelection);
		playerScore += 1;
	} else if (playerSelection === "piedra" && computerSelection === "papel" || playerSelection === "papel" && computerSelection === "tijera" ||
		playerSelection === "tijera" && computerSelection === "piedra") {
		console.log("Uhh! Perdiste. Tu oponente eligio " + computerSelection + " y tu " + playerSelection);
		computerScore += 1; 
	} else {
		console.log("Empataron! Ambos eligieron " + playerSelection);
	}
};

function game() {
	for (let i = 0; i < 5; i++) {
		playerSelection = prompt("Eliges Piedra, Papel, o Tijera?");
		computerSelection = getComputerChoice();
		oneRound(playerSelection, computerSelection);
	}

	if (playerScore > computerScore) {
		console.log("Muy bien! Ganaste " + playerScore + " a " + computerScore);
	} else if (computerScore > playerScore) {
		console.log("Uhh! Perdiste " + computerScore + " a " + playerScore);
	} else {
		console.log("Empataron " + playerScore + " a " + computerScore + " intentalo otra vez!");
	}
};

const piedra = document.getElementById('piedra');
const papel = document.getElementById('papel');
const tijera = document.getElementById('tijera');

function clickPiedra() {
	oneRound("piedra", getComputerChoice());
  }
  
  function clickPapel() {
	oneRound("papel", getComputerChoice());
  }
  
  function clickTijera() {
	oneRound("tijera", getComputerChoice());
  }
  
  piedra.addEventListener('click', clickPiedra);
  papel.addEventListener('click', clickPapel);
  tijera.addEventListener('click', clickTijera);


