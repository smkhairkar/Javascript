const marvel_heros = ["thor","ironman","spiderman"];

const dc_heros = ["superman","flash","batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
const allHeros = marvel_heros.concat(dc_heros)

console.log(allHeros);


const all_new_Heros = [...marvel_heros,...dc_heros]

console.log(all_new_Heros);


const another_Array = [1,2,3,[4,5,6], 8,9];
const real_anotherArray = another_Array.flat(Infinity);

console.log(real_anotherArray);

console.log(Array.isArray("Sujata"));
console.log(Array.from("Sujata"));
console.log(Array.from({name : "SUJATA"})); //INTERESTING

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
