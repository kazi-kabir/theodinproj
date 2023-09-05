function add(first, second) {
    return first + second;
}

function subtract(first, second) {
    return first - second;
} 

function divide(first, second) {
    return first / second;
} 

function multiply(first, second) {
    return first * second;
} 

let res = add(1, 2);
console.log(res);

let first;
let second;
let operator; 
let firstNumEntered;
let secondNumEntered;

function operate(first, second, operator) {
    if (operator === '+') {
        return add(first, second);
    } else if (operator === '-') {
        return subtract(first, second);
    } else if (operator === '/') {
        return divide(first, second);
    } else if (operator === '*') {
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


function gatherFirstNumber(id) {
    if(firstNumEntered) {
        console.log(id);
        let output = document.getElementById('out');
        let secondNum = convertIdToNumbers(id)

        console.log('i am second num')
        output.append(secondNum); 
        secondNumEntered = true;
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
    // add some css to output div for consistent spacing
    console.log('inside clear')
    output.innerHTML = '';
}

function triggerOperate(id) {
    if(secondNumEntered) {
        let res = operate(first, second, id);
        output = document.getElementById('out');
        
        console.log(res);
        output.innerHTML = res;
    }

    let firstNum = document.getElementById('out').innerHTML
    console.log('inside triggerOperate');
    console.log("operand" + convertOperand(id))
    console.log(firstNum);    
    firstNumEntered = true;
}