let name = "Parul";
let age = 19;

let intro1 = "Hi my name is "+name+" and I am "+age+" yrs old";
console.log(intro1);

// string can created by back thiks

let intro2 = `Hi my name is ${name} and I am ${age} yrs old`; // this is called Template Strings
console.log(intro2);

let nums = [1,2,4];
const car = {
    speed:20,
    color:"blue"
}

console.log(car["speed"]);
console.log(typeof(nums));
console.log(typeof(car));

// check if array is Array is not --> if array then return true otherwise false
console.log(Array.isArray(nums));