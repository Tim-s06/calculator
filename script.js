let numberOne = 0;
let numberTwo = 0;
let operator = "";
function add(a,b) {
    return a+b;
}
function subtract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    if(b === 0) {
        return "ERROR"
    }
    return a/b;
}
function operate(firstNum, secondNum, operator) {
    if(operator == "+") {
        add(firstNum,secondNum);
    }
    if(operator == "*") {
        multiply(firstNum,secondNum);
    }
    if(operator == "-") {
        subtract(firstNum,secondNum);
    }
    if(operator == "/") {
        divide(firstNum, secondNum);
    }
}