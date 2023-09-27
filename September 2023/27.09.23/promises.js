// Fetch format
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => { //gets an array from the URL
        console.log(response);
        return response.json(); // passes the response.json to the next .then func
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })

// Fetch Exercise

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        console.log(res);
        return res.json();
    })
    // .then(data => {
    //     console.log(data);
    //     for(const obj of data){
    //         for(const key in obj){
    //             document.body.innerHTML += `<p>${key} : ${obj[key]}</p>`;
    //         }
    //     }
    // })
    .then(data =>{
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })


fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => {
        console.log(res);
        return res.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

    
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response =>{
        console.log(response);
        return response.json();
    })
    // .then(data => {
    //     console.log(data);
    //     for(const obj of data){
    //         for(const key in obj){
    //             document.body.innerHTML += `<p>${key} : ${obj[key]}</p>`;
    //         }
    //     }
    // })
    // .then(data =>{
    //     console.log(data);
    //     const container = document.getElementById("container");
    //     container.innerHTML += data.map(item =>
    //         `<div>
    //         <h3>${item.title}</h3>
    //         <p>${item.body}</p>
    //         </div>`
    //     ).join("");
    // })
    .catch(error =>{
        console.log(error);
    })
function fetchJoke(){
    fetch("https://api.chucknorris.io/jokes/random")
       .then(response =>{
        return response.json();
       })
       .then(data => {
        const chuck = document.getElementById("chuck");
        chuck.innerHTML = `<h2>${data.value}</h2>`
       })
       .catch(err => {
        console.log(err);
        console.error(err); // Bolds the error with red color
       })
}
refresh.addEventListener("click", fetchJoke);
