// select the input
// const input = document.querySelector("input");
// const todoName = input.value;
// console.log(todoName);


const input = document.querySelector("input");
const list = document.querySelector("ol");
const btn = document.querySelector("button");
function addTodo() {
    const todoName = input.value;
    const li = document.createElement("li");
    li.textContent = todoName;
    list.appendChild(li);

    input.value = ""; // To empty the input field
    // list.append(el1,ele2,ele3); // more than 2 element u can add
    // list.appendChild(ele1); // only 1 element u can add
    console.log(todoName);
}
btn.addEventListener("click",addTodo);