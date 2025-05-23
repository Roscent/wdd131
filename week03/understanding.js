// code snippet:
let firstName = 'Antonia';
let lastName = 'Francesca';

// Write a function declaration / definition named fullName that has two
//  parameters named first and last. The function's purpose is to combine
//  those two string parameters together to return one combined string 
// (a 'full' name) with a space between the first and last variables.

function fullName(first, last) {
    return `{first} ${last}`;
}

// Use an anonymous function expression to do the same thing where the 
// function is assigned to a variable named fullName.
const fullName = function (first, last) {
    return `${first} ${last}`;
}

// Use an arrow function expression to do the same thing where the 
// function is assigned to a variable named fullName.
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

// Write an expression that calls the fullName function declaration and 
// writes the result to an existing HTML element's text node with the ID 
// of fullName
document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);