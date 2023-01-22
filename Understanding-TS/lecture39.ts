// Decorator 
// Decorators in Typescript are used to add additional behavior
// or metadata to a class, method or property.
// A first class decorator 

function Logger(constructor: Function) {
    console.log("Logging .....")
    console.log(constructor)
}

// @ is a special identififer that identifies the function as decorator
// decorators executes when your class is defined, not istantiated
@Logger // logs the whole Person class

class Person {
    name = "Max";
    constructor() {
        console.log("Creating person object .,...")
    }
}

const pers  = new Person();

console.log(pers)