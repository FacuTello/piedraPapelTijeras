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
			resultado.innerText = "Ganaste! Elegiste " + playerSelection + " y tu oponente " + computerSelection;
			playerScore += 1;
		    puntaje.innerText = "El partido va " + playerScore + " a " + computerScore;
			resultadoFinal.innerText = "";
	} else if (playerSelection === "piedra" && computerSelection === "papel" || playerSelection === "papel" && computerSelection === "tijera" ||
		playerSelection === "tijera" && computerSelection === "piedra") {
			resultado.innerText = "Uhh! Perdiste. Tu oponente eligio " + computerSelection + " y tu " + playerSelection;
			computerScore += 1; 
            puntaje.innerText = "El partido va " + playerScore + " a " + computerScore;
			resultadoFinal.innerText = "";
	} else {
		resultado.innerText = "Empataron! Ambos eligieron " + playerSelection;
		puntaje.innerText = "El partido va " + playerScore + " a " + computerScore;
		resultadoFinal.innerText = "";
	
};
       if (playerScore === 5){
		resultadoFinal.innerText = "Muy bien Ganaste!!, intentalo otra vez!"; 
		playerScore = 0;
		computerScore = 0;
		
	   }else if (computerScore === 5) {
		resultadoFinal.innerText = "Perdiste!, intentalo otra vez!";
		playerScore = 0;
		computerScore = 0;
		};
};

const piedra = document.getElementById('piedra');
const papel = document.getElementById('papel');
const tijera = document.getElementById('tijera');

 
piedra.addEventListener('click', clickPiedra);
papel.addEventListener('click', clickPapel);
tijera.addEventListener('click', clickTijera);

function clickPiedra() {
oneRound("piedra", getComputerChoice());
  };
  
  function clickPapel() {
	oneRound("papel", getComputerChoice());
  };
  
  function clickTijera() {
	oneRound("tijera", getComputerChoice());
  };

  
  piedra.addEventListener('click', clickPiedra);
  papel.addEventListener('click', clickPapel);
  tijera.addEventListener('click', clickTijera);

  const divUnaRonda = document.getElementById('ronda');
  const resultado = document.createElement('p');
  divUnaRonda.appendChild(resultado);
  resultado.style.fontFamily = "Space Mono";
  resultado.style.textAlign = "center";
  resultado.style.marginTop = "40px";

  const divJuego = document.getElementById('juego');
  const puntaje = document.createElement('p');
  divJuego.appendChild(puntaje);
  puntaje.style.fontFamily = "Space Mono";
  puntaje.style.textAlign = "center";
  puntaje.style.marginTop = "40px";
  const divResultado = document.getElementById('resultado');
  let resultadoFinal = document.createElement('p');
  divResultado.appendChild(resultadoFinal);
  resultadoFinal.style.fontFamily = "Space Mono";
  resultadoFinal.style.textAlign = "center";
  resultadoFinal.style.marginTop = "40px";

  function changeStyles(){
	resultadoFinal.style.fontSize = '60px';
	puntaje.style.fontSize = '60px';
  };

  window.addEventListener('resize', function() {
	if (window.matchMedia('(min-width: 600px)').matches) {
	  changeStyles();
	}
});




  


  


