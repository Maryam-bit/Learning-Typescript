// Readonly interface properties
// public or private keywords not allowed, but readonly is

interface Greetabl3 {
  readonly name: string;
}

class Person implements Greetabl3 {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
}

let user3: Greetabl3;
user3 = new Person("Maxim");

user3.name = "Maryam Noor"; // error becuase name is read only
