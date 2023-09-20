const task1 = () => console.log("Task 1 done");
const task2 = () => console.log("Task 2 done");


// represents a long running task that takes 5 secs to finish
// function longTask() {
//     const startTime = Date.now();
//     const endTime = startTime+5000;
//     while (Date.now() < endTime) {
        
//     }
//     console.log("Long task Done");
// }
// Loops are always blocking in nature

function longTask() {

    // setTimeOut function brower ka part hai chrome provide karta hai , it is not a part of Core JavaScript 
    // setTimeout(function,duration)
    // f is here callback function

    // callback hell - is the disAdvantages of Ansynchronces
    setTimeout(()=>{
        console.log("Long Task Run");
    },5000);
    
}
task1();
longTask();
task2();