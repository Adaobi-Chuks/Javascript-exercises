//Parent class
class Product {
    constructor(name, price, inStock) {
        this.name = name;
        this.price = price;
        this.inStock = inStock;
    }

    displayInfo() {
        return ("Name:", this.name, "Price:", this.price, "In Stock:", this.inStock);
    }
}

// child class
class ElectronicProduct extends Product {
    constructor(name, price, inStock, warranty) {
        super(name, price, inStock); // Call superclass constructor
        this.warranty = warranty;
    }

    getWarrantyInfo() {
        console.log(super.displayInfo())
        console.log("Warranty:", this.warranty);
    }
}

const tv = new ElectronicProduct("Samsung TV", 599.99, true, "1 Year");
tv.displayInfo(); // Inherited from Product
tv.getWarrantyInfo(); // Specific to ElectronicProduct

// Create a class called Book with properties for title, author, and ISBN.
// Create a subclass called AudioBook that inherits from Book and adds a property for narrator.
// Implement a method play in the AudioBook class that logs a message indicating the audiobook is playing.
// Create an instance of AudioBook and call the inherited method displayInfo (assuming it's defined in Book) to display book information, and then call the play method specific to AudioBook.
