const items = document.querySelectorAll("li");
for(let i = 0;i<items.length;i++){
    const item = items[i];
    const text = item.textContent;
    item.onclick = () => console.log(text);
    
}
// eventHandler will slow down the page as they are heavy(create load on webPage)

const li = document.createElement("li");
li.textContent = "Item-4";
// li.onclick = () => console.log("Item-4");
const ul = document.querySelector("ul");
ul.appendChild(li);


