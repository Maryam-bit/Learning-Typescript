/* Intersection
Intersection type allow us to combine other types
*/

type Admin = {
    name: string;
    privileges: string[]; 
};

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee
// interface ElevatedEmployee2 extends Employee, Admin {}

const el: ElevatedEmployee = {
    name: "Max",
    privileges: ['create server'],
    startDate: new Date()
}