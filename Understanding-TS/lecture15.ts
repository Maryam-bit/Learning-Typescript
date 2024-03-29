//classes and inheritance

class Department2 {
  protected employees: string[] = [];
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
    private lastReport: string;

    // since lastReport is private and we can't access it outside the class. but getter make it accessible
    get mostRecentReport () {
        if(this.lastReport) {
            return this.lastReport;
        }
        throw new Error("no report found");
    }

    set mostRecentReport (value: string) {
        if(!value) {
            this.addReport(value)
        }
    }

  constructor(id: string, private reports: string[]) {
    // super calls constructor of the base class from subclass
    super(id, "IT");
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
      if(name === 'max') return;
    // we can not change the private property of inherited class, for this we can use protected keyword, its just available in inherited classes, and its own class
      this.employees.push(name)
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["max"]);
it.addEmployee("max");
it.addEmployee("Manu");
it.describe();
console.log(it);


const accounting2 = new AccountingDepartment("d2", []);
accounting2.mostRecentReport = '';
console.log(accounting2.mostRecentReport)
accounting2.addReport("Something went wrong...")
accounting2.printReports()