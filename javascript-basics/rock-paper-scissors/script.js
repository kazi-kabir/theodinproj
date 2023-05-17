const rock = 0;
const paper = 1;
const scissors = 2;

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return Math.floor((Math.random()*choices.length));
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
     let res = choices.includes(humanInput.toLowerCase());
     let indexOfRes = choices.indexOf(sanitise);
     return indexOfRes;
}

function playRound(playerSelection, computerSelection) {
     console.log(computerSelection)
     console.log(playerSelection)
     let numPlayerSelect = humanSelectionConversionToNumericalValue(playerSelection)
     return winner(numPlayerSelect, computerSelection);
}

let playerSelect;
function reply_click() {
     clearBox('log');
     let randomNumberChecker = Math.random()
     let playerSelect = String(this.id)
     const computerSelection = getComputerChoice();
     let fooeybar = playRound(playerSelect, computerSelection)
     console.log(fooeybar);
     document.getElementById('log').innerHTML += fooeybar + " " + randomNumberChecker;
}

function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}

document.getElementById('rock').onclick = reply_click
document.getElementById('paper').onclick = reply_click
document.getElementById('scissors').onclick = reply_click
