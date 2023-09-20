console.log("method.js");

let nums = [1,2,3,4,5,6];

// printing a arrat in JS
console.log(nums);

// pushing element into array
nums.push(7);
console.log(nums);

// removing the last element
nums.pop();
console.log(nums);

// whether a element is in array or not
let result = nums.includes(4);
console.log(result);

// insert at front
nums.unshift(1007);
console.log(nums);

// remove from front
nums.shift();
console.log(nums);

// get subArray --> get a slice of array (start,end+1);

console.log(nums.slice(2,4));

// deleting a subArray --> splice(start,deleteCount --> how many element u want to delete) (original array me change hoga)
console.log(nums.splice(2,3));

console.log(nums);

