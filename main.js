/* ```js
[Put your JavaScript Code here!]
```*/



function getComputerChoice(){
    let computerChoice = (Math.floor(Math.random() * 3));
    if (computerChoice === 0){
        return "piedra";
    } else if ( computerChoice === 1){
        return "papel";
    } else{
        return "tijeras";
    }
    
}
let computerSelection = getComputerChoice();
function oneRound(playerSelection , computerSelection){
    
    if (playerSelection == "piedra" && computerSelection == "piedra"){
    console.log("ambos eligieron priedra. Es un empate");
   }else if (playerSelection == "piedra" && computerSelection == "papel"){
     console.log("Perdiste. El papel le gana a la piedra");
   }else if(playerSelection == "piedra" && computerSelection == "tijeras"){
     console.log("Ganaste. La piedra le gana a las tijeras");
   }  
} 



