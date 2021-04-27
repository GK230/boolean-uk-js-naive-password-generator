let firstName = prompt("What is your first name?")
let lastName = prompt("What is your last name?")
let favouriteColour = prompt("What is your favourite colour?")
let firstNumber = parseInt(prompt("Choose a number"));
let secondNumber = parseInt(prompt("Choose another number"));
let password = `${firstName}${lastName}${favouriteColour}${Math.floor(Math.random() * secondNumber) + firstNumber}`;

