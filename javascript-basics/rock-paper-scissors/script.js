
/*
Your game is going to play against the computer, 
so begin with a function called getComputerChoice that 
will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
We’ll use this function in the game to make the computer’s play. 
Tip: use the console to make sure this is returning the expected output before moving to the next step!
*/

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return Math.floor((Math.random()*choices.length));
}

console.log(getComputerChoice());

/*
tie
paper beats rock
rock beats scissors
scissors beats paper

def winner(p1, p2):
...   if (p1+1) % 3 == p2:
...     return "Player 2 won because their move is one greater than player 1"
...   elif p1 == p2:
...     return "It's a draw because both players played the same move"
...   else:
...     return "Player 1 wins because we know that it's not a draw and that player 2 didn't win"

*/

const rock = 0;
const paper = 1;
const scissors = 2;

function winner(human, computer) {
     if ((human+1) % 3 === computer) {
          return "computer wins"
     }

     if (human === computer) {
          return 'draw'
     }

     return 'human wins'
}

function humanSelectionConversionToNumericalValue(humanInput) {
     let sanitise = humanInput.toLowerCase()
     let choices = ['rock', 'paper', 'scissors'];

     let res = choices.includes(humanInput.toLowerCase());
     let indexOfRes = choices.indexOf(sanitise);
     console.log("index of res" + indexOfRes)
     
     console.log("RESSSSS")
     console.log(res)
     return indexOfRes;
}

humanSelectionConversionToNumericalValue('scissors');


function playRound(playerSelection, computerSelection) {
     console.log('ROUND PLAYED')
     console.log('comp select')
     console.log(computerSelection)
     console.log('hooman select')
     console.log(playerSelection)
     return winner(playerSelection, computerSelection);
}

var nameInput = document.getElementsByClassName()

const playerSelection = humanSelectionConversionToNumericalValue('rock')
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));