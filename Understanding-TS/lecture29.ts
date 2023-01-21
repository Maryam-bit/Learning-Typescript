// Generics - built in generics
// A generic type is a type which is kind of connected with some other type.
//  It is really flexible regarding which exact type other type is
// string[]
const names = ["Max", "manuel"]

// never[]
const names1 = []

// Generic type 'Array<T>' requires 1 type argument(s).
// Array 
const names2: Array<string> = []; // string[]
// now TS would allow me to perform string operations on array elements 
names2[0].split(' ')


// promise
// TS will infer promise's return type as Promise<unknown>, if 
// we do not define generic type
const promise: Promise<any> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10)
    }, 2000);
})
promise.then(data => {
    data.split(' ');
})