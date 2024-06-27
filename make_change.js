const $ = (selector) => document.querySelector(selector);
document.addEventListener("DOMContentLoaded", function () {
  // to call the function on button click
  document
    .getElementById("makeChangeBtn")
    .addEventListener("click", processEntry);
});

// function to get input from user
function processEntry() {
  var input = parseFloat(document.getElementById("input").value);

  // condtion to check if number is greater than 0 and less than 99
  if (isNaN(input) || input < 0 || input > 99) {
    alert("Please enter a number between 0 and 99.");
  } else {
    makeChange(input);
  }
}

// function to calculate results
function makeChange(input) {
  var quarters = Math.floor(input / 25);
  input = input % 25;
  var dimes = Math.floor(input / 10);
  input = input % 10;

  var nickels = Math.floor(input / 5);
  input = input % 5;
  var pennies = input;

  // displaying results
  document.getElementById("quarters").value = quarters;
  document.getElementById("dimes").value = dimes;
  document.getElementById("nickels").value = nickels;
  document.getElementById("pennies").value = pennies;
}
