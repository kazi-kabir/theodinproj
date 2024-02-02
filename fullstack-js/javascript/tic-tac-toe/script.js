// tictactoe logic
// 3x3 grid
// 3 in a row to win 
// multidimensional array?
// winnings codes

console.log('hello world')

let correctArray = [123];
let reversedCorrectArray = [321];
let incorrectArray = [312];


function isWinner(playerArray) {

    const winningArrays = [[123], [456], [789], [147], [258], [369], [159], [357]]

    winningArrays.forEach((i) => {
        console.log(i)
        if(JSON.stringify(i) === JSON.stringify(playerArray)) {
            console.log('yeet')
        }

        let reversedPlayerArray = playerArray.reverse();

        console.log(reversedPlayerArray)

        if(JSON.stringify(i) === JSON.stringify(reversedPlayerArray)) {
            console.log('reversed yeet')
        }
    })

}

isWinner(correctArray)