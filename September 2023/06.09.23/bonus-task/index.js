document.body.innerHTML += `
<input type="number" id="width" placeholder="Enter width">
<input type="number" id="height" placeholder="Enter height">
<button id="start">Animate/Cancel</button>
<div id="animDiv" style="background-color: red;"></div>
`
var widthCounter = 0;
var heightCounter = 0;
var intervalId;
function animateSquare(){
    if(widthCounter != width.value){
        animDiv.style.width = `${widthCounter++}px`;
    }
    if(heightCounter != height.value){
        animDiv.style.height = `${heightCounter++}px`;
    }
    else{
        clearInterval(intervalId);
    }
}
var isBtnActive = false;
start.addEventListener("click", function(){
    if(isBtnActive){
        clearInterval(intervalId);
    }else{
        intervalId = setInterval(animateSquare, 100);
    }
    isBtnActive = !isBtnActive;
})

