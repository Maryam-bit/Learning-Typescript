// namespace in typescript
// block of code 

// what is namespace
// how to use it
// example for namespace


namespace App {
    export class Users {
        getName () {
            return "Max"
        }
    }

    export interface UserObj {
        name: string,
        email: string
    }
}

let u1 = new App.Users();

console.warn(u1.getName())