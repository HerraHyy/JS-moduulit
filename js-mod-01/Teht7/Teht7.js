//Write a program that rolls user defined number of dice and displays the sum
// of the results of the dice rolls.
function rollDice() {
  const numDice = parseInt(document.getElementById("numDice").value);
  let result = document.getElementById("result");

  // Roll the dice and calculate the sum
  let sum = 0;
  for (let i = 0; i < numDice; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    sum += roll;
  }

  result.innerHTML = "The sum of the dice rolls is " + sum + ".";
}