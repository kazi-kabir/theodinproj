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
    if(id === 'plus') {
        return '+';
    }

    if(id === 'minus') {
        return '-';
    }

    if (id === 'divide') {
        return '/';
    }

    if (id === 'multiply') {
        return '*';
    }

}

function convertIdToNumbers(id) {
    if(id === 'one') {
        return 1;
    }

    if(id === 'two') { 
        return 2;
    }

    if(id === 'three') { 
        return 3;
    }

    if(id === 'four') {
        return 4;
    }

    if(id === 'five') {
        return 5;
    }

    if(id === 'six') {
        return 6;
    }

    if(id === 'seven') {
        return 7;
    }

    if(id === 'eight') {

        return 8;
    }

    if(id === 'nine') {
        return 9;
    }

    if(id === 'zero') {
        return 0;
    }
}

function collectNumbers(id) {

    if(isFirstNumEntered) {
        let output = document.getElementById('out');
        // add some css to output div for consistent spacing
        let secondNum = convertIdToNumbers(id)
        second = secondNum;
        output.append(secondNum); 
        console.log('first num' + first);
        console.log('second num' + second);
        isSecondNumEntered = true;
        console.log('operator res');
        let res = operate(first, second, operator);
        console.log(res)
        return;
    }


    console.log(id)
    let output = document.getElementById('out');
    // add some css to output div for consistent spacing
    let firstNum = convertIdToNumbers(id)
    output.append(firstNum);
}


function clearOutput() {
    let output = document.getElementById('out');
    console.log('inside clear')
    output.innerHTML = '';
    isFirstNumEntered = false;
    isSecondNumEntered = false;
}

function triggerOperate(id) {
    console.log('inside trigger');
    let output = document.getElementById('out');
    first = output.innerHTML;
    isFirstNumEntered = true;
    operator = id;
    console.log(first);
}