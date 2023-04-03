// Modify the function above so that it gets the number of sides on the dice as
// a parameter. With the modified function you can for example roll a 21-sided
// role-playing dice. The difference to the last exercise is that the dice
// rolling in the main program continues until the program gets the maximum
// number on the dice, which is asked from the user at the beginning.
function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

// prompt amount of sides
const maxNum = parseInt(prompt("Enter the number of sides on a die:"));

const rolls = [];
let roll = 0;

while (roll !== maxNum) {
  roll = rollDice(maxNum);
  rolls.push(roll);
}

const list = document.createElement("ul");
for (let i = 0; i < rolls.length; i++) {
  const listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode("Roll " + (i + 1) + ": " + rolls[i]));
  list.appendChild(listItem);
}

document.body.appendChild(list);