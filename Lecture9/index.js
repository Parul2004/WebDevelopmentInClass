const clickme = document.querySelector(".clickme");
console.log(clickme);

function warn() {
    alert("warning!!!");
}

const greet = () => {
    alert("hello");
}

// warn wala function run ho jaega when we click a button 
// this is called event



// clickme.onclick = warn;
// clickme.onclick = greet;

// this above is like
let a = 10;
a = 20;

// clickme.addEventListener(eventName,functionWhichWeToRun)
// clickme.addEventListener("click",warn);

// passing complete function instead of its name
// calling function inside function is called callback 
// clickme.addEventListener("click",function warn() {
//     alert("warning!!!");
// });

// clickme.addEventListener("click",greet);
// clickme.addEventListener("click",() => {
//     alert("hello");
// });

// function eventHandlers(event){
//     console.log("I am eventHandler()");
//     console.log(event);
//     console.log(event.target);
//     console.log(event.timeStamp);
//     console.log(event.x,event.y);
// }

// clickme.addEventListener("click",eventHandlers);

// clickme.addEventListener("click",function(event) {
//     console.log("I am eventHandler()");
//     console.log(event);
//     console.log(event.target);
//     console.log(event.timeStamp);
//     console.log(event.x,event.y);
// }
// );

// addEventListener will atomatically give arugument(object) to the function when it call it
clickme.addEventListener("click",(event) => {
    console.log("I am eventHandler()");
    console.log(event);
    console.log(event.target);
    console.log(event.timeStamp);
    console.log(event.x,event.y);
}
);


const myInput = document.querySelector("#myInput");
myInput.addEventListener("keydown",(event)=>{
    const pressedKey = event.key;
    console.log("You pressed "+pressedKey)
})