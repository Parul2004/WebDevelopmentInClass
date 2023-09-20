
let x = 10;
let y = x;

console.log(x+" "+y);
y++;
console.log(x+" "+y);


let car1 = {
    topSpeed :200,
    color:"Black"
}

console.log(car1);

// const car2 = car1;
let car2 = car1;
car2.topSpeed = 300;

console.log(car1);
console.log(car2);