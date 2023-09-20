
const catName = "Tom";
function cat() {
    let hunger = 0;
    console.log(catName);
    console.log(hunger);

    if(true){
        let color = "pink";
    }
    
    // console.log(color); local scope
    console.log(catName);
    console.log(hunger);

    function walk(){
         const activity = "walking...";
         hunger+=1;
         console.log(activity,hunger); 
        //  return 10;
    }

    function eat() {
        const activity = "Eating...";
        hunger-=1;
        console.log(activity,hunger);
    }
    // walk();
    // return walk;

    /* returing multiple functions */
    // return {
    //   walk:walk,
    //   eat:eat
    // }

    return {
      walk,
      eat
    }
   
}
// cat();
// const walk = cat();
// walk();
// console.log(walk);

// const catFunctions = cat();
// const {walk,eat} = catFunctions;
// or
const {walk,eat} = cat();
walk();
walk();
eat();
