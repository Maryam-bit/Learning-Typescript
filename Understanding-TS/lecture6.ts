// enums <> added by typescript automatically enumerated global constant identifiers. Enum is defined as a your custom type in typescript
// without enum
// Javascript do not support enums, we could acieve same results as enum like this
// downside of this approach (without enum) is the role ADMIN can accept any number, if we wanna restrict it with one number we can use enum
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

const person5 = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: ADMIN
}

if(person5.role  === ADMIN) {
    console.log('admin!!!')
}

// typescript enum <> With default enum behavior
enum Role { ADMIN, READ_ONLY, AUTHOR }; // Role.ADMIN = 0 , Role.READ_ONLY = 1, AUTHOR = 2

const person6 = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

if(person6.role  === Role.ADMIN) {
    console.log('admin!!!')
}

// typescript enum <> custom enum values
enum Role1 { ADMIN = 5, READ_ONLY, AUTHOR }; // Role.ADMIN = 5 , Role.READ_ONLY = 6, AUTHOR = 7

const person7 = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role1.ADMIN
}

if(person7.role  === Role1.ADMIN) {
    console.log('admin!!!')
}


// typescript enum <> custom enum values part-II
enum Role2 { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 5 }; // Role.ADMIN = ADMIN , Role.READ_ONLY = 100, AUTHOR = 5

const person8 = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role2.ADMIN
}

if(person8.role  === Role2.ADMIN) {
    console.log('admin!!!')
}
