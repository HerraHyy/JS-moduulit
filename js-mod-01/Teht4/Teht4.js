//In the Harry Potter children's books, the sorting hat assigns a new student
// at Hogwarts School of Witchcraft and Wizardry to one of the four classes,
// which are Gryffindor, Slytherin, Hufflepuff, and Ravenclaw. Write an
// electronic sorting hat that asks for a student's name and draws a room for
// him. If you enter Anna as the name, for example, the program prints to the
// HTML document "Anna, you are Ravenclaw."

function sortStudent() {
    const name = document.getElementById("name").value;
    let result = document.getElementById("result");

    // Generate a random number between 1 and 4
    const randomNum = Math.floor(Math.random() * 4) + 1;

    // Assign a house based on the random number generated
    switch (randomNum) {
        case 1:
            result.innerHTML = name + ", you are Gryffindor.";
            break;
        case 2:
            result.innerHTML = name + ", you are Slytherin.";
            break;
        case 3:
            result.innerHTML = name + ", you are Hufflepuff.";
            break;
        case 4:
            result.innerHTML = name + ", you are Ravenclaw.";
            break;
    }
}