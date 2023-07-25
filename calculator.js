// Event listeners
const numBtns = document.querySelectorAll(".number-btn");
const currentDisplay = document.querySelector(".display-current");
const previousDisplay = document.querySelector(".display-previous");
const delBtn = document.querySelector(".del-btn");
const acBtn = document.querySelector(".ac-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
const equalsBtn = document.querySelector(".equals-btn");
const commaBtn = document.querySelector(".comma-btn")

// DOM Methods
numBtns.forEach(numBtn => {
numBtn.addEventListener("click", () => {
    const buttonValue = numBtn.textContent;
    currentDisplay.textContent += buttonValue;
    })
});

delBtn.addEventListener("click", () => {
    currentDisplay.textContent = currentDisplay.textContent.slice(0, -1)
});

acBtn.addEventListener("click", () => {
    currentDisplay.textContent = "";
    previousDisplay.textContent = "";
});

commaBtn.addEventListener("click", () => {
    const commaValue = commaBtn.textContent;
    currentDisplay.textContent += commaValue;
});

operatorBtns.forEach(operatorBtn => {
operatorBtn.addEventListener("click", () => {
    const opBtnVal = operatorBtn.textContent;
    currentDisplay.textContent += " " + opBtnVal;
    previousDisplay.textContent = currentDisplay.textContent;
    updateFirstNum();
    updateOperator(opBtnVal);
    currentDisplay.textContent = "";
    })
});

equalsBtn.addEventListener("click", () => {
    updateSecondNum();
    operate();
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
        updateResult(result);
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
