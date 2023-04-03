//Write a program that prints the text "Should I calculate the square root?"
// in a confirmation window. If the user  selects OK, the program asks for the
// number and calculates and prints its square root to the HTML document.
// If the user selects Cancel, the program prints the text "The square root
// is not calculated." to the HTML document
function confirmSquareRoot() {
  let result = document.getElementById("result");

  // The confirmation window and get the user's choice
  let choice = confirm("Should I calculate the square root?");

  if (choice == true) {
    // If the user selects OK, prompt for the number and calculate its square
    let num = parseFloat(prompt("Enter a number:"));
    let squareRoot = Math.sqrt(num);
    result.innerHTML = "The square root of " + num + " is " + squareRoot + ".";
  } else {
    // If the user selects Cancel, print a message
    result.innerHTML = "The square root is not calculated.";
  }
}
