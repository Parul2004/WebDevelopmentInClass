// mostly data is the form of JSON
// data ko store karne ka format is --> JSON
// JSON --> JavaScript Object Notation
// JSON --> me hm data javaScript objects ke form me store karte hai
// extension of JSON is : .json

const car = {
    speed:200,
    color:"red"
}

// Math library function
// Math.max()
// Math.round()

// it will convert object into JSON
// JS Object ---> JSON
let carJSON = JSON.stringify(car);
console.log(carJSON);
console.log(typeof carJSON);

// how to convert json string to js object
// JSON ---> JS object

let carObject = JSON.parse(carJSON);
console.log(carObject);
console.log(typeof carObject);