// TYpe guard
// it help us with union type

type Combinable = string | number;
type Numeric = number | boolean;

type universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
    // this is called type guard
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    }
    return a + b
}

type Admin1 = {
    name: string;
    privileges: string[]; 
};

type Employee1 = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee1 = Admin & Employee
// interface ElevatedEmployee2 extends Employee, Admin {}

const el1: ElevatedEmployee = {
    name: "Max",
    privileges: ['create server'],
    startDate: new Date()
}

type UnknownEmployee = Employee1 | Admin1;

function printEmployeeInformation (emp: UnknownEmployee) {
    console.log("emp" + emp.name);
    // if(typeof emp === 'object') {} // here this type guard would not work, because it will give us object only not properties 
    // use this instead
    if('privileges' in emp) {
        console.log("privileges" + emp.privileges)
    }
    if('startDate' in emp) {
        console.log("startDate" + emp.startDate)
    }
}

printEmployeeInformation(el1);