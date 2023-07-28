In this project I am going to create a calculator using JavaScript, CSS and HTML.

I will be using this file as my structure sheet, so I might add and remove information out of this file.
That being said, let's go!


    Step 1:
        Create functions for the four basic math operators:
            - add
            - substract
            - multiplay
            - divide
    
    Step 2:
        Create var for firstNum, operator, secondNum:
            - firstNum
            - operator
            - secondNum
    
    Step 3:
        Create operate function that takes an operator, 2 nums and calls a math function:
            - function operate()

    Step 4:
        Create HTML-Calculator Layout:
            - Calcultaor-Container
            - Display
            - Number-Buttons (0 - 9)
            - Equal-Button (=)
            - Operator-Buttons (+, -, /, *)
            - All-Clear-Buttom (AC)
            - Comma-Button (,)
            - Delete-Button (Del)

    Step 5:
        Create functions to display numbers in "display"
            - add eventlistener to buttons
            - if button is clicked => add btn value to display

        Create a var to store the display data for futher steps
            - var display-Data ?

    Step 6:
        Make it possible to string together more than one "calculation"
            - "1 + 1 * 2 + 10 - 2 / 2" should also work (= 6)

            - used an operator as an equalbtn and return the result directly to the previousDisplay
            

BackUpCode 27.07.2023:
// Event listeners
const numBtns = document.querySelectorAll(".number-btn");
const currentDisplay = document.querySelector(".display-current");
const previousDisplay = document.querySelector(".display-previous");
const delBtn = document.querySelector(".del-btn");
const acBtn = document.querySelector(".ac-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
const equalsBtn = document.querySelector(".equals-btn");
const commaBtn = document.querySelector(".comma-btn")


//let calculations = [];
let hasOperatorBtn = false;

// DOM Methods
numBtns.forEach(numBtn => {
numBtn.addEventListener("click", () => {
    const buttonValue = numBtn.textContent;
    currentDisplay.textContent += buttonValue;
    //calculations.push(buttonValue);
    hasOperatorBtn = false;
    })
});

delBtn.addEventListener("click", () => {
    currentDisplay.textContent = currentDisplay.textContent.slice(0, -1)
    //calculations.pop();
    hasOperatorBtn = false;
});

acBtn.addEventListener("click", () => {
    currentDisplay.textContent = "";
    previousDisplay.textContent = "";
    //calculations = [];
    hasOperatorBtn = false;
});

commaBtn.addEventListener("click", () => {
    const commaValue = commaBtn.textContent;
    currentDisplay.textContent += commaValue;
    //calculations.push(commaValue);
    hasOperatorBtn = false;
});

operatorBtns.forEach(operatorBtn => {
operatorBtn.addEventListener("click", () => {
    const opBtnVal = operatorBtn.textContent;
    if(!hasOperatorBtn) {
    currentDisplay.textContent += " " + opBtnVal;
    previousDisplay.textContent = currentDisplay.textContent;
    updateFirstNum();
    updateOperator(opBtnVal);
    currentDisplay.textContent = "";
    //calculations.push(opBtnVal);
    hasOperatorBtn = true;
    }
    })
});

equalsBtn.addEventListener("click", () => {
    updateSecondNum();
    operate();
    hasOperatorBtn = false;
    //calculations = [];
});


// Variables
var firstNum = "";
var secondNum = "";
var operator = "";
var result = "";

function operate() {
    if (operator === "+")  {
        previousDisplay.textContent += " " + currentDisplay.textContent;
        result = add(+firstNum, +secondNum);
        currentDisplay.textContent = result;
    };
    if (operator === "-") {
        previousDisplay.textContent += " " + currentDisplay.textContent;
        result = subtract(+firstNum, +secondNum);
        currentDisplay.textContent = result;
    };
    if (operator === "÷") {
        previousDisplay.textContent += " " + currentDisplay.textContent;
        result = divide(+firstNum, +secondNum);
        currentDisplay.textContent = result;
    };
    if (operator === "*") {
        previousDisplay.textContent += " " + currentDisplay.textContent;
        result = multiply(+firstNum, +secondNum);
        currentDisplay.textContent = result;
    };
};

function updateFirstNum() {
    firstNum = currentDisplay.textContent = currentDisplay.textContent.slice(0, -1)
};

function updateSecondNum() {
    secondNum = currentDisplay.textContent;
};

function updateOperator(value) {
    operator = value;
};

function updateResult(value) {
    result = value;
}

// Math fucntions
function add(a, b) {
    return (a + b);
};

function subtract(a, b) {
    return (a - b);
};

function multiply(a, b) {
    return (a * b);
};

function divide(a, b) {
    return (a / b);
};
