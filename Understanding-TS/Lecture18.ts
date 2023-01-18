// Interfaces

interface Person {
    name: string;
    age: number;
    // title: string = "acb"; // !error, we can not initialize value in interface
    greet(phrase: string): void;
}

let user1: Person;
user1 = {
    name: "maryam",
    age: 12,
    greet(phrase: string) {
        console.log(phrase + " " + this.name)
    }
}

user1.greet("Hi there!!")