// tictactoe logic
// 3x3 grid
// 3 in a row to win 
// multidimensional array?
// winnings codes

console.log('hello world')

let correctArray = [1,2,3];
let reversedCorrectArray = [3,2,1];
let incorrectArray = [3,1,2];

console.log(reversedCorrectArray, 'pre-reverse')

let fem = [...reversedCorrectArray].reverse()

console.log(fem)


// get user values 


function isWinner(playerArray) {

    const winningArrays = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]

    winningArrays.forEach((i) => {
        if(JSON.stringify(i) === JSON.stringify(playerArray)) {
            console.log('yeet');
        }

        let reversedPlayerArray = playerArray;
        reversedPlayerArray.reverse();

        if(JSON.stringify(i) === JSON.stringify(reversedPlayerArray)) {
            console.log('reversed yeet');
        }
    })
}

isWinner(reversedCorrectArray);

var elementIsClicked = false; // declare the variable that tracks the state
function clickHandler(){ // declare a function that updates the state
  elementIsClicked = true;
  console.log('clicked')
}

var element = document.getElementById('1'); // grab a reference to your element
element.addEventListener('click', clickHandler); // associate the function above with the click event