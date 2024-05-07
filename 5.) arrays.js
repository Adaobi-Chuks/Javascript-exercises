// Creating arrays
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];

// Accessing elements by index
const firstFruit = fruits[0]; // "apple"
const thirdNumber = numbers[2]; // 3

// Modifying arrays
fruits.push("mango"); // Add element to the end
fruits.pop(); // Remove the last element
fruits.shift(); // Remove the first element
fruits.unshift("kiwi"); // Add element to the beginning
console.log(fruits.length)
console.log(fruits)


for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Higher-order functions
// Array methods (forEach, map, filter)
fruits.forEach(fruit => console.log(fruit)); // Loop through each element

let sum = 0;
const doubledNumbers = numbers.map(number =>  number * 2); // Create a new array with doubled values
const evenNumbers = numbers.filter(number => number % 2 === 0); // Create a new array with even numbers
console.log(evenNumbers)


//ASIGNMENTS

// Write a program that creates an array of your favorite movies and then iterates through the array to print each movie title.
// Implement a function that takes an array of numbers and returns the sum of all the elements.
// Create a program that allows users to add items to a shopping cart (array) and then displays the list of items in the cart.
// Explore array methods like slice, splice, and sort to manipulate and organize array elements in different ways.
