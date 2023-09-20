let nums = [1,2,3,4,5];

// for loop

for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    console.log(element);
}

// for...in loop
console.log("By for in loop : ")
let num2 = [3,4,56,6,7];

for (const key in num2) {
    // console.log(num2[key]); // isse index print hote hai
   console.log(num2[key]);
}

// for...of loop

// for of se element print honge array ke but for in se index
let str = ["parul","khyati","muskan gupta","muskan aggarwal"];
for (const key of str) {
   console.log(key);
}