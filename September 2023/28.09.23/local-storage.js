let BOOK_ARR = [{title: "The Godftaer",
author: "Mario Puzo",
page: 433},
{title: "The Godfather Returns",
author: "Mark Winegardner",
page: 448},
{title: "The Lazy Investor",
author: "Tamir Mendelovsky",
page: 200}];

const storageVal = localStorage.getItem("books");
console.log(storageVal);
console.log(JSON.parse(storageVal)); //Makes it as an object
if(storageVal !== null){
    BOOK_ARR = JSON.parse(storageVal);
}

document.getElementById('add').addEventListener("click", () =>{
    const NEW_BOOK = {
        title: `${document.getElementById("title").value}`,
        author: `${document.getElementById("author").value}`,
        page: `${document.getElementById("pages").value}`
    }
    addBook(NEW_BOOK);
})

function addBook(book){
    BOOK_ARR.push(book);
    localStorage.setItem("booksNoJSON", BOOK_ARR)
    localStorage.setItem("books", JSON.stringify(BOOK_ARR));
    
}

