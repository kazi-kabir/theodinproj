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

// rules for func
// play 5 times, whoever wins is winner
// store outside func, because the variables reset 
let human = 0;
let computer = 0;
let gamesPlayed = 0;

function trackWinner(res) {     
     console.log('inside trackwinner')
     gamesPlayed++;

     if (res === "computer wins") {
          computer++
     }

     if (res === 'human wins') {
          human++;
     }

     if(gamesPlayed === 5 && human === computer) {
          console.log('draw round')
     }

     if (gamesPlayed === 5) {
          gamesPlayed = 0;
          console.log('winner of the round');
          let res = human > computer ? 'human wins round' : 'computer wins round'
          console.log(res + ' res')
          document.getElementById('scoreLogger').innerHTML += res;
     }

     console.log(gamesPlayed)
     
}

let playerSelect;

//TO REFACTOR eventually
function reply_click() {
     clearBox('log');
     clearBox('scoreLogger');
     let playerSelect = String(this.id)
     const computerSelection = getComputerChoice();
     
     let res = playRound(playerSelect, computerSelection);
     trackWinner(res);
     document.getElementById('log').innerHTML += res;
}

document.getElementById('rock').onclick = reply_click
document.getElementById('paper').onclick = reply_click
document.getElementById('scissors').onclick = reply_click
