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
