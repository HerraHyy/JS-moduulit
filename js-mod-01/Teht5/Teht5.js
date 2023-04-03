//Write a program that asks the user to enter a year and notifies the user
// whether the input year is a leap year.  A year is a leap year if it is
// divisible by four. However, years divisible by 100 are leap years only if
// they are also divisible by 400. Print the result on the HTML document

function checkLeapYear() {
    const year = parseInt(document.getElementById("year").value);
    let result = document.getElementById("result");

    if ((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)) {
        result.innerHTML = year + " is a leap year!";
    } else {
        result.innerHTML = year + " is not a leap year.";
    }
}