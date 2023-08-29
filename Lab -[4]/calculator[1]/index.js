const INPUT = document.querySelector("#Answer");
let isResultShown = true;
function EnterNumber(value) {
  if (isResultShown) {
    INPUT.value = value;
    isResultShown = false;
  } else {
    INPUT.value += value;
  }
}
function EnterOperator(value) {
  let isExist = false;

  const operators = ["+", "-", "*", "/", "."];
  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === INPUT.value.at(-1)) {
      isExist = true;
      break;
    }
  }
  if (!isExist && !isResultShown) {
    INPUT.value += value;
  }
}
function EnterEqual() {
  if (INPUT.value === "") {
    INPUT.value = "";
    return;
  }
  const result = eval(INPUT.value);
  INPUT.value = result;
  isResultShown = true;
}
function EnterClear() {
  INPUT.value = "";
}
