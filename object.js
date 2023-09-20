const objPerson = {
    name:"Parul",
    age:19,
    likes:"chocolate",

}

console.log(objPerson.name);
console.log(objPerson.age);

objPerson.name = "Kinmeen";
// objPerson.age = 110;
objPerson.age++;

console.log(objPerson.name);
console.log(objPerson.age);

console.log(objPerson);


const input1 = "name";
const input2 = "age";

console.log(objPerson[input1]);
console.log(objPerson[input2]);



