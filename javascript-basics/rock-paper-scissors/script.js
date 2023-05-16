
/*
Your game is going to play against the computer, 
so begin with a function called getComputerChoice that 
will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
We’ll use this function in the game to make the computer’s play. 
Tip: use the console to make sure this is returning the expected output before moving to the next step!
*/

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor((Math.random()*choices.length))];
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
   computerSelection = getComputerChoice();
   if(playerSelection.toLowerCase() === computerSelection) {
        return "it's a tie"
   }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));