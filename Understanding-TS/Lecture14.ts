// Classes 
// Convention is to name class with first letter uppercase
// here name is called the field of the department class
// constructor is a method, which is a reserved word
class Department {
    name: string;
    constructor (n: string) {
        this.name = n;
    }

    // method
    describe (this: Department) {
        console.log("Department: " + this.name)
    }
}

// now create  department object
const accounting = new Department("Accounting");
accounting.describe();

const accountingCopy = { name: "abc", describe: accounting.describe };
// we are calling describe from accounting copy on which "this" doesn't exists, this can be fix by adding "this" parameter in describe method in constructor
accountingCopy.describe() // Department: undefined