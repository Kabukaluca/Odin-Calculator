// Event listeners
const numBtns = document.querySelectorAll(".number-btn");
const currentDisplay = document.querySelector(".display-current");
const previousDisplay = document.querySelector(".display-previous");
const delBtn = document.querySelector(".del-btn");
const acBtn = document.querySelector(".ac-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");

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
operatorBtns.forEach(operatorBtn => {
operatorBtn.addEventListener("click", () => {
    const opBtnVal = operatorBtn.textContent;
    currentDisplay.textContent += " " + opBtnVal;
    previousDisplay.textContent = currentDisplay.textContent;
    currentDisplay.textContent = "";
    })
});


// Variables
var firstNum = "";
var secondNum = "";
var operator = "";

function operate(firstNum, operator, secondNum) {
    if (operator === "+")  {return add(firstNum, secondNum)};
    if (operator === "-") {return subtract(firstNum, secondNum)};
    if (operator === "/") {return divide(firstNum, secondNum)};
    if (operator === "*") {return  multiply(firstNum, secondNum)};
};

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
