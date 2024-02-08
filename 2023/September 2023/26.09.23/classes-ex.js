// // Task 1
// function Person(firstName ,lastName, birthdate, profileImage) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthdate = birthdate;
//     this.profileImage = profileImage;
//     this.getFullName = function getFullName(){
//         return `${firstName} ${lastName}`
//     }
//     this.getAge = function getAge(){
//         const currentDate = new Date();
//         const birthDate = new Date(birthdate);
//         const differenceInMillisec = currentDate - birthDate;
//         const ageDate = new Date(differenceInMillisec);
//         const age = ageDate.getFullYear() - 1970;
//         return age;
//     }
//     this.canClub = function canClub(){
//         if(this.getAge() >= 18){
//             return true;
//         }
//         return false
//     }
//     this.render = function render(){
//         return `<div class="personDiv">
//         <h1>${this.getFullName()}</h1>
//         <p><b>Age:</b> ${this.getAge()}</p>
//         <p><b>Can club?:</b> ${this.canClub()}</p>
//         <img src="${this.profileImage}">`;
//     }
// }
// const PERSON_ARR = [
//     new Person("James", "Jameson", "1948-12-01", "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=600"),
//     new Person("Efim", "Fisher", "1974-11-23", "https://images.pexels.com/photos/4890259/pexels-photo-4890259.jpeg?auto=compress&cs=tinysrgb&w=600"),
//     new Person("Meir", "David", "2000-01-20", "https://images.pexels.com/photos/6968548/pexels-photo-6968548.jpeg?auto=compress&cs=tinysrgb&w=600"),
//     new Person("Yossi", "Yusov", "2012-03-03", "https://images.pexels.com/photos/969373/pexels-photo-969373.jpeg?auto=compress&cs=tinysrgb&w=600"),
//     new Person("Dani", "Diesel", "2015-04-14", "https://images.pexels.com/photos/1416741/pexels-photo-1416741.jpeg?auto=compress&cs=tinysrgb&w=600")
// ]
// PERSON_ARR.forEach((person) => {
//     document.getElementById("person").innerHTML += person.render();
// })

//Task 2
class Car {
    #currentSpeed = 0
    constructor(model, year, brand, price, maxSpeed, image){
        this.model = model;
        this.year = year;
        this.brand = brand;
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.image = image;
    }
    get getCurrentSpeed(){
        return this.#currentSpeed;
    }
    set accelerate(value){
        if(this.#currentSpeed < this.maxSpeed + value){
            this.#currentSpeed += value;
        }
    }
    stop() {
        this.#currentSpeed = 0;
    }
    render(){
        return `<div class="carDiv">
        <h1>${model}</h1>
        <p><b>Year:</b> ${year}</p>
        <p><b>Brand:</b> ${brand}</p>
        <p><b>Price:</b> ${price}</p>
        <p><b>Max speed:</b> ${maxSpeed}</p>
        <img src="${image}">`;
    }
}
const CARS_ARR = [
    new Car("M3", "2023", "BMW", 85000, 345, "https://media.ed.edmunds-media.com/bmw/m3/2022/oem/2022_bmw_m3_sedan_competition_fq_oem_1_815.jpg")
    ,new Car("Zonda", "2006", "Pagani", 120000, 370, "https://www.auto-data.net/images/f6/file3365678.jpg")
];

document.body.innerHTML += ` <form id="addCar">  
<input type="text" placeholder="Model" id="model">
<input type="number" placeholder="Year" id="year">
<input type="text" placeholder="Brand" id="brand">
<input type="number" placeholder="Price" id="price">
<input type="number" placeholder="Top speed" id="speed">
<input type="text" placeholder="Image URL" id="image">
<button id="subBtn">Add car</button>
</form>`

let counter = 0;
document.getElementById("subBtn").addEventListener("click", (e) => {
    e.preventDefault();
    if(counter < 3){
        CARS_ARR.push(new Car(`${document.getElementById("model").value}`, `${document.getElementById("year").value}`, 
        `${document.getElementById("brand").value}`, `${document.getElementById("price").value}`,
        `${document.getElementById("speed").value}`, `${document.getElementById("image").value}`));
        counter++;
    } else if (counter === 3) {
        const carDiv = document.getElementById("car");
        carDiv.innerHTML = '';
        for (const car of CARS_ARR) {
            carDiv.innerHTML += car.render();
        }
        counter++;
    }
});
