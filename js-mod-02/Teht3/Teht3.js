//Write a program that asks for the names of six dogs. The program prints dog
// names to unordered list <ul> in reverse alphabetical order.

let dogs = [];

// prompt the dogs names
for (let i = 1; i <= 6; i++) {
  const dogName = prompt(`Enter the name of dog ${i}:`);
  dogs.push(dogName);
}

dogs.sort().reverse();

let list = document.createElement("ul");
for (let i = 0; i < dogs.length; i++) {
  let listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode(dogs[i]));
  list.appendChild(listItem);
}

document.body.appendChild(list);