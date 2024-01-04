const MY_ARR = [1,4,6,7,9,0];
let sum = 0

// for loop
for(let i = 0; i < MY_ARR.length; i++){
    sum += MY_ARR[i];
}

console.log(sum);

//foreach
let sum1 = 0;
MY_ARR.forEach(num => sum1 += num);

console.log(sum1);


// find the lowest number
let min = Number.MAX_SAFE_INTEGER;
for(let i = 0; i < MY_ARR.length; i++){
    if(MY_ARR[i] < min){
        min = MY_ARR[i];
    }
}
console.log({ min });

// find the max number from the array
let max = Number.MIN_SAFE_INTEGER;
for(let i = 0; i < MY_ARR.length; i++){
    if(MY_ARR[i] > max){
        max = MY_ARR[i];
    }
}
console.log({ max });

// objects
const book = {
    title: "Harry Potter",
    pageNumber: 980
};
const title = document.getElementById("title");
const pageNum = document.getElementById("pageNum");
title.innerHTML = book.title;
pageNum.innerHTML = book.pageNumber;

const books = [
    { title: 'The Great Gatsby', pages: 180 },
    { title: 'To Kill a Mockingbird', pages: 281 },
    { title: '1984', pages: 328 }
];

books.map((book) =>{
    document.getElementById("container").innerHTML += `
    <div>
    <h1>${book.title}</h1>
    <p>${book.pages}</p>
    </div>`
})

// map

const elements = books.map(book =>{
    return `<div>
    <h1>${book.title}</h1>
    <p>${book.pages}</p>
    </div>`
}).join(" ");  // join => Takes an array and returns string.
document.getElementById("container").innerHTML += elements;

// Image slider
const images = [
    "https://cdn.pixabay.com/photo/2023/12/06/08/41/mountain-8433234_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/03/03/05/56/avenue-656969_1280.jpg"
];

const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const mainImage = document.querySelector("#mainImage");

mainImage.src = images[0];
let i = 0;
next.addEventListener("click", () =>{
    i = (i + 1) % images.length; 
    mainImage.src = images[i];
});
prev.addEventListener("click", () =>{
    i = (i - 1 + images.length) % images.length;
    mainImage.src = images[i];
});

const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((previousVal, currentVal) =>{
    return previousVal + currentVal;
},0);
console.log({total});

const totalMultip = numbers.reduce((previousVal, currentVal) =>{
    return previousVal * currentVal;
},1);
console.log({totalMultip});


const mathOperation = (num1, num2, operator) =>{
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
    
        default:
            throw new Error('Invalid operator');
    }
}

mathOperation(8, 9 , "*");