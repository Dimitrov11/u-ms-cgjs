const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
    return parseInt(userInput.value);
}


function add() {
    // Convert number to string:
    // currentResult = currentResult.toString() + parseInt(userInput.value);

    const userInputValue = getUserNumberInput();
    const calcDescription = `${currentResult} + ${userInputValue}`;
    // `${...}` - convert param in the brackets to string (no need to parse)

    currentResult = currentResult + userInputValue;
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);