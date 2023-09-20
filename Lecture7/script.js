// document.querySeclector('#container'); --> it will select only one element
// document.querySeclectorAll('#container'); --> it will select all element
// document.querySeclectorAll('#container p');
// document.querySeclectorAll('#container > p');

let p2 = document.querySelector(".two");
console.log(p2);

// content changing
p2.textContent = "para 2";

// changing the styling
p2.style.backgroundColor = "red";
p2.style.color = "black";