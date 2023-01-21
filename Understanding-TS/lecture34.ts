// Constraints

// let's go with this example
// this function should only take an object all times,  but currentlty it's taking 
// any type. 
// here we want to restrict the type of T and U  
//  we can do that using type constraints

// ---- without constraints
function merge3<T, U>(objA: T, objB: U) {
    return  { ...objA, ...objB };
}

// if we pass any literal instead of object, 
// it would not be merged into another obj.
const mergeObj3 = merge3({name: "Max"}, 14)
console.log(mergeObj3) // { name: 'Max' }


// ----- with constraints -----
function merge4<T extends object, U extends object>(objA: T, objB: U) {
    return  { ...objA, ...objB };
}

const mergeObj4 = merge4({name: "Max"}, 14) // error
const mergeObj5 = merge4({name: "Max"}, {age: 14}) // error
console.log(mergeObj5) // { name: 'Max', age: 14 }