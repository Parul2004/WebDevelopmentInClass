let s = "Good morning";
let result = s.includes("mor");
console.log(result);

let idx = s.indexOf('mor');
console.log(idx);

let lastidx = s.lastIndexOf('o');
console.log(lastidx);

// converting string into array

let arr1 = s.split();
console.log(arr1);

// spliting into words
let arr2 = s.split(' ');
console.log(arr2);

// spliting every character by empty string
let arr3 = s.split('');
console.log(arr3);

let arr4 = [1,2,3];
let arr5 = [4,5,6];

// concating the array
let joinedArr45 = arr4.concat(arr5);
console.log(joinedArr45);

 