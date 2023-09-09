document.body.innerHTML = `
<div id="calculator">
<div id="screen"><input type="text" id="screenInput"></div>
<div id="numberBtns">
    <button class="btn" id="num1">1</button>
    <button class="btn" id="num2">2</button>
    <button class="btn" id="num3">3</button>
    <button class="btn" id="num4">4</button>
    <button class="btn" id="num5">5</button>
    <button class="btn" id="num6">6</button>
    <button class="btn" id="num7">7</button>
    <button class="btn" id="num8">8</button>
    <button class="btn" id="num9">9</button>
    <button class="btn" id="num0">0</button>
    <button class="btn" id="num10">.</button>
    <button class="btn func" id="mod">%</button>
    <button class="btn func" id="plus">+</button>
    <button class="btn func" id="minus">-</button>
    <button class="btn func" id="multiply">*</button>
    <button class="btn func" id="divide">/</button>
    <button class="btn" id="even">=</button>
    <button class="btn delRes" id="del">DEL</button>
    <button class="btn delRes" id="reset">RES</button>
</div>
</div>`
var selectedOperator = "";
var num1 = 0;
var resultsArr = [];
function buttonListeners(){
    for(let i = 0; i < 11; i++){
        document.getElementById(`num${i}`).addEventListener("click", function(){
            screenInput.value += document.getElementById(`num${i}`).innerHTML;
        })
    }
}
function resetBtn(){
    reset.addEventListener("click", function(){
        screenInput.value = "";
    })
}
function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){ 
   return num1 / num2;
}
function operatorsListener(){
    for(let i = 0; i < document.getElementsByClassName("func").length; i++){
        document.getElementsByClassName("func")[i].addEventListener("click", getNum1);
        document.getElementsByClassName("func")[i].addEventListener("click", function(){
            selectedOperator = document.getElementsByClassName("func")[i].innerHTML;
        });
    }
}
function getNum1(){
    num1 = +screenInput.value;
    console.log(num1);
    screenInput.value = "";
    return num1;
}
function calculate(){
    var num2 = +screenInput.value;
    switch(selectedOperator){
        case "+":
            var result = add(num1, num2);
            screenInput.value = result;
            resultsArr.push(result);
            break;
        case "-":
            var result = subtract(num1, num2);
            screenInput.value = result;
            resultsArr.push(result);
            break;
        case "*":
            var result = multiply(num1, num2);
            screenInput.value = result;
            resultsArr.push(result);
            break;
        case "/":
            var result = divide(num1, num2);
            screenInput.value = result;
            resultsArr.push(result);
            break;
        default:
            break;
    }
}
del.addEventListener("click", function(){
    screenInput.value = screenInput.value.substring(0,screenInput.value.length - 1);
})
buttonListeners();
resetBtn();
operatorsListener();
even.addEventListener("click", calculate);