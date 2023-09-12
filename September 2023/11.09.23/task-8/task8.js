const NAME_ARR = [
    {
        fName: "John",
        lName: "Johnson",
        age: 13
    },
    {
        fName: "Moti",
        lName: "Luchim",
        age: 20
    }
]
function checkIfOver18(NAME_ARR){
    NAME_ARR.forEach((element) => {
        for(const key in element){
            if(key == "age"){
                if(element[key] > 18){
                    document.body.innerHTML += `<p>${element["fName"]}</p>`
                }else{
                    document.body.innerHTML += `<p>${element["lName"]}</p>`
                }
            }
        }
    })
}
checkIfOver18(NAME_ARR);

const TAG_ARR = ["h1", "p", "span", "h4", "div"];
TAG_ARR.forEach((element) => document.body.innerHTML += `<${element} class="sameClass">some text</${element}>`);