const num = [1,2,3,4];

// console.log(typeof(num));
console.log(typeof num);

// length of array
console.log(num.length);
console.log(num);

num[0] = 107;
console.log(num[0]);

num[10] = 43143;
console.log(num[10]);

console.log(num);

console.log(num[99]);

num.push(21);
console.log(num);
console.log(num.length);


num.pop();
console.log(num);
console.log(num.length);