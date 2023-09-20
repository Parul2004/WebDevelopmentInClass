let nums = [1,2,3,4,5];
function double(num) {
    return num*2;
}

let output = nums.map(double);
console.log(output);
// original array will not change
console.log(nums);

let doubleArrow = (num) => num*2;
console.log(doubleArrow);

let doubleArrow1 = nums.map(nums=>nums*2);
console.log(doubleArrow1);

