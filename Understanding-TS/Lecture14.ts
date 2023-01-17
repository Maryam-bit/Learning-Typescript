// Classes 
// Convention is to name class with first letter uppercase
// here name is called the field of the department class
// constructor is a method, which is a reserved word
class Department {
    name: string;
    // make the employees private so that they can only be accessible inside the class
    private employees: string[] = [];
    constructor (n: string) {
        this.name = n;
    }

    // method
    describe (this: Department) {
        console.log("Department: " + this.name)
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

// now create  department object
const accounting = new Department("Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// accounting.employees[2] = "anna";  // error because you cannot change employee value outside the class

accounting.describe();
accounting.printEmployeeInformation();

const accountingCopy = { name: "abc", describe: accounting.describe };
// we are calling describe from accounting copy on which "this" doesn't exists, this can be fix by adding "this" parameter in describe method in constructor
// accountingCopy.describe() // Department: undefined