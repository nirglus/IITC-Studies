const CAR1 = {
    brand: "BMW",
    model: "M3",
    year: 2022,
    currentSpeed: 0,
    drive: () => {
        return this.currentSpeed += 20;
    }
}

//Instead of builiding each object, we can use constractor functions as following.


function Car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.currentSpeed = 0;

    this.drive = () => {
        return this.currentSpeed += 20;
    }
}

//It's a good practice to NOT use arrow funcs with objects.
//While using this with arrow funcs, it takses a global this that is out of the current scope.

const car1 = new Car("BMW", "M3", 2022);
const car2 = new Car("Mazda", "MX-5", 2020);

console.log(car1);
console.log(car1.drive());

//Class Task 1

function Book(title, category, author, pages, image){
    this.title = title;
    this.category = category;
    this.author = author;
    this.pages = pages;
    this.image = image;
    this.render = function render(){
        return `<div class="bookItem">
        <h1>${this.title}</h1>
        <p><b>Category:</b> ${this.category}</p>
        <p><b>Author:</b> ${this.author}</p>
        <p><b>Pages:</b> ${this.pages}</p>
        <img src="${this.image}">`;
    }
}

const BOOKS_ARR = [new Book("The Godfather", "Crime", "Mario Puzo", 433, "https://m.media-amazon.com/images/I/81IHPwG1tbL._SY522_.jpg")
,new Book("Harry Potter", "Fantasy", "J.K Rowling", 766, "https://m.media-amazon.com/images/I/71-++hbbERL._AC_SY300_SX300_.jpg")
,new Book("The Godfather Returns", "Crime", "Mark Winegardner", 448, "https://m.media-amazon.com/images/I/51UYngmZ-2L._SY445_SX342_.jpg")
];

console.log(BOOKS_ARR[0].render());

BOOKS_ARR.forEach((book) => {
    document.getElementById("book").innerHTML += book.render();
})

//Another solution
// document.getElementById("book").innerHTML += BOOKS_ARR.map(book => book.render()).join("");