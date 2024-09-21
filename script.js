let numberOne = null;
let numberTwo = null;
let operator = "";
let displayValue = "0";
let equalsClicked = false;
let displayReset = false;
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
        display.textContent = add(firstNum,secondNum);
        numberOne = add(firstNum,secondNum);
    }
    if(operator == "*") {
        display.textContent = multiply(firstNum,secondNum);
        numberOne = multiply(firstNum,secondNum);
    }
    if(operator == "-") {
        display.textContent = subtract(firstNum,secondNum);
        numberOne = subtract(firstNum,secondNum);
    }
    if(operator == "/") {
        display.textContent = divide(firstNum, secondNum);
        numberOne = divide(firstNum, secondNum);
    }
    numberTwo = null;
    equalsClicked = false;
    displayReset = false;
    operator = "";
}
let display = document.getElementById("display");
display.textContent = displayValue;

let buttons = document.getElementsByClassName("numbers");
let buttonsArray = Array.from(buttons);

let operators = document.getElementsByClassName("operators");
let operatorsArray = Array.from(operators);

let equalButton = document.getElementById("equals");
function onButtonClick() {
    buttonsArray.forEach((btn) => {
        btn.addEventListener("click", () => {
            let number = btn.id;
            if(displayValue === "0") {
                displayValue = "";
            }
            if(operator == "") {
                displayValue = displayValue + number;
                numberOne = displayValue;
                display.textContent = displayValue;
            }
            else {
                if(numberOne == null) {
                    numberOne = displayValue;   
                } 
                if(!displayReset) {
                    displayValue = "";
                    displayReset = true;
                } 
                displayValue = displayValue + number;
                display.textContent = displayValue;
                numberTwo = displayValue;
            }
        }); 
    });
    operatorsArray.forEach((btn) => {
        btn.addEventListener("click", () => {
            let op = btn.id;
            operator = op;
        });
    });
    equalButton.addEventListener("click", () => {
        equalsClicked = true;
        operate(parseInt(numberOne), parseInt(numberTwo), operator);
    });
}
onButtonClick();
