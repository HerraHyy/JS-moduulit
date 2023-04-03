//Write a program that prompts the user for numbers. When the user enters
// one of the numbers he previously entered, the program will announce that
// the number has already been given and stops its operation and then prints
// all the given numbers to the console in ascending order

let numbers = [];

while (true) {
  const num = parseFloat(prompt("Enter a number (enter 0 to stop):"));
  if (num === 0) {
    break;
  } else if (numbers.includes(num)) {
    alert("You've already entered that number!");
    break;
  }
  numbers.push(num);
}

numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers);