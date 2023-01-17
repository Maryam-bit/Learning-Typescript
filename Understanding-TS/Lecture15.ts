//classes and inheritance

class Department2 {
  private employees: string[] = [];
  constructor(id: string, public name: string) {}

  // methods
  describe(this: Department2) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// inherting from department
class ITDepartment extends Department2 {
  constructor(id: string, public admins: string[]) {
    // super calls constructor of the base class from subclass
    super(id, "IT");
  }
}

class AccountingDepartment extends Department2 {
  constructor(id: string, private reports: string[]) {
    // super calls constructor of the base class from subclass
    super(id, "IT");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["max"]);
it.addEmployee("Max");
it.addEmployee("Manu");
it.describe();
console.log(it);


const accounting2 = new AccountingDepartment("d2", []);
accounting2.addReport("Something went wrong...")
accounting2.printReports()