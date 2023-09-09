let first;
let second;
let operator; 
let isFirstNumEntered;
let isSecondNumEntered;

function add(first, second) {
    return parseInt(first) + parseInt(second);
}

function subtract(first, second) {
    return parseInt(first) - parseInt(second);
} 

function divide(first, second) {
    return first / second;
} 

function multiply(first, second) {
    return first * second;
} 

function operate(first, second, operator) {
    if (operator === 'plus') {
        return add(first, second);
    } else if (operator === 'minus') {
        return subtract(first, second);
    } else if (operator === 'divide') {
        return divide(first, second);
    } else if (operator === 'multiply') {
        return multiply(first, second);
    }
}

function convertOperand(id) {
    operatorsList = {
        'plus': '+',
        'minus': '-',
        'divide': '/',
        'multiply': '×',
    }

    return operatorsList[id];
}

function convertIdToNumbers(id) {
    listOfNumbers = {
        'one': 1, 
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9,
        'zero': 0,    
    }

    console.log('inside convIdToNums');
    console.log(listOfNumbers[id]);
    return listOfNumbers[id];
}

function collectNumbers(id) {

    if(isFirstNumEntered) {
        let output = document.getElementById('out');
        let secondNum = convertIdToNumbers(id)
        second = secondNum;
        output.append(secondNum); 
        console.log('first num' + first);
        console.log('second num' + second);
        isSecondNumEntered = true;
        console.log('operator res');
        let res = operate(first, second, operator);
        appendRes(res);
        console.log(res);
        return
    }

    console.log(id)
    let output = document.getElementById('out');
    let firstNum = convertIdToNumbers(id);
    output.append(firstNum);
}


function appendRes(res) {
    let resDisplay = document.getElementById('res');
    resDisplay.innerHTML = res; 
}

function clearOutput() {
    let output = document.getElementById('out');
    let resDisplay = document.getElementById('res');
    console.log('inside clear')
    resDisplay.innerHTML = '';
    output.innerHTML = '';
    isFirstNumEntered = false;
    isSecondNumEntered = false;
}

function clearSingleOutput() {
    let output = document.getElementById('out').innerHTML;
    let outputHolder = [...output];
    outputHolder.pop();
    document.getElementById('out').innerHTML = outputHolder.join(''); 
}

function triggerOperate(id) {
    console.log('inside trigger');
    let output = document.getElementById('out');
    first = output.innerHTML;
    isFirstNumEntered = true;
    operator = id;
    output.append(convertOperand(id));
    console.log(first);
}