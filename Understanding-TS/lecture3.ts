// Object type

// most general type assignment <> do not allow autocomple
const person: object = {
    name: {
        name: 'Maximilian',
        age: 30
    }
}
console.log(person.name)
// typescript type intference <> better syntax
const person1 = {
    name: 'Maximilian',
    age: 30
}
console.log(person1.age)

// explict type assignment
const person2: {
    name: string;
    age: number;
} = {
    name: 'Maximilian',
    age: 30
}
console.log(person1.age)