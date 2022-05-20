"use strict";
// Selectors
let getButton = document.querySelector("#fetchData")
let results = document.querySelector("#results");



//HTTP requests - Request/Response
axios.get("https://reqres.in/api/users")
    .then((response) =>  {
        // res.data.data specific to reqres
        console.log(response.data.data);
    })
    .catch((error) => {
        console.error(error);
    })

//GET

//POST

//functions
let displayResult = (data) =>   {
    for (let entry of data) {
        const p = document.createElement("p");
        const text = document.createTextNode(`$(entry.first_name} $(entry.last_name} $(entry.email}`);
        p.appendChild(text);
        resultsDiv.appendChuild(p);
    }
}