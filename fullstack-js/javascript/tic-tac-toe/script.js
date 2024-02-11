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

let clickCount = 0;

function clickCounter() {
    clickCount++    
}

function insertSymbol() {
    if(clickCount % 2 === 0) {
        let symbolO = document.createTextNode('O')
        return symbolO; 
    }

    if(clickCount % 2 !== 0) {
        let symbolX = document.createTextNode('X')
        return symbolX; 
    }

}

document.getElementById('1').addEventListener("click",function(){
    console.log('clicked')
    clickCounter();
    let symbol = insertSymbol();
    document.getElementById('1').appendChild(symbol)
 })

document.getElementById('2').addEventListener("click",function(){
    console.log('clicked')
    console.log('clicked')
    clickCounter();
    let symbol = insertSymbol();
    document.getElementById('2').appendChild(symbol)
 })

document.getElementById('3').addEventListener("click",function(){
    console.log('clicked')
    clickCounter();
    let symbol = insertSymbol();
    document.getElementById('3').appendChild(symbol)
})

document.getElementById('4').addEventListener("click",function(){
    console.log('clicked')
    clickCounter();
    let symbol = insertSymbol();
    document.getElementById('4').appendChild(symbol)
})

document.getElementById('5').addEventListener("click",function(){
    console.log('clicked')
    clickCounter();
    let symbol = insertSymbol();
    document.getElementById('5').appendChild(symbol)
})

document.getElementById('6').addEventListener("click",function(){
    console.log('clicked')
    clickCounter();
    let symbol = insertSymbol();
    document.getElementById('6').appendChild(symbol)
})

document.getElementById('7').addEventListener("click",function(){
    console.log('clicked')
    clickCounter();
    let symbol = insertSymbol();
    document.getElementById('7').appendChild(symbol)
})

document.getElementById('8').addEventListener("click",function(){
    console.log('clicked')
    clickCounter();
    let symbol = insertSymbol();
    document.getElementById('8').appendChild(symbol)
})

document.getElementById('9').addEventListener("click",function(){
    console.log('clicked')
    clickCounter();
    let symbol = insertSymbol();
    document.getElementById('9').appendChild(symbol)
})