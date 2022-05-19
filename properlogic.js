"use strict";

//for loop in JS exactly the same as in JAva
for (let i = 0; i <5; i++) {
    console.log(i)
}

//while loop in JS, probably exactly the same as well.
let whiler = true
let counter = 0
while (whiler && counter<5)    {
    console.log("It works");
    counter++;
}

let A = 100;
while (A<=199)  {
    A++;
    console.log(A);
}

let B = 100;
while (B<=199)  {
if (B%2 == 0)   {
    console.log("*");
}   else    {
    console.log("-");
}
B++
}

for (let i = 0; i <10; i++) {
    for (let j =0; j <=10; j++) {
        console.log(j);
    }
}
// could assign to an array and return. 0=sunday etc, as it does in now.getDay();

let weekday = true;
let day = "Wednesday";
while (weekday)   {
switch (day.toLowerCase())    {
    case "monday":
        console.log("Monday");
    case "tuesday":
        console.log("Tuesday");
    case "wednesday":
        console.log("Wednesday");
    case "thursday":
        console.log("Thursday");
    case "friday":
        console.log("Friday");
    case "saturday":
        console.log("Saturday");
    case "sunday":
        console.log("Sunday");
        weekday = false;
        break;
    default:
        console.log("Please enter a day of the week");
        weekday = false;

}
}

//Ternary ifs
//standard code
// let age;
// if (num1+num2<20)   {
//         age=10;
// }   else    {
//     age = 20;
// }

// Ternary version
//after ? if true:if false
let num1 = 12;
let num2 = 14;
let age = (num1 + num2 <20)? 10:20