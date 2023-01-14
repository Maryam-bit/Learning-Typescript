## Typescript
- TS is a programming language, its a powerful compiler tool compiled into javascript
- Adds new features and advantages to JS

Typescript adds
- types
- better incompletion
- next generation javascript features (compiled down for older browser)
- non javascript featres like interfaces or generics
- meta programming features like decorators
- rich configuration options (configure it according to your req)
- modern tooling that helps even in non ts projects

## why Typescript?

```
function add(num1, num2) {
   return num1 + num2;
}
console.log(add('2', '3'));
```

- This code would have unwanted behavoir at Runtime
- Since developers can still write invalid code!
- TS is a **tool** that helps developers write better code!


## Installation
install ts from [here](https://www.typescriptlang.org/download)
prerequisite : You should have nodejs installed to run the typescript


## Typescript basic Types
**core Types**

number - “All the numbers, no difference between the integers or floats

string - All text values

boolean - just these two, no “truthy” or “falsy” values

object - any javascript bobject, more specific types (type of object) are possible

array - any javaswcript array is supported, type can be flexible or strict

tuple - added by typescript: fixed length array

enum - Added by Typescript: Automatically enumerated global constant identifiers

any - any kind of value, no specific type assignment


Note: 
- typescript’s type system only helps you during development (i.e before the code get compiled)
- key difference between ts and js is: javascript uses “dynamic types (resolved at run time), typescript uses “static types” set during development).
- The core primitive types in Typescript are all lowercase!


## Typescript inference:
Typescript inference means it understand itself that which type you have in a certain variable and constant. For example,
```
const number = 5;
```
this does not require type here, since ts automatically infer the variable number with the type of 5, which means its value would not be change throughout the program

```
let number = 5;
```
if we use let instead of const, ts will infer the variable with number type, mean you would not be able to assign value of another type to number

- in these cases defined above, when you are doing declaration with initialization, defining typescript types doesn't make any sense since it automaically infer the types. But it do make sense if we only declare the variable and assume that we will initialize it later on.
```
let number1: number;
number1 = 5
```


## Object types
most general type assignment to object. But it do not give intellisense to the object
```
const person: object = {
    name: {
        name: 'Maximilian',
        age: 30
    }
}
console.log(person.name)
```

Typescript type intference <> better syntax
```
const person1 = {
    name: 'Maximilian',
    age: 30
}
console.log(person1.age)
```

Explict type assignment
```
const person2: {
    name: string;
    age: number;
} = {
    name: 'Maximilian',
    age: 30
}
console.log(person1.age)
```


## Array types
Array, array type can be string or flexible
```
const person3 = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['sports', 'cooking']
}
```

We can declare array of strings without initialization like this
```
let favoriteActivities: string[];
favoriteActivities = ['sports']
```

Multiple types array
```
let favoriteActivities2: any[];
favoriteActivities2 = ['sports', 1]
```


## Tuples
Typescript typle <> added by Typescript : fixed length array <> provides moree strictness
In this example typescript assume that role is an array and only strings and numbers are allowed here
```
const person4 = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
}
person4.role.push('admin');
person4.role[1] = 10
```

In order to have role contain only 2 elements , first should be number, 2nd should be string,  we can use tuple
```
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
```

Push is an excention which is allowed in typles, so unfortunately typescript can't catch this error, but atleast it ensure that we are not assigning a wrong value
```
person5.role.push('admin'); 
// person5.role = [0, "abc", "def"];  // !!! Error !!! 
// person5.role[1] = 10  // !!! Error !!!
```


## Enums
enums <> added by typescript - automatically enumerated global constant identifiers. Enum is defined as a your custom type in typescript
Javascript do not support enums, we could acieve same results as enum like this
**Without Enum**
```
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
```

**With Enum** <> With default enum behavior
```
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
```

Typesceript enum <> custom enum values
```
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
```

Typescript enum <> custom enum values part-II
```
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
```

## Any
Very flexible, You should avoid using any whenever possible because it give you same experience we have in vanilla javscript. Let Typescript inference do its job or explicitly set your own types, but don't fallback to any if you don't need to.


## Union types
If we want our function to accept multiple type of values, we can use union types
```
function combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges)

const combinedNames = combine("Max", "Anna");
console.log(combinedNames)
```


to be continued...





## Class Members
Here is the most basic class - an empty one:
```
class Point {}
```


## Fields
### Field declaration
```
class Point {
    x: number;
    y: number;
}
const pt = new Point();
pt.x = 0;
pt.y = 1;
```
### Field Initialization
```
const Point {
    x = 0;
    y = 1;
}
const pt = new Point();
consolel.log(pt.x, pt.y)
```
### --strictPropertyInitialization
Making strictPropertyInitialization to true would not allow you to declare a class fields without initialization



## Readonly
Fields maybe frefixed with the readonly modifier. This prevents assignments to the field outside of the constructor



## Constructor
The constructor() is used to assign values to the class variables at the time of object creation.
The constructor() method is called automatically when a class is initiated, and it has to have the exact name "constructor", in fact, if you do not have constructor method, Javascript will add an invisible and empty constructor method.
A class cannot have more than one constructor. 

### Syntax 
```
constructor () {
  // code need to be executed
}
```
### Parameterized constructor
```
constructor(parameter1, parameter2.....,parameterN) {
  // code need to be executed
}
```



## Methods 
A function properties on a class is called a _method_. Inside a method body, it's still mandatory to access fields and other methods via _this_ keyword.
```
class Foo {
  x: string = "Hello";
  bar () {
    this.x += " World";
 }
}
```

## Getter/Setter
https://www.javascripttutorial.net/es6/javascript-getters-and-setters/
