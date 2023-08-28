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
            
