"use strict"
//global scope variables

let incNumber =0;

// Selectors
let mainDiv = document.querySelector("#biggusDivvus");
let newCountDiv = document.querySelector("#newCountDiv");
let newSaveDiv = document.querySelector("#newSaveDiv");
let incButton = document.querySelector("#incButton");
let saveButton = document.querySelector("#saveButton");

//Functions
    let incCounter = () => {
        incNumber++;
        let newCount = document.createTextNode(incNumber);
        newCountDiv.innerHTML = "";
        newCountDiv.appendChild(newCount);
    }

    let saveNumber = () => {
        let newSave = document.createTextNode(incNumber);
        // newSaveDiv.innerHTML = "";
        newSaveDiv.appendChild(newSave);
    }

//Event listeners
 incButton.addEventListener("click", incCounter);
 saveButton.addEventListener("click", saveNumber);