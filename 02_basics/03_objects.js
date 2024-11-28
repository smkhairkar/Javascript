//singleton

// object literals

// Object.create

const JSUser = {
    name: "Sujata",
    "full name": "Sujata Khairkar",
    age: 23,
    [mySym] : "key1",
    location: "Ahemdabad",
    email: "sujata@gmail.com",
    isLoggedIn :false,
    lastLoginDays : ["Monday", "Saturday"]
}
//how to access:-
console.log(JSUser.email);
console.log(JSUser["email"]);
console.log(JSUser["full name"]);
//console.log(JSUser.mySym); ===WRONG

console.log(JSUser[mySym])

//overwrite
JSUser.email = "sujata@chatgpt.com"
//Object.freeze(JSUser)
JSUser,email="sujata@chatgpt.com"

console.log(JSUser);

JSUser.greeting = function(){
    console.log("Hello JS User");

}

JSUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);

}
console.log(JSUser.greeting());
console.log(JSUser.greetingTwo());
