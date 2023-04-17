const target = document.querySelector("#target");

// Create a list with createElemenet
const listItem1 = document.createElement("li");
const listItem2 = document.createElement("li");
const listItem3 = document.createElement("li");

listItem1.textContent = "First item";
listItem2.textContent = "Second item";
listItem3.textContent = "Third item";

target.appendChild(listItem1);
target.appendChild(listItem2);
target.appendChild(listItem3);

listItem2.classList.add("my-item");