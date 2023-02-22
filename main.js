
function getComputerChoice(){
    computerChoice = (Math.floor(Math.random() * 3));
    if (computerChoice === 0){
        console.log("piedra");
    } else if ( computerChoice === 1){
        console.log("papel");
    } else{
        console.log("tijeras");
    }
}

