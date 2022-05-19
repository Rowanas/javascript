"use strict";

//object are not instantiated classes like every other language. They're key-value pairs.
//since they're just hopped-up arrays, you can nest objects.

//object literal notation
let rowan = {forename: "Rowan", surname: "Baker"};

//square bracket assignation
let elias = new Object();
elias["forename"] = "Elias";
elias["surname"] = "Sadek";

//dot notation
let alex = new Object();
alex.forename = "Alex";
alex.surname = "Chafey";

//you can use any of the above notation to 
console.log(`${alex.forename}'s second name is ${elias["surname"]}`);

//expando properties
alex.makesTea = true;
console.log(alex);

//for in loop which is for getting keys
for (let key in alex)   {
    console.log(key);
}

//for of loop
for (let value of Object.values(alex)) {
    console.log(value);
}

//now on to arrays!
let firstArray = ["firstitem","false",3.79,]
for (let value of firstArray)   {
    console.log(value);
}

let darthVader = new Object();
darthVader.allegiance = "Empire";
darthVader.weapon = "lightsabre";
darthVader.sith = true;

console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is to the ${darthVader.weapon}`);
console.log(`Darth Vader's is a sith? ${darthVader.sith}`);
console.log(`Darth Vader's is a jedi? ${darthVader.sith ? "false" : "true"}`);

let myArray = ["hello", "everyone"];
console.log(myArray.length);
myArray.push("I", "am", "Rowan");
console.log(myArray.length);
myArray.shift();
console.log(myArray.length);
//splice sets at which index removal begins and how many subsequent indices it covers.
myArray.splice(2,1);
for (let value of myArray)   {
    console.log(value);
}
console.log(myArray.length);

//JSON
//JSON objects must have double quoted strings as keys
let myJSONObj  =    {};
myJSONObj.string = "strongstring";

console.log(myJSONObj.string);

//stringification to send via JSON
let myJSObject = { //javascript object
    name : "Rowan"
}
let myStringObject = JSON.stringify(myJSObject); //stringifiied for JSON objects

//destructuring, getting all the shinies out of something else
let [ele1, ele2, ele3] = myArray;
console.log(ele1, ele2, ele3);

//destructuring into new variable. Old variable is unchanged
let  myNumArray = [1,2,3,4,5,6,7,8,9];
let [a,b,c,...otherNums] = myNumArray;
console.log(otherNums)

//destructuring with skippididoos. Old variable is unchanged
//each , skips another
let [d,,e,,,...otherNums2] = myNumArray;
console.log(otherNums2)

let user = {
name: "John",
years: 30
};

let {name, years, isAdmin =false} = user;
alert(name);
alert(years);
alert(isAdmin);


