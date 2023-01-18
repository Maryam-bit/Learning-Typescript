// Interface only works with object, we can also achieve same with custom type , but the interfaces gives us the clear idea that
// this declaration is for object
// also allow us to share functionality amongst different classes

interface Greetable {
    name: string;
    greet(phrase: string): void;
}


class Person implements Greetable {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
    greet(phrase: string) {
        console.log(phrase + " " + this.name)
    }
} 

let user2: Greetable
user2 = new Person("Maxim");
user2.greet("HI there - I am")