// Write a function called concat(), which receives an array of strings
// as a parameter. The function returns a string formed by concatenating
// the elements of the array.
function concat(array) {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}

const namesArray = ["Johnny", "DeeDee", "Joey", "Marky"];
const concatenated = concat(namesArray);

const p = document.createElement("p");
p.textContent = concatenated;
document.body.appendChild(p);