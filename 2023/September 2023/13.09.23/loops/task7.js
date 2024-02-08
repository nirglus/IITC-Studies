colorBtn.addEventListener("click", () =>{
    const liItems = document.getElementsByTagName("li");
    for(const liItem of liItems){
        if(liItem.style.textTransform == "lowercase"){
            liItem.style.textTransform = "uppercase";
        }else{
            liItem.style.textTransform = "lowercase";
        }
    }
})