const container = document.querySelector(".container");
console.log(container);

const items = document.querySelectorAll(".container > div");
console.log(items);

// taking first item -- as items are list
items[0].textContent = "Item 1";
// taking 2nd item
items[1].textContent = "Item 2";
// taking 3rd item
items[2].textContent = "Item 3";

// better way of doing is to looping

// removing Elements
const item2 = items[1];
item2.remove();

// Adding Elements
// Creating element
const newItem = document.createElement("div");
container.appendChild(newItem);
newItem.textContent = "Item 4";


// adding classes
container.classList.add("blueColor");
// removing classes
// container.classList.remove("blueColor");

// if container.classList contains "blueColor" class 
// then it will remove it otherwise not present then add 

// toggle means switch
container.classList.toggle("blueColor");