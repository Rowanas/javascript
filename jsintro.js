//strictmode
"use strict";

//lets and const. do not use var. non-lets, non-const are automatically vars, don't do it, this isn't python.
let forename = "Rowan";
let surname = "Baker";
const whereFrom = "Edinburgh";
const starSign = "Scorpio";

const currentCar = "Seat Leon";
let currentBoot = "full";


console.log(forename);
console.log(surname);
console.log(whereFrom);
console.log(starSign);
console.log(`My car is a ${currentCar} and my boot is ${currentBoot}`);
console.log("My car is %c a "+currentCar,"color: yellow");
console.log(`%c My car is a ${currentCar} and my boot is ${currentBoot}`,`color:green`);

//Template literals
let a;
let b = "12345";
let c = 12344;
let d = true;
let e = {a:"JavaScript"};

typeof(a);
typeof(b);
typeof(c);
typeof(d);
typeof(e);

let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay;

console.log(`The total bill is ${totalMoney}. the remaining amount of money to be paid is ${totalMoney-moneyPaidSoFar}.`);

// If you've got no semicolons, your code will be semishit.
console.log(forename)
console.log(surname)
console.log(whereFrom)
console.log(starSign)
console.log(`My car is a ${currentCar} and my boot is ${currentBoot}`)
console.log("My car is %c a "+currentCar,"color: yellow")
console.log(`%c My car is a ${currentCar} and my boot is ${currentBoot}`,`color:green`)
