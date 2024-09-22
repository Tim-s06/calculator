let numberOne = null;
let numberTwo = null;
let operator = "";
let displayValue = "0";
let equalsClicked = false;
let displayReset = false;
let dotClicked = false;
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
    dotClicked = false;
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
    operatorsArray.forEach((btn) => {
        btn.addEventListener("click", () => {
            let op = btn.id;
            operator = op;
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
    });
    dotButton.addEventListener("click", () => {
        if(!dotClicked) {
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
