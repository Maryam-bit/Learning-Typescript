// unknown type, we can store any type without getting errors
// unknown type is different from any ,. let's see how

let userInput:  unknown;
let userName: string;
userInput = 5;
userInput = 'Max'
// userName = userInput // !!! this will fail becuase unknown is not guarenteed to be a string, this will fix if we convert unknown to any type

// unknown is not a type you should you everytime, but its better choice over any, so to avoid the error we would need to add check
if(typeof userInput === 'string') {
    userName = userInput
}