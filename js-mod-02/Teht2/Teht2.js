// Write a program that asks the user for the number of participants.
// After this, the program asks for the names of all participants.
// Finally, the program prints the names of the participants on the web
// page in an ordered list (<ol>) in alphabetical order.

let numParticipants = parseInt(prompt("How many participants are there?: "));
let participants = [];

for (let i = 1; i <= numParticipants; i++) {
  const name = prompt(`Enter the name of participant ${i}:`);
  participants.push(name);
}

participants.sort();

let list = document.createElement("ol");
for (let i = 0; i < participants.length; i++) {
  let listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode(participants[i]));
  list.appendChild(listItem);
}

document.body.appendChild(list);