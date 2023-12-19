let displayValue = '';
let operand1 = null;
let operator = null;

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('result').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  operand1 = null;
  operator = null;
  document.getElementById('result').value = displayValue;
}

function operate(op) {
  operand1 = parseFloat(displayValue);
  operator = op;
  displayValue = '';
}

function calculate() {
  let result;
  const operand2 = parseFloat(displayValue);

  if (operator === 'add') {
    result = operand1 + operand2;
  } else if (operator === 'subtract') {
    result = operand1 - operand2;
  } else if (operator === 'multiply') {
    result = operand1 * operand2;
  } else if (operator === 'divide') {
    if (operand2 === 0) {
      result = 'Error: Cannot divide by zero';
    } else {
      result = operand1 / operand2;
    }
  }

  displayValue = result.toString();
  document.getElementById('result').value = displayValue;
}
