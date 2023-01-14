// typescript typle <> added by Typescript : fixed length array
// in this example typescript assume that role is an array and only strings and numbers are allowed here
var person4 = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
person4.role.push('admin');
person4.role[1] = 10;
// In order to have role contain only 2 elements , first should be number, 2nd should be string,  we can use tuple
var person5 = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
person5.role.push('admin');
// person5.role[1] = 10
