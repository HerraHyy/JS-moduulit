//Write a program that prompts for user's name and then greets the user.
// Print the result to the HTML document: Hello, Name!
function greet() {
  const name = document.getElementById("name").value;
  let result = document.getElementById("result");

  result.innerHTML = "Hello, " + name + "!";
}