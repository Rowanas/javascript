"use strict"

//selectors

let number1 = document.querySelector("#number1");
let number2 = document.querySelector("#number2");
let calcButton = document.querySelector("#calcButton");
let mainDiv = document.querySelector("#mainDiv");
let operations = document.querySelector("#operations");


//functionality
let calculate = () => {
    console.log("I'm working!");
    let value1 = parseInt(number1.value);
    let operate = operations.value;
    let value2 = parseInt(number2.value);
    let myValue = document.createTextNode("7");

    switch(operate) {
        case "+":
            myValue = document.createTextNode(`${value1+value2}`)
            break;
        case "-":
            myValue = document.createTextNode(`${value1-value2}`)
            break;
        case "/":
            myValue = document.createTextNode(`${value1/value2}`)
            break;
        case "*":
            myValue = document.createTextNode(`${value1*value2}`)
            break;
    }
// SHOULD append myValue to the mainDiv, but it won't. Scopes?

    mainDiv.appendChild(myValue);

}

//event listeners
calcButton.addEventListener("click", calculate);