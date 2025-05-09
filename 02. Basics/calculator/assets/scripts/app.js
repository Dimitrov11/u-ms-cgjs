const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from the input field
function getUserNumberInput() {
    return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file
}

// Create object and push it into array
// Invoke it in all operation functions of the calculator with params
function writeToLog(operatorIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operator: operatorIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult,
    };

    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
    // Convert number to string:
    // currentResult = currentResult.toString() + parseInt(userInput.value);

    const enteredNumber = getUserNumberInput();
    // `${...}` - convert param in the brackets to string (no need to parse)
    const initialResult = currentResult;

    currentResult += enteredNumber;
    createAndWriteOutput("+", initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput("-", initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput("*", initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput("/", initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
