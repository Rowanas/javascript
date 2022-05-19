"use strict";

//function declaration - don't use, these get hoisted
function functionName(parameters) {
    console.log(parameters);
}
functionName(7);

//function expressions - do use, as they don't get hoisted
let theFuncExpress = function(parameters) {
    console.log(parameters);
}
theFuncExpress(7);

//arrow functions - most modern funtion expression
let myArrowFunc = (parameters) =>   {console.log(parameters)}

//to RETURN a single statement, minimised version
let myArrowFunc2 = (parameters) =>  parameters;

let subFunc = (num1, num2) =>   num1-num2;
console.log(subFunc(7,9));

let welcomeFunc = (name, age, gender) => `My name is ${name} and I am ${age}. I am a ${gender}.`;
console.log(welcomeFunc("Rowan","31", "male"));

let powerUpFunc = (n1, n2) => (n1**n2);
console.log(powerUpFunc(3,-4));