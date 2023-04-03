//Write a program that prompts the user for five numbers and prints them in
// the reverse order they were entered. Print the result to the console

let numbers = [];

for (let i = 1; i <= 5; i++) {
  const num = parseFloat(prompt(`Enter number ${i}:`));
  numbers.push(num);
}

numbers.reverse();
console.log(numbers);