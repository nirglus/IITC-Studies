const BOOK_ARR = [{title: "The Godftaer",
author: "Mario Puzo",
page: 433},
{title: "The Godfather Returns",
author: "Mark Winegardner",
page: 448},
{title: "The Lazy Investor",
author: "Tamir Mendelovsky",
page: 200}];

document.getElementById('add').addEventListener("click", () =>{
    const NEW_BOOK = {
        title: `${document.getElementById("title").value}`,
        author: `${document.getElementById("author").value}`,
        page: `${document.getElementById("pages").value}`
    }
    BOOK_ARR.push(NEW_BOOK);
    console.log(BOOK_ARR);
})

