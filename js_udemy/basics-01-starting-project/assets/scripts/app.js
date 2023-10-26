const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteLog(operator, resultBefore, calcNumber) {
  const description = `${resultBefore} ${operator} ${calcNumber}`;
  outputResult(currentResult, description);
}

function writeToLog(operation, prevResult, operationNumber, newResult) {
  const logEntry = {
    operation: operation,
    num1: prevResult,
    num2: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserInput();
  if (
    (calculationType !== "add" &&
      calculationType !== "subtract" &&
      calculationType !== "multiply" &&
      calculationType !== "divide") ||
    !enteredNumber
  ) {
    return;
  }

  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "add") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "subtract") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "multiply") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }
  createAndWriteLog(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult("add");
}

function subtract() {
  calculateResult("subtract");
}

function multiply() {
  calculateResult("multiply");
}

function divide() {
  calculateResult("divide");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
divideBtn.addEventListener("click", divide);
multiplyBtn.addEventListener("click", multiply);
