//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "spiderman", "doga"];
let myObj = {
    name: "Abhishek",
    age: 22,
}
//console.log(typeof heros);
//console.log(typeof myObj);
//console.log(typeof score);
//console.log(typeof isLoggedIn);
//console.log(typeof outsideTemp);
//console.log(typeof userEmail);
///console.log(typeof id);
//console.log(typeof anotherId);
//console.log(typeof myObj.name);
//console.log(typeof myObj.age);
//console.log(typeof myObj);
//console.log(typeof myObj["name"]);

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);