// array
const fruits = ["apple", "banana", "orange"];

// fruits[0]

const [firstFruit, secondFruit] = fruits;

// const firstFruit = "apple"
// const secondFruit = "banana"


console.log(firstFruit); // "apple"
console.log(secondFruit); // "banana"



//object
const person = { name: "Charlie", age: 25 };
const { name, age } = person;

console.log(name); // "Charlie"
console.log(age); // 25

// Given an array const colors = ["red", "green", "blue", "yellow"], destructure the first two elements (red and green) into separate variables.
// Destructure the last element (yellow) from the colors array and assign it to a variable named lastColor.
// Create an array with three elements (name, age, city) and destructure it into separate variables using default values for age (25) and city ("Unknown").
// Given an object const person = { name: "Alice", age: 30, job: "Developer" }, destructure name and age into separate variables.
// Destructure the job property from the person object and rename it to occupation using destructuring.
// Create an object with properties firstName, lastName, and fullName (computed property derived from the first and last names). Destructure only the firstName and lastName properties into separate variables.
