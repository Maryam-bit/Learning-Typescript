// typescript typle <> added by Typescript : fixed length array <> provides moree strictness
// in this example typescript assume that role is an array and only strings and numbers are allowed here
const person4 = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
}

person4.role.push('admin');
person4.role[1] = 10

// In order to have role contain only 2 elements , first should be number, 2nd should be string,  we can use tuple
const person5: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string]
} = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
}

// push is an excention which is allowed in typles, so unfortunately typescript can't catch this error, but atleast it ensure that we are not assigning a wrong value
person5.role.push('admin'); 
// person5.role = [0, "abc", "def"];  // !!! Error !!! 
// person5.role[1] = 10  // !!! Error !!!