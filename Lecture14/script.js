const input = document.querySelector("input");
const list = document.querySelector("ul");
const btn = document.querySelector(".add");
const editBox = document.querySelector(".edit-box");
const editOk = document.querySelector(".edit-ok");
const editInput = document.querySelector(".edit-inp");

let id = 0;
localStorage.clear();

function addTodo() {
  const todoName = input.value;

  const li = document.createElement("li");
  li.style.display = "flex";
  li.style.justifyContent = "space-between";

  const newli_p = document.createElement("p");
  const newli_del = document.createElement("button");
  const newLi_edit = document.createElement("button");
  newLi_edit.textContent = "Edit";

  newli_p.textContent = todoName;
  newli_del.textContent = "Delete";
  newli_del.classList.add("del");
  newLi_edit.classList.add("edit");

  list.appendChild(li);
  li.appendChild(newli_p);
  li.appendChild(newli_del);
  li.appendChild(newLi_edit);

  input.value = "";
  console.log(todoName);

  // localStorage

  // localStorage.setItem(Date.now(), todoName);
  localStorage.setItem("Task" + id, todoName);
  let todo = localStorage.getItem("Task");
  console.log(todo);
  id++;
 
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

function editTodo(event) {
  const clicked = event.target;
  const clickedIsEditBtn = clicked.matches(".edit");
  if (clickedIsEditBtn == false) {
    return;
  } else {
    // show edit box
    editBox.classList.add("show");

    const li = clicked.parentElement;
    li.classList.add("currently-editing");
  }
}

function applyEdit(event) {
  const editValue = editInput.value;
  console.log(editValue);
  const currentlyEditingLi = document.querySelector(".currently-editing");
  currentlyEditingLi.firstChild.textContent = editValue;
  editInput.value = "";
  editBox.classList.remove("show");
}
btn.addEventListener("click", addTodo);
editOk.addEventListener("click", applyEdit);

list.addEventListener("click", editTodo);
list.addEventListener("click", removeTodo);
