// Decorator Factories
// Returns a decorator function
// decorator factories give us more power and more possibilities of configuring 
// what the decorator then does internally

// let's convert this function into a factory
function Logger2(logString: string) {
    return function(constructor: Function) {
        console.log(logString)
        console.log(constructor)
    };
}

@Logger2("LOGGING - PERSON")

class Person2 {
    name = "Max";
    constructor() {
        console.log("Creating person object .,...")
    }
}

const pers2  = new Person2();

console.log(pers2)

