let students = [
  { name: "A", marks: 0 }, // false
  { name: "B", marks: 45 }, // true
  { name: "C", marks: 80 }, //  
  { name: "D", marks: 100 },
  { name: "E", marks: 15 },
];

function hasPasses(student) {
  if (student.marks > 30) return true;
  else return false;
}

let passesStudents = students.filter(hasPasses);
console.log(passesStudents);

let firstPassed = students.find(hasPasses);
console.log(firstPassed);

// check if every result is true if all are true then return true otherwise not
let passedStudentsOrNot = students.every(hasPasses);
console.log(passedStudentsOrNot);

// old item --> {name:"a",marks:"4"};
// new item --> "A"
let passedStudents = students.filter(hasPasses);
let passesNames = passedStudents.map(students=>students.name); 
console.log(passesNames);

let passesNames1 = students.filter(hasPasses).map(students=>students.name);
console.log(passesNames1);

// 0949
