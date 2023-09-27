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