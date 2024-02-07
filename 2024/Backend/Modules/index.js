const {calcSum} = require("./math");
const {calcSubstract} = require("./math");
const {calcMultiply} = require("./math")
const {calcDivide} = require("./math")

console.log("This is Node JS project");

console.log("Sum: ",calcSum(2,2));
console.log("Substract:",calcSubstract(2,2));
console.log("Multiply:", calcMultiply(2,2));
console.log("Divide: ",calcDivide(2,2));