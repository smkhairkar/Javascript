//array

const myfirstArr = [0,1,2,3,4,5,6,7,8,9,"Sujata"]; //they are resizeable

console.log(myfirstArr[1]);


//Array methods
myfirstArr.push(10);
console.log(myfirstArr);
console.log(myfirstArr[1]);

myfirstArr.pop(10);
console.log(myfirstArr);


myfirstArr.unshift(9)
console.log(myfirstArr);
myfirstArr.shift()

console.log(myfirstArr);

console.log(myfirstArr.includes(0));

console.log(myfirstArr.indexOf(0));

const newArr = myfirstArr.join()

console.log(myfirstArr);
console.log(typeof newArr);
console.log(typeof myfirstArr)




//slice, splice

console.log("A", myfirstArr);

const myn1 = myfirstArr.slice(0,4)
console.log(myn1);
console.log("B ", myfirstArr);

const myn2 = myfirstArr.splice(1,5)
console.log("C", myn2);
console.log(myn2);
f