//primitive(they are call by value)

//7 types: string, numbers, boolean,null,undefined,symbol,bigint

//Non- primitive (reference type )

//Arrays, objects, functions

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;



const id = Symbol('123')

const anotherID = Symbol('123')

console.log(id == anotherID)




const bigNumber = 123456352234n;

console.log(typeof(bigNumber));


const heros = ["shaktiman", "naagraj","doga"]; //arrays


let myObj = {

    name:'Sujata',
    age: 22,
}


const myfunction = function(){
console.log("hello, world!")
}


console.log(myfunction);

//type of undefined is UNDEFINED;
let emailID;
console.log(typeof emailID);
//type of null IS OBJECT
console.log(typeof null);
//type of boolean IS boolean
let isloggedin = true;
console.log(typeof isloggedin)

//type of number IS number
let Number_a =23;
console.log(typeof(Number_a));

//type of string IS string
let firstname = "Sujata";
console.log(typeof firstname);

console.log(typeof heros);

console.log(typeof myfunction);




// https://262.ecma-international.org/5.1/#sec-11.4.3
