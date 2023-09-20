console.log("This tutorial is for function");

// syntax of function
function add(x,y){
    return x+y;
}

let sum = add(10,20);
console.log(sum);

// here default value is given name = "Person"
function greet(name = "Person") {
    console.log(`Hello ${name}`); // template strings
}
greet("Parul");

greet(); // it will give Hello undefined




