// Abstract classes
// the abstracted method has to be implemented by any class based on this base (department) class

abstract class Department3 {
  protected employees: string[] = [];
  constructor(protected readonly id: string, public name: string) {}

 abstract describe(this: Department3): void;
}

class ITDepartment2 extends Department3 {
  constructor(id: string, public admins: string[]) {
    // super calls constructor of the base class from subclass
    super(id, "IT");

}
describe() {
    console.log("IT department : " + this.id);
}
}

const it2 = new ITDepartment2("d1", ["max"]);
it2.describe();
// console.log(it);
