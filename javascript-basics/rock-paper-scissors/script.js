const rock = 0;
const paper = 1;
const scissors = 2;

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}


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
     let indexOfRes = choices.indexOf(sanitise);

     return indexOfRes;
}

function playRound(playerSelection, computerSelection) {
     let numPlayerSelect = humanSelectionConversionToNumericalValue(playerSelection)

     return winner(numPlayerSelect, computerSelection);
}

function clearBox(elementID){
     document.getElementById(elementID).innerHTML = "";
 }

let playerSelect;

//TO REFACTOR eventually
function reply_click() {
     clearBox('log');
     let randomNumberChecker = Math.random()
     let playerSelect = String(this.id)
     const computerSelection = getComputerChoice();
     
     let res = playRound(playerSelect, computerSelection);
     document.getElementById('log').innerHTML += res + " " + randomNumberChecker;
}



document.getElementById('rock').onclick = reply_click
document.getElementById('paper').onclick = reply_click
document.getElementById('scissors').onclick = reply_click
