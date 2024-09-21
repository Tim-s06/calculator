let numberOne = 0;
let numberTwo = 0;
let operator = "";
let displayValue = 0;
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
let display = document.getElementById("display");
display.textContent = displayValue;
let buttons = document.getElementsByClassName("numbers");
let buttonsArray = Array.from(buttons);

buttonsArray.forEach((btn) => {
    btn.addEventListener("click", () => {
        let number = btn.id;
        number = parseInt(number);
        displayValue = number;
        display.textContent = displayValue;
    }); 
});