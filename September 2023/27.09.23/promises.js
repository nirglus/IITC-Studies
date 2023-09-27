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
    .then(data => {
        console.log(data);
        for(const obj of data){
            for(const key in obj){
                document.body.innerHTML += `<p>${key} : ${obj[key]}</p>`;
            }
        }
    })
    .catch(error =>{
        console.log(error);
    })