// here we are not using multiple eventHandler 
// previous file me we are multiple eventHandgler which is wrong

const ul = document.querySelector("ul");
ul.addEventListener("click",(eventObject)=>{
    // target --> jis element pe hmne click kiya
    const clicked = eventObject.target;

    if(clicked.matches("li")){
        clicked.style.backgroundColor = "aqua";
    }
    else{
        return;
    }
    console.log(clicked)
})

const li = document.createElement("li");
li.textContent = "Item-4";
ul.appendChild(li);