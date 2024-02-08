const {calcSum} = require("./math");
const {calcSubstract} = require("./math");
const {calcMultiply} = require("./math");
const {calcDivide} = require("./math");
const {sumOfArray} = require("./math");

const os = require("os"); // Built-in Node JS module - Operation System
const fs = require("fs"); // Built-ind Node JS moudle - File System
console.log(os.cpus());

// console.log("Sum of arr:", sumOfArray([1,2,3,4,5]));

// fs.appendFile('hello.txt', 'Hello content!', err => {
//     if (err) throw err;
//     console.log('Saved!');
//   });

fs.readFile('hello.txt','utf-8', (err, data) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log({data});
});

const txtData = fs.readFileSync('hello.txt');
console.log(txtData.toString());

const content = "This is with node js";

// fs.writeFile('hello.txt',content, (err, data) =>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log({data});
// });

const syncAddData = fs.writeFileSync('hello.txt', content);
console.log(fs.readFileSync('hello.txt', 'utf-8'));

const newContent = "This is fresh info";
fs.appendFile('hello.txt', newContent, err =>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Content updated");
});

fs.unlink('hello.txt', (err) => {
    if (err) {
      console.error('Error deleting the file:', err);
      return;
    }
    console.log('File deleted successfully');
  })

// console.log("This is Node JS project");

// console.log("Sum: ",calcSum(2,2));
// console.log("Substract:",calcSubstract(2,2));
// console.log("Multiply:", calcMultiply(2,2));
// console.log("Divide: ",calcDivide(2,2));