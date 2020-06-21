let result = "0";
let num1 = "";
let num2 = "";
let operator;

function showResult() {
  document.querySelector("#display").innerHTML = result;
}

function addPoint(number) {
  if (number === "") {
    return "0.";
  } else {
    if (!/\./g.test(number)) {
      return `${number}.`;
    }
  }
  return number;
}

function handleClickButton(key) {
  if (/[0-9]/.test(key)) {
    if (!operator) {
      num1 = `${num1}${key}`;
    } else {
      num2 = `${num2}${key}`;
    }
  }

  if (/\./.test(key)) {
    if (!operator) {
      num1 = addPoint(num1);
    } else {
      num2 = addPoint(num2);
    }
  }

  if (/[+*\-\/]/.test(key) && !operator) {
    if (num1 === "" && result !== 0 && !/Error/g.test(result)) {
      num1 = result;
    }

    if (num1 !== "") {
      operator = key;
    }
  }
  result = `${num1}${operator || ""}${num2}` || "0";
  showResult();
}

function handleClickClearButton() {
  result = "0";
  num1 = "";
  num2 = "";
  operator = null;
  showResult();
}

function handleClickEqualButton() {
  if (!operator || num1 === "" || num2 === "") {
    return;
  }
  const convertedNum1 = 1 * num1;
  const convertedNum2 = 1 * num2;

  switch (operator) {
    case "+":
      result = `${convertedNum1 + convertedNum2}`;
      break;
    case "-":
      result = `${convertedNum1 - convertedNum2}`;
      break;
    case "*":
      result = `${convertedNum1 * convertedNum2}`;
      break;
    case "/":
      if (convertedNum2 !== 0) {
        result = `${convertedNum1 / convertedNum2}`;
      } else {
        result = "Error  divide by zero";
      }

      break;
  }

  num1 = "";
  num2 = "";
  operator = null;
  showResult();
}
