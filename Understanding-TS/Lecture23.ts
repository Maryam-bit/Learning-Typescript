// optional properties
// make any property of interface optional using ? before :

interface Named2 {
    readonly name?: string;
    outputName ?: string;
}

  class Person7 implements Named2 {
    name?: string;
    constructor(n?: string) {
      this.name = n;
    }
  }
  
  let user6: Named2;
  user6 = new Person7();
  