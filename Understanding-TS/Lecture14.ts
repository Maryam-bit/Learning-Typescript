// Classes 
// Convention is to name class with first letter uppercase
// here name is called the field of the department class
// constructor is a method, which is a reserved word
class Department {
    name: string;
    constructor (n: string) {
        this.name = n;
    }
}

// now create  department object
const accounting = new Department("Accountinghgdrer");
console.log(accounting)