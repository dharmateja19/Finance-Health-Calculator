function switchCalculator() {
  document
    .querySelectorAll(".calculator")
    .forEach((calc) => calc.classList.add("hidden"));
  let selected = document.getElementById("calculatorType").value;
  document.getElementById(selected).classList.remove("hidden");
}

function calculateBMI() {
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);
  if (weight > 0 && height > 0) {
    let bmi = weight / (height * height);
    let result = "";
    if (bmi > 35) {
      result = "Obese";
    } else if (bmi > 25) {
      result = "Overweight";
    } else if (bmi > 18.5) {
      result = "Normal";
    } else {
      result = "Under Weight";
    }
    document.getElementById("bmiResult").innerHTML = `Your BMI: ${bmi.toFixed(2)} <br> Category: ${result}`;
  } else {
    alert("Please enter valid values.");
  }
}

function calculateLoan() {
  let loanAmount = parseFloat(document.getElementById("loanAmount").value);
  let interestRate = parseFloat(document.getElementById("interestRate").value) / 100;
  let loanTerm = parseFloat(document.getElementById("loanTerm").value);
  let interestType = document.getElementById("interestType").value;

  if (loanAmount > 0 && interestRate > 0 && loanTerm > 0) {
    let totalAmount, interest;

    if (interestType === "simple") {
      interest = loanAmount * interestRate * loanTerm;
      totalAmount = loanAmount + interest;
    } else {
      totalAmount = loanAmount * Math.pow(1 + interestRate, loanTerm);
      interest = totalAmount - loanAmount;
    }

    document.getElementById("loanResult").innerHTML = `Interest: ₹${interest.toFixed(2)}  <br> Total Payable: ₹${totalAmount.toFixed(2)}`;
  } else {
    alert("Please enter valid values.");
  }
}

function calculateTax() {
  let income = parseFloat(document.getElementById("income").value);

  if (income > 0) {
    let tax = 0;
    income -= 75000;
    if (income <= 1200000) {
      tax = 0;
    } else if (income <= 1600000) {
      tax = (income - 1200000) * 0.15;
    } else if (income <= 2000000) {
      tax = 400000 * 0.15 + (income - 1600000) * 0.2;
    } else if (income <= 2400000) {
      tax = 400000 * 0.15 + 400000 * 0.2 + (income - 2000000) * 0.25;
    } else {
      tax = 400000 * 0.15 + 400000 * 0.2 + 400000 * 0.25 + (income - 2400000) * 0.3;
    }

    let cess = tax * 0.04;
    let totalTax = tax + cess;
    document.getElementById("taxResult").innerHTML = `Tax: ₹${tax.toFixed(2)} <br> Cess: ₹${cess.toFixed(2)} <br> Total Tax: ₹${totalTax.toFixed(2)}`;
  } else {
    alert("Please enter valid values.");
  }
}

function calculateExpression() {
  try {
    let expression = document.getElementById("calcInput").value;
    let result = eval(expression);
    document.getElementById("calcResult").innerHTML = `Result: ${result}`;
  } catch (error) {
    alert("Invalid Expression");
  }
}

function convertBinary() {
  let input = document.getElementById("binaryInput").value;
  let type = document.getElementById("binaryType").value;

  if (type === "binaryToDecimal") {
    if (/^[01]+$/.test(input)) {
      let decimal = parseInt(input, 2);
      document.getElementById("binaryResult").innerHTML = `Decimal: ${decimal}`;
    } else {
      alert("Enter a valid Binary number.");
    }
  } else {
    if (/^\d+$/.test(input)) {
      let binary = Number(input).toString(2);
      document.getElementById("binaryResult").innerHTML = `Binary: ${binary}`;
    } else {
      alert("Enter a valid Decimal number.");
    }
  }
}
