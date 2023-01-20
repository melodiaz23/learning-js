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
    if (
        calculationType !== 'ADD' && 
        calculationType !== 'SUBTRACT' && 
        calculationType !== 'MULTIPLY' && 
        calculationType !== 'DIVIDE' ||
        !enteredNumber
    ) {
        return
    }
    
    // if (
    //     calculationType === 'ADD' ||
    //     calculationType === 'SUBTRACT' || 
    //     calculationType === 'MULTIPLY' || 
    //     calculationType === 'DIVIDE'
    // ) {
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
    
// }

// Replace it with function calculate.
// function add(){
//     calcResult('ADD');
// }

// function subtract(){
//     calcResult('SUBTRACT');
// }

// function multiply() {
//     calcResult('MULTIPLY')
// }

// function divide() {
//     calcResult('DIVIDE')
// }

//Another way to write it.
// Using function and if...
function calculate (operation){
    const enteredNumber = getUserNumberInput
    const initialResult = currentResult;
    let operator;
    if (operation === 'ADD'){
        currentResult += enteredNumber;
        operator = '+';
    } else if (operation === 'SUBTRACT'){
        currentResult -= enteredNumber;
        operator = '-';
    } else if (operation === 'MULTIPLY'){
        currentResult *= enteredNumber;
        operator = '*';
    } else {
        currentResult /= enteredNumber;
        operator = '/';
    }
    createAndWriteOutput('/', initialResult, enteredNumber);
        writeToLog('DIVIDE', initialResult, enteredNumber, currentResult)


}

addBtn.addEventListener('click', calculate.bind(this, 'ADD'));

subtractBtn.addEventListener('click', calculate.bind(this, 'ADD'))

multiplyBtn.addEventListener('click', calculate.bind(this, 'ADD'))

divideBtn.addEventListener('click', calculate.bind(this, 'ADD'))


