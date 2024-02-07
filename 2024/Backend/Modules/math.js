const calcSum = (num1, num2) =>{
    return num1 + num2;
}

const calcSubstract = (num1, num2) =>{
    return num1 - num2;
}

const calcMultiply = (num1, num2) =>{
    return num1 * num2;
}

const calcDivide = (num1, num2) =>{
    return num1 / num2;
}

const sumOfArray = (arr) =>{
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

module.exports = {calcSum, calcSubstract, calcMultiply, calcDivide, sumOfArray};