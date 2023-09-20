console.log("This is exercise 1");

const obj1 = {
    name:"Parul",
    age:19,
    hobbies:["Boxing","Gaming","Reading"],
    location:{
        country:"India",
        state:"Haryana",
        city:"Hisar"
    }
}

console.log(obj1.name);
console.log(obj1.age);

for (let index = 0; index < obj1.hobbies.length; index++) {
    const element = obj1.hobbies[index];
    console.log(index+" ==> "+element);
}

for (const key in obj1.location) {
     console.log(key+" ==> "+obj1.location.key);
}