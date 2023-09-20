let x = getten();
console.log(x);
// add(f);

function getten() {
    return 10;
}

function add(x,y) {
    return x+y;
}

let addTwoNumbers = add(1,2);
console.log(addTwoNumbers);

// Anonymous Function --> a function which doesn't have name
let subtract = function (x,y) {
    return x+y;
}

console.log(subtract(54,6));

