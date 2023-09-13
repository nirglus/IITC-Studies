colorBtn.addEventListener("click", () =>{
    const liItems = document.getElementsByTagName("li");
    for(const liItem of liItems){
        liItem.style.textTransform = "uppercase";
    }
})