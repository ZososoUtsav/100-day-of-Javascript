// declaring variable to roll the dice 
let playerOne = prompt('ROLL THE DIE AND ENTER THE RESULT'); 
let playerTwo = prompt('ROLL THE DIE AND ENTER THE RESULT'); 
if (playerOne > playerTwo){
    alert('player one goes first'); 
}
else if (playerTwo > playerOne){
    alert('player two goes first'); 
}
else{
    alert('Please play the game again'); 
}