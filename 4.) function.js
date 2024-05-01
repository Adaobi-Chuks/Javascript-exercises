// // Function declaration
// function greet(name) {
//     console.log("Hello,", name + "!");
// }
// greet("Alice"); // Calling the function

// // Function expression (assigning a function to a variable)
// const calculateArea = function(width, height) {
//     return width * height;
// };

// let area = calculateArea(5, 3);
// console.log("Area:", area);

// // Function parameters with default values (ES6)
// function fullName(firstName = "John", lastName = "Doe") {
//     return firstName + " " + lastName;
// }

// const name = fullName()

// console.log("Full name:", fullName()); // Uses defaults
// console.log("Full name:", fullName("Jane", "Smith")); // Provides arguments

// let i = 0;

// function incrementI() {
//     i += 1
// }
function factorial(input) {
    let num = 1; //6
    for (let i = 1; i <= input; i++) {
        num = num * i; //i=10
    }
    return num;
}


//ASSIGNMENTS

// Create a function that takes two numbers as arguments and returns their sum.
// Write a function to calculate the factorial of a number (the product of all positive integers less than or equal to that number).
// Implement a function that checks if a string is a palindrome (reads the same backward as forward).


// T A B L E

//E L B A T