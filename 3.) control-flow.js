const prompt = require("prompt-sync")({sigint: true});

// if/else statements
// let grade = 85;
// if (grade >= 90) {
//     console.log("Excellent!");
// } else if (grade >= 80) {
//     console.log("Good job!");
// } else {
//     console.log("Keep practicing!");
// }

// Checking multiple conditions with logical operators
// let isLoggedIn = true;
// let hasPermission = false;
// if (isLoggedIn && hasPermission) {
//     console.log("Access granted!");
// } else {
//     console.log("Access denied.");
// }


// Loops (for, while)
// for (let i = 0; i < 5; i++) {
//     console.log("Number:", i);
//     i = i + 1;
// }


// while loop with user input
// let userInput = prompt("Enter a number (or 'quit' to stop): ");
// let i = 0
// while (i < 100) {
//     console.log("i: ", i);
//     i += 6;
//     // userInput = prompt("Enter another number (or 'quit' to stop): ");
// }

// do-while loop (guarantees at least one iteration)
let secretNumber = 42;
let guess;
do {
    guess = parseInt(prompt("Guess the secret number: "));
} while (guess !== secretNumber);
console.log("Congratulations! You guessed the number.");


//ASSIGNMENTS

// Write an if/else statement to check if a user is eligible to vote based on their age (consider voting age in your country).
// Use a for loop to print all the even numbers from 1 to 10.
// Create a while loop that iterates as long as a user enters a specific keyword (e.g., "quit").
