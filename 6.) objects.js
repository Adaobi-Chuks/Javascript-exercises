// // Creating objects
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     greet: function() {
//         console.log("Hello, my name is", this.firstName + " " + this.lastName);
//     }
// };

// // Accessing properties
// console.log(person.firstName); // "John"
// console.log(person["age"]); // 30 (alternative access)
// // console.log(person[firstName]); // 30 (alternative access)

// // Modifying properties
// person.age = 35;
// person.greet(); // "Hello, my name is John Doe" (using object method)
// // console.log(person.greet);

// // Creating objects using constructor functions
// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.getInfo = function() {
//         return this.make + " " + this.model + " (" + this.year + ")";
//     };
// }

// let myCar = new Car("Ford", "Mustang", 2020);
// console.log(myCar.getInfo()); // "Ford Mustang (2020)"

// //for in loop
// for (let key in person) {
//     console.log(key, person[key]); // Access property value using bracket notation
// }
// //note: Consider using Object.keys(object) to create an array of the object's own property names and then loop through that array for better control.





function Student (name, ID, grades) {
    this.name = name;
    this.ID = ID;
    this.grades = grades;

    this.getInfo = function() {
        return this.name + " " + this.ID +  + this.grade;
    };
}

const student1 = new Student("Ada", "1", "A")
const student2 = new Student("Obi", "1", "A")
const student3 = new Student("Amara", "1", "A")

const students = [student1, student2, student3]

function displayInfo(name) {
    //search for the student
    //display student's information
    for (let i = 0; i < students.length; i++) {
        if(students[i].name === name) {
            console.log(`Name: ${students[i].name} ID: ${students[i].ID} Grade: ${students[i].grades}`)
        }        
    }
}

displayInfo("chidera")

//ASSIGNMENTS

// Create an object to represent a product with properties like name, price, and inStock. Write functions to add and remove items from a shopping cart that uses this object structure.
// Implement a program to store student information (name, ID, grades) as objects in an array. Allow users to search for a student by name and display their information.
// Explore object methods for iterating through properties (e.g., for...in loop) and nested objects for more complex data structures.
// Create an object representing a library book with properties like title, author, and isCheckedOut. Implement a function that displays all the book's information using a loop to iterate through the object's properties.
