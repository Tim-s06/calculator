let numberOne = null;
let numberTwo = null;
let operator = "";
let displayValue = "0";
let equalsClicked = false;
let displayReset = false;
let dotClicked = false;
let operatorJustClicked = false;
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
function operate(firstNum, secondNum, op) {
    if(op == "+") {
        display.textContent = add(firstNum,secondNum);
        displayValue = add(firstNum,secondNum);
        numberOne = add(firstNum,secondNum);
    }
    if(op == "*") {
        display.textContent = multiply(firstNum,secondNum);
        displayValue = multiply(firstNum,secondNum);
        numberOne = multiply(firstNum,secondNum);
    }
    if(op == "-") {
        display.textContent = subtract(firstNum,secondNum);
        displayValue = subtract(firstNum,secondNum);
        numberOne = subtract(firstNum,secondNum);
    }
    if(op == "/") {
        display.textContent = divide(firstNum, secondNum);
        displayValue = divide(firstNum, secondNum);
        numberOne = divide(firstNum, secondNum);
    }
    numberTwo = null;
    equalsClicked = false;
    displayReset = false;
    operator = "";
    dotClicked = false;
    operatorJustClicked = false;
}
let display = document.getElementById("display");
display.textContent = displayValue;

let buttons = document.getElementsByClassName("numbers");
let buttonsArray = Array.from(buttons);

let operators = document.getElementsByClassName("operators");
let operatorsArray = Array.from(operators);

let equalButton = document.getElementById("equals");
let clearButton = document.getElementById("clear");

let backButton = document.getElementById("backspace");
let dotButton = document.getElementById("dot");

function onButtonClick() {
    buttonsArray.forEach((btn) => {
        btn.addEventListener("click", () => {
            let number = btn.id;
            operatorJustClicked = false;
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
                    dotClicked = false;
                } 
                displayValue = displayValue + number;
                display.textContent = displayValue;
                numberTwo = displayValue;
            }
        }); 
    });
    operatorsArray.forEach((botn) => {
        botn.addEventListener("click", () => {
            let op = botn.id;
            operator = op;
            operatorJustClicked = true;
        });
    });
    equalButton.addEventListener("click", () => {
        if(numberOne != null && numberTwo != null && operator != "") {
            equalsClicked = true;
            operate(parseFloat(numberOne), parseFloat(numberTwo), operator);
        }
    });
    clearButton.addEventListener("click", () => {
        numberOne = null;
        numberTwo = null;
        operator = "";
        displayValue = "0";
        equalsClicked = false;
        displayReset = false;
        display.textContent = "0";
        dotClicked = false;
        operatorJustClicked = false;
    });
    dotButton.addEventListener("click", () => {
        if(!displayValue.includes(".") && !dotClicked && !operatorJustClicked) {
            displayValue = displayValue + ".";
            display.textContent = displayValue;
            dotClicked = true;
        }
    });
    backButton.addEventListener("click", () => {
        displayValue = displayValue.slice(0, displayValue.length - 1);
        if(displayValue == "") {
            displayValue = "0";
        }
        display.textContent = displayValue;
    });
}
onButtonClick();
