// select the input
// const input = document.querySelector("input");
// const todoName = input.value;
// console.log(todoName);

const input = document.querySelector("input");
const list = document.querySelector("ul");
const btn = document.querySelector(".add");

function addTodo() {
  const todoName = input.value;

  const li = document.createElement("li");
  li.style.display = "flex";
  li.style.justifyContent = "space-between";
  const newli_p = document.createElement("p");
  const newli_del = document.createElement("button");

  // li.textContent = todoName;
  newli_p.textContent = todoName;
  newli_del.textContent = "Delete";
  
  newli_del.classList.add("del");

  list.appendChild(li);
  li.appendChild(newli_p);
  li.appendChild(newli_del);

  

  input.value = ""; // To empty the input field
  // list.append(el1,ele2,ele3); // more than 2 element u can add
  // list.appendChild(ele1); // only 1 element u can add
  console.log(todoName);
}
btn.addEventListener("click", addTodo);

function removeTodo() {
  const clicked = event.target;
  const clickedISDelBtn = clicked.matches(".del");
  if (clickedISDelBtn == false) {
    return;
  } else {
    console.log(clicked);
     const delLi = clicked.parentElement;
    //  delLi.remove();
    delLi.style.display = "none";
  }
}

list.addEventListener("click", removeTodo);


