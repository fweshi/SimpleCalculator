// Starts: Abel //
let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';
let shouldResetScreen = false;

function appendNumber(number) {
    if (shouldResetScreen) {
        resetScreen();
    }
    if (display.textContent === '0') {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
    currentInput = display.textContent;
}

function appendOperator(op) {
    if (operator !== '') {
        calculateResult();
    }
    previousInput = display.textContent;
    operator = op;
    shouldResetScreen = true;
}
// Stop: Abel //

function appendDecimal() {
    if (shouldResetScreen) {
        resetScreen();
    }
    if (!display.textContent.includes('.')) {
        display.textContent += '.';
    }
}

function clearDisplay() {
    display.textContent = '0';
    currentInput = '';
    previousInput = '';
    operator = '';
}

function calculateResult() {
    if (operator === '' || shouldResetScreen) return;
    currentInput = display.textContent;
    let result = evaluate(previousInput, currentInput, operator);
    display.textContent = result;
    operator = '';
    shouldResetScreen = true;
}

function resetScreen() {
    display.textContent = '';
    shouldResetScreen = false;
}

function evaluate(a, b, operator) {
    let result;
    let numA = parseFloat(a);
    let numB = parseFloat(b);

    switch (operator) {
        case '+':
            result = numA + numB;
            break;
        case '-':
            result = numA - numB;
            break;
        case '*':
            result = numA * numB;
            break;
        case '/':
            result = numA / numB;
            break;
        default:
            return;
    }
    return result;
}

