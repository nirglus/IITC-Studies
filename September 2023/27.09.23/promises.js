fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => { //gets an array from the URL
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    })