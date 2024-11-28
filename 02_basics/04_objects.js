//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id ="123abc"
tinderUser.name = "Sujata"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmmail.com",
    fullname:{
        userfulname: {
            firstname: "sujata",
            lastname: "Choudhary"
        }
    }
} 

//console.log(regularUser.fullname?.userfulname.firstname);


const obj1 = {1:"a", 2:"b"}

const obj2 = {3:"a", 4:"b"}

//const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)

// console.log(obj3)

const obj3 = {...obj1, ...obj2}

//console.log(obj3)

const users = [
    {
        id: 1,
        email:"s@gmail.com"
    },
    {
        id:2,
        email:"a@gmail.com"
    },
    {

    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));