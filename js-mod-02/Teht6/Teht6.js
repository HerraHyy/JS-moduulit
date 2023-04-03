// Write a function that returns a random dice roll between 1 and 6. The
// function should not have any parameters. Write a main program that rolls
// the dice until the result is 6. The main program should print out the result
// of each roll in an unordered list (<ul>).
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

let roll = 0;
let rolls = [];

// roll untril 6
while (roll !== 6) {
  roll = rollDice();
  rolls.push(roll);
}

// Print the results of each roll
let list = document.createElement("ul");
for (let i = 0; i < rolls.length; i++) {
  let listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode("Roll " + (i + 1) + ": " + rolls[i]));
  list.appendChild(listItem);
}

document.body.appendChild(list);