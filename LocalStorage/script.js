// to access localStorage
// key:name
// value:parul

localStorage .setItem('name','parul');
localStorage .setItem('age','19');

const name = localStorage.getItem('name');
console.log(name);
const age = localStorage.getItem('age');
console.log(age);

// to remove a specific item
localStorage.removeItem('name');

// to remove all items
localStorage.clear();

// har local storage ka url alag hota hai

