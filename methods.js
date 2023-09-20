// this is methods
// method ---> when function is a property of object then it is known as method.

const animal = {
    species : "Cat",
    age : 7,
    makeSound:function(){
        console.log("Hello Meow");
    },
    speak:function(){
        // this is referring to object
        console.log(this);
        console.log("I am a "+this.species);
    }
}
// function are first class citizens
animal.species;
animal.makeSound();
animal.speak();



