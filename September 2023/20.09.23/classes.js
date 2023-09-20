class Product {
    constructor(title, price, image, description, quantity){
        this.title = title;
        this.price = price;
        this.image = image;
        this.description = description;
        this.quantity = quantity;
    }

    getPrice(){
        return this.price;
    }
}

const p1 = new Product("iPhone 14", 4500, "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-hero-220907-geo.jpg.og.jpg?202308290415", "256GB + 16GB RAM" ,5000)
console.log(p1);

class Animal {
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
    }
    run(){
        return `${this.name} is running`;
    }
    eat(){
        return `${this.name} is eating`;
    }
    sleep(){
        return `${this.name} is sleeping`;
    }
}

class Bird extends Animal{
    constructor(name, gender ,wings){
        super(name, gender); // The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.
        this.wings = wings;
    }
    fly(){
        return `${this.name} is flying`;
    }
}

// Extends = Take out the other classe's content and extend it to my new class
// super is used to declare the old variables and use them into my "merged" class object,
//  re-declared constructor for new arguments, and rest is extention of the old Class object

const animal1 = new Animal("dog", "M");
const bird1 = new Bird("dove", "F", 2);

console.log(animal1.run());
console.log(bird1.fly());


//Class task
const platsArray = []
const marioArray = []
const enemyArray = []
class Entity{
    constructor(name, width, height, image, x, y){
        this.name = name;
        this.width = width;
        this.height = height;
        this.image = image;
        this.x = x;
        this.y = y;
    };
    jump(){
        return y =+ 40
    }
    moveRight(){
        return x =+ 10
    }
    moveLeft(){
        return x =+ 10
    }
     
    
}

class Player extends Entity{
    constructor(name, width, height, image, x, y, life){
        super(name, width, height, image, x, y);
            this.life = life;
            this.speed = 0;
    }
    hitEnemy(){
        enemyArray[0].life =- 1
        if(enemyArray[0].life == 0){
            enemyArray.shift()
        }
    }

}

class Enemy extends Entity {
    constructor(width,height,x,y,image,damage,life,speed){
        super(width,height,x,y,image)
        this.damage = damage
        this.life = life
        this.speed = speed
    }
    hitMario(){
        return marioArray[0].life =- 5
    }
}
const marioTraits = new Mario("5vw","5vh","x = 20","y = 0","mario.jpg","100","10");
const enemyTraits = new Enemy("5vw","5vh","x = 40","y = 0","enemy.jpg","10","1","5");
const platformTraits = new Basics("2vw","3vh","x = 60","y = 80","platfrom.jpg");

marioArray.push(marioTraits);
enemyArray.push(enemyTraits);
platsArray.push(platformTraits);

// New Task

class Product {
    constructor(title, price ,onSale ,salePrecentage, image, quantity){
        this.title = title;
        this.price = price;
        this.onSale = onSale;
        this.salePrecentage = salePrecentage;
        this.priceAfterSale = this.priceAfterSale();
        this.image = image;
        this.quantity = quantity;
        this.totalPrice = this.getTotalPrice();
    }
    getTotalPrice(){
        return this.priceAfterSale * this.quantity;
    }
    priceAfterSale(){
        if(this.onSale == true){
            return this.price - (this.price * (this.salePrecentage / 100));
        }
        return this.price;
    }
}

const product1 = new Product("car", 25000, true , 10,
 "https://www.usnews.com/object/image/00000183-c79c-d03b-adef-f7fcaa3f0000/2023-acura-integra-a-spec-2.jpg?update-time=1665501276557&size=responsive970",
 5700);
 const product2 = new Product("iPhone 15", 5000, false, 0 ,
 "https://www.usnews.com/object/image/00000183-c79c-d03b-adef-f7fcaa3f0000/2023-acura-integra-a-spec-2.jpg?update-time=1665501276557&size=responsive970",
 2);
 console.log(product1);
 console.log(product2);
