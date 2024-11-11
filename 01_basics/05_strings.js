const name = "Sujata"
const repoCount = 50

//console,log(name + repCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//declare string
const gameName = new String("TempleRun") ;

console.log(gameName[4]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('R'));
console.log(gameName.substring(0,5));
console.log(gameName.slice(-9,4));
const newStringOne = "  Sujata   ";
console.log(newStringOne.trim());

const url = "https://sujata.com/sujata%20Khairkar"

console.log(url.replace('%20', '-'))

console.log(url.includes('sujata'));

const schoolName = "Ramabai-Deshmukh-Public-School";
console.log(schoolName.split('-'));
