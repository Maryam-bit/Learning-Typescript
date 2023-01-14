// Array, array type can be string or flexible

const person3 = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['sports', 'cooking']
}

// We can declare array of strings without initialization like this
let favoriteActivities: string[];
favoriteActivities = ['sports']

// multiple types array
let favoriteActivities2: any[];
favoriteActivities2 = ['sports', 1]

console.log(person3.name)