console.log("Hello PArul Sura");
const num = 454;
console.log(num);

// num = 23; ERROR
// console.log(num);


let num1 = 23;
console.log(num1)

num1 = 56;
console.log("let num1 is : "+num1);
console.log(num1);

/*

In var we can redeclare
but in let we cann't redeclare

*/
var num2 = 76;
var num2 = 56;
console.log("Var num2 is "+num2);


if(true){
    let a = 54;
    var b = 6;
}
// not in same block
// console.log(a);
// but in case of Var it will came
console.log(b);

function fun(){
    if(true){
        // let name = "Dev";
        var age = 100;
        // console.log(name,age);
    }
    // console.log(name);
    console.log(age);
}

fun();
// console.log(name,age);

// "let" is block scope and "var" is function scope


let isAdult = true;
console.log(typeof(isAdult));

let myNum = 556;
console.log(typeof(myNum));

let myFloat = 4.54;
console.log(typeof(myFloat));

let myStr = "Parul Sura";
console.log(typeof(myStr));

// we can put string in single quote also

myStr = 'Kinmeen';
console.log(typeof(myStr));

console.log(1+2);
console.log(1+"2");
console.log(typeof(1+"2"));
console.log("hi" + "Bye");


let str1 = "Hi";
console.log(str1*3);

console.log(str1/100);

console.log(str1-199);

console.log(str1+1102);

console.log(typeof(NaN));

console.log(typeof(Infinity));

let name = "Parul";
let greeting = name + " nice to meet u";
console.log(greeting);


// Equality

console.log(2==2);
console.log(2=='2');


console.log(2==='2');
console.log('' == 0);
console.log(0 == false);
console.log(typeof(''));
console.log(typeof(0 == false));