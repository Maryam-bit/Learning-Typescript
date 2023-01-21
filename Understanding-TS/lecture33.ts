// Create a Generic functions

// merges two object and return new obj 
// ---- without generics ------
function merge1(objA: object, objB: object)  {
    return  { ...objA, ...objB };
}

const mergeObj1 = merge1({name: "Max"}, {age: 3}) // object type

// mergeObj1.age; // Property 'age' does not exist on type 'void'.ts(2339)




// ----- using generics ----- 
// this function retuns intersection of these two (T and U) types 
// here we are telling TS that which types our function should fill in by adding angle brackets after the func
function merge2<T, U>(objA: T, objB: U) {
    return  { ...objA, ...objB };
}

// here type of mergeObj is inferred as { name: string; } & { age: number; }
const mergeObj2 = merge2({name: "Max"}, {age: 14})

// you can also define types here on function call like this
// but you don't really need to do this since typescript automatically infer it's type
const mergeObj3 = merge2<{name: string}, {age: number}>({name: "Max"}, {age: 14})
console.log(mergeObj2.age, mergeObj2.name)