function greet(){
    console.log("Hello");
}

let explode = function(){
    console.log("Boom");
}

function repeat(n,f){
    for(let i = 0;i<n;i++){
        f();
    }
}
// greet as a callback
repeat(5,greet);

let m = 3;
repeat(m,explode);

repeat(3,function(){
        console.log("Boom");
    })