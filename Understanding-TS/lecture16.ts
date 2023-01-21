// static methods and properties
// to access the static methods of class, you do not need to instantiate class
// when you add static method on class, you can not access them from non static parts of class
class Department2 {
  static fiscalYear = 2020;
  protected employees: string[] = [];
  constructor(public name: string) {
    // console.log(this.fiscalyear) /// !ERROR - we can not access them in on static parts inside the class
  }

  static createEmployee(name: string) {
    return { name: name };
  }
}

const it = new Department2("abc");
console.log(it);

const employee1 = Department2.createEmployee("maxim");
console.log(employee1, "employee1", Department2.fiscalYear);
