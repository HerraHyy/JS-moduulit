//Write a program that prompts for three integers. The program prints the sum,
// product and average of the numbers to the HTML document
function calculate() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  const num3 = parseInt(document.getElementById("num3").value);
  let result = document.getElementById("result");

  // Calculate the sum, product and average of the numbers
  const sum = num1 + num2 + num3;
  const product = num1 * num2 * num3;
  const average = sum / 3;

  result.innerHTML = "The sum is " + sum + ". The product is " + product + ". The average is " + average + ".";
}