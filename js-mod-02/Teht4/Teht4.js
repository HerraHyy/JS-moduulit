// Write a program that asks the user for numbers until he gives zero.
// The given numbers are printed in the console from the largest to the smallest.

// list of numbers
let numbers = [];

// prompt until 0 is entered
while (true) {
  const num = parseFloat(prompt("Enter a number (enter 0 to stop):"));
  if (num === 0) {
    break;
  }
  numbers.push(num);
}

numbers.sort(function(a, b) {
  return b - a;
});

console.log(numbers);