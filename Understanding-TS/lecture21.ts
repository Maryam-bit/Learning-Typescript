// Extending Interface
// Use the split the interfaces into multiple parts

interface Named {
    readonly name: string;
}

interface Greetable4 extends Named {
    greet(phrase: string): void;
}

// extend more than one 
// interface Greetable4 extends Named , AnotherName {}

  class Person6 implements Greetable4 {
    name: string;
    constructor(n: string) {
      this.name = n;
    }
    greet(phrase: string) {
        console.log(phrase + " " + this.name)
    }
  }
  
  let user4: Greetable4;
  user4 = new Person6("Maxim");
  