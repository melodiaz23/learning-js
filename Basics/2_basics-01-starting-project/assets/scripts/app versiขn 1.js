const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// This is a comment!

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult){
    const logEntry = {
        operation: operationIdentifier, 
        prevResult: prevResult,
        number: operationNumber, 
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calcResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = 'x';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add(){
    calcResult('ADD');
}

function subtract(){
    calcResult('SUBTRACT');
}

function multiply() {
    calcResult('MULTIPLY')
}

function divide() {
    calcResult('DIVIDE')
}

addBtn.addEventListener('click', add);

subtractBtn.addEventListener('click', subtract)

multiplyBtn.addEventListener('click', multiply)

divideBtn.addEventListener('click', divide)


