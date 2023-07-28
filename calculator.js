// Event listeners
const numBtns = document.querySelectorAll(".number-btn");
const currentDisplay = document.querySelector(".display-current");
const previousDisplay = document.querySelector(".display-previous");
const delBtn = document.querySelector(".del-btn");
const acBtn = document.querySelector(".ac-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
const equalsBtn = document.querySelector(".equals-btn");
const commaBtn = document.querySelector(".comma-btn")

let hasOperatorBtn = false;
let hasOperatorBtnCount = 0;
let hasCommaBtn = false;

// DOM Methods
numBtns.forEach(numBtn => {
numBtn.addEventListener("click", () => {
    const buttonValue = numBtn.textContent;
    currentDisplay.textContent += buttonValue;
    hasOperatorBtn = false;
    })
});

delBtn.addEventListener("click", () => {
    currentDisplay.textContent = currentDisplay.textContent.slice(0, -1)
    hasOperatorBtn = false;
});

acBtn.addEventListener("click", () => {
    currentDisplay.textContent = "";
    previousDisplay.textContent = "";
    hasOperatorBtn = false;
});

commaBtn.addEventListener("click", () => {
    const commaValue = commaBtn.textContent;
    if(!hasCommaBtn) {
    currentDisplay.textContent += commaValue;
    hasOperatorBtn = false;
    hasCommaBtn = true;
}
});

operatorBtns.forEach(operatorBtn => {
operatorBtn.addEventListener("click", () => {
    const opBtnVal = operatorBtn.textContent;
    if (!hasOperatorBtn && hasOperatorBtnCount > 0) {
        updateSecondNum();
        operate();
        previousDisplay.textContent = currentDisplay.textContent + " " + opBtnVal;
        updateFirstNum();
        updateOperator(opBtnVal);
        currentDisplay.textContent = "";
        hasCommaBtn = false;
        hasOperatorBtn = true;
    }
    if(!hasOperatorBtn) {
    currentDisplay.textContent += " " + opBtnVal;
    previousDisplay.textContent = currentDisplay.textContent;
    updateFirstNum();
    updateOperator(opBtnVal);
    currentDisplay.textContent = "";
    hasOperatorBtnCount = 1;
    hasOperatorBtn = true;
    hasCommaBtn = false;
    } 
    })
});

equalsBtn.addEventListener("click", () => {
    updateSecondNum();
    operate();
    hasOperatorBtn = false;
    hasOperatorBtnCount = 0;
});

// Variables
var firstNum = "";
var secondNum = "";
var operator = "";
var result = "";

// Functions
function operate() {
    if (operator === "+")  {
        previousDisplay.textContent += " " + currentDisplay.textContent;
        result = add(+firstNum, +secondNum);
        currentDisplay.textContent = result;
    };
    if (operator === "−") {
        previousDisplay.textContent += " " + currentDisplay.textContent;
        result = subtract(+firstNum, +secondNum);
        currentDisplay.textContent = result;
    };
    if (operator === "÷") {
        previousDisplay.textContent += " " + currentDisplay.textContent;
        result = divide(+firstNum, +secondNum);
        currentDisplay.textContent = result;
    };
    if (operator === "×") {
        previousDisplay.textContent += " " + currentDisplay.textContent;
        result = multiply(+firstNum, +secondNum);
        currentDisplay.textContent = result;
    };
};

function updateFirstNum() {
    if (hasOperatorBtnCount < 1) {
    firstNum = currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
    }
    if (hasOperatorBtnCount === 1) {
    firstNum = currentDisplay.textContent = currentDisplay.textContent;
    }
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

// Bais-math functions
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