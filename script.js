// Declaring Variables
let numberOne = null;
let numberTwo = null;
let operator = "";
let displayValue = "0";
let equalsClicked = false;
let displayReset = false;
let dotClicked = false;
let operatorJustClicked = false;
let currentNumber = 1;

// Functions for basic math operations
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

// DOM Elements
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

// Operation Function
function operate(firstNum, secondNum, op) {
    let result;
    switch(op) {
        case "+":
            result = add(firstNum,secondNum);
            break;
        case "-": 
            result = subtract(firstNum,secondNum);
            break;
        case "*":
            result = multiply(firstNum,secondNum);
            break;
        case "/":
            result = divide(firstNum, secondNum);
            break;
        default:
            return;
    }

    result = parseFloat(result.toFixed(10));
    result = result.length > 20 ? result.slice(0,20) : result;
    result.toString();
    displayValue = result;
    display.textContent = result
    numberOne = result;

    // Reset state
    numberTwo = null;
    equalsClicked = false;
    displayReset = false;
    operator = "";
    dotClicked = false;
    operatorJustClicked = false;
    currentNumber = 1;
}

// Handle number button click
function handleNumberClick(number) {
        operatorJustClicked = false;
        if(displayValue == "0") {
            displayValue = "";
        }
        if(operator == "") {
            if(displayValue.length < 20) {
                displayValue = displayValue + number;
                numberOne = displayValue;
                display.textContent = displayValue;
            }
        }
        else {
            currentNumber = 2;
            if(numberOne == null) {
                numberOne = displayValue;   
            } 
            if(!displayReset) {
                displayValue = "";
                displayReset = true;
                dotClicked = false;
            } 
            if(displayValue.length<20) {
                displayValue = displayValue + number;
                display.textContent = displayValue;
                numberTwo = displayValue;
            }
        }
}

// Handle operator button click
function handleOperatorClick(op) {
    operator = op;
    operatorJustClicked = true;
}

// Handle equal button click
function handleEqualClick() {
    if(numberOne != null && numberTwo != null && operator != "") {
        equalsClicked = true;
        operate(parseFloat(numberOne), parseFloat(numberTwo), operator);
    }
}

// Clear calculator
function clearCalculator() {
    numberOne = null;
    numberTwo = null;
    operator = "";
    displayValue = "0";
    equalsClicked = false;
    displayReset = false;
    display.textContent = "0";
    dotClicked = false;
    operatorJustClicked = false;
    currentNumber = 1;
}

// Handle dot click
function handleDotClick() {
    if(!displayValue.includes(".") && !dotClicked && !operatorJustClicked) {
        displayValue = displayValue + ".";
        display.textContent = displayValue;
        dotClicked = true;
    }
}

// Handle backspace click
function handleBackClick() {
    if(!operatorJustClicked) {
        displayValue = displayValue.slice(0, displayValue.length - 1);
    }
    if(displayValue == "") {
        displayValue = "0";
    }
    display.textContent = displayValue;
    if(currentNumber == 1) {
        numberOne = displayValue;
    } else {
        numberTwo = displayValue;
    }
}

// Set up event listeners for button and keyboard inputs
function onButtonClick() {
    buttonsArray.forEach((btn) => {
        btn.addEventListener("click", () => handleNumberClick(btn.id)); 
    });

    operatorsArray.forEach((botn) => {
        botn.addEventListener("click", () => handleOperatorClick(botn.id));
    });

    equalButton.addEventListener("click", () => handleEqualClick());

    clearButton.addEventListener("click", () => clearCalculator());

    dotButton.addEventListener("click", () => handleDotClick());

    backButton.addEventListener("click", () => handleBackClick());

    document.addEventListener("keydown", (event) => {
        let key = event.key;
        if("0123456789".includes(key)) {
            handleNumberClick(key);
        }
        if("+/*-".includes(key)) {
            handleOperatorClick(key);
        }
        if(key === "Enter") {
            handleEqualClick();
        }
        if(key === ".") {
            handleDotClick();
        }
        if(key === "Backspace") {
            handleBackClick();
        }
    });
}

onButtonClick();
