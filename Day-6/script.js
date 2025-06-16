let display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    let expression = display.value;

    // Prevent division by zero
    if (/\/0(?![\d.])/.test(expression)) {
      alert("Error: Division by zero");
      clearDisplay();
      return;
    }

    let result = eval(expression);
    display.value = result;
  } catch (e) {
    alert("Invalid Expression");
    clearDisplay();
  }
}
