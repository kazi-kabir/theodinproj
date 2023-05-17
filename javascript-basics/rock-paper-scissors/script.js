function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return Math.floor((Math.random()*choices.length));
}

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
     console.log("human selection in numerical value");
     console.log(res)
     return indexOfRes;
}

function playRound(playerSelection, computerSelection) {
     console.log('ROUND PLAYED')
     console.log('comp select')
     console.log(computerSelection)
     console.log('hooman select before conversion')
     console.log(playerSelection)
     let numPlayerSelect = humanSelectionConversionToNumericalValue(playerSelection)
     return winner(numPlayerSelect, computerSelection);
}

let playerSelect;
function reply_click() {
     document.getElementById('log').innerHTML += '<br>';
     console.log('this id')
     console.log(this.id)
     let playerSelect = String(this.id)
     const computerSelection = getComputerChoice();
     let fooeybar = playRound(playerSelect, computerSelection)
     console.log(fooeybar);
     document.getElementById('log').innerHTML += '<br>' + fooeybar;
     
}

document.getElementById('rock').onclick = reply_click
document.getElementById('paper').onclick = reply_click
document.getElementById('scissors').onclick = reply_click
