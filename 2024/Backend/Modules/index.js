const {calcSum} = require("./math");
const {calcSubstract} = require("./math");
const {calcMultiply} = require("./math");
const {calcDivide} = require("./math");
const {sumOfArray} = require("./math");

const os = require("os"); // Built-in Node JS module - Operation System
const fs = require("fs"); // Built-ind Node JS moudle - File System
console.log(os.cpus());

console.log("Sum of arr:", sumOfArray([1,2,3,4,5]));

// console.log("This is Node JS project");

// console.log("Sum: ",calcSum(2,2));
// console.log("Substract:",calcSubstract(2,2));
// console.log("Multiply:", calcMultiply(2,2));
// console.log("Divide: ",calcDivide(2,2));