// Array is used for Packing
// Objects is used in key:value pair
const names = ["Dev","Rohan","Dogra"];

// const firstName = names[0];
// const lastName = names[1];

// console.log(firstName,lastName);



// this is called destructuring
// Destructuring is used for unPacking
// const [firstName,middleName,lastName] = names; 
// middleName has draback kyuki middleName ka kuchh use nhi kar rahe
// so we can put space to remove DrawBack
const [firstName,,lastName] = names; 
console.log(firstName,lastName);



const car = {
    topSpeed:289,
    color:"red",
    price:10000000000000
}

// object ko destructure karna

// const {topSpeed,color} = car;
// console.log(topSpeed+" "+color);
// here topSped ke value nikal ke speed me dale hai or using ":" you can rename the name of topSpeed
const {topSpeed:speed,color} = car;
// console.log(topSpeed+" "+color); // error kyuki topSpeed ko reName kar diya tha
console.log(speed+" "+color);

let [a,b] = [100,200];
console.log(a+" "+b);
let x = 10;
let y = 20;

// Swapping
// [a,b] = [x,y];
[b,a] = [a,b];
console.log(b+" "+a);


// function printCar(car){



//     // let carColor = car.color;
//     // let carPrice = car.price;
//     // console.log(carColor+"  ---> "+ carPrice);


//     const {color,price} = car;
//     console.log(color+" "+price);
// }


function printCar({color,price}){



    // let carColor = car.color;
    // let carPrice = car.price;
    // console.log(carColor+"  ---> "+ carPrice);


   // const {color,price} = car;
    console.log(color+" "+price);
}

printCar(car);