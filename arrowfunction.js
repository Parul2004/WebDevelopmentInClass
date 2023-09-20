// function statement

function add1(x,y){
    return x+y;
}

// this is function expression
let add2 = function (x,y){
    return x+y;
}

// arrow function

let add3 = (x,y) =>{
    // multiple line function x
    console.log("hello Kinmeen");
     return x+y;
}
console.log(add3(3,5));

// arrow function in one-line (no need to write return)
let add4 = (x,y) => x+y; 
console.log(add4(56,4));




