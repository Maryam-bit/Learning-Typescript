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

**number** - “All the numbers, no difference between the integers or floats

**string** - All text values

**boolean** - just these two, no “truthy” or “falsy” values

**object** - any javascript bobject, more specific types (type of object) are possible

**array** - any javaswcript array is supported, type can be flexible or strict

**tuple** - added by typescript: fixed length array

**enum** - Added by Typescript: Automatically enumerated global constant identifiers

**any** - any kind of value, no specific type assignment


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


## Literal Types
Literal types are the types which are based on your core types (string or numbers), but with the specific version of a type


## Type Aliases
Type aliases  custom types , not built in javascript, only supported by ts
```
type Combinable = number | string;
function combine2(input1: Combinable, input2: Combinable) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine2(30, 26);
console.log(combinedAges)

const combinedNames = combine2("Max", "Anna");
console.log(combinedNames)
```


## Function Return type
In this function typescript infer the return type of function as number
```
function add(n1: number, n2: number) {
    return n1 + n2;
}
```

Function explicit return type
```
function add3(n1: number, n2: number): number {
    return n1 + n2;
}
```

note: its good idea to let typescript do its job regarding type inference, and if you have no specific reason for explictyly setting the type, you should therefore not set the type and instead let typescript infer the type

Function void return type <> since its not returning anything
```
function printResult(num: number) {
    console.log("Result: " + num);
}
```

and we can also define its type expplicity 
```
function printResult2(num: number): void {
    console.log("Result: " + num);
}
printResult(add(5, 12));
printResult2(add(5, 12));
```


## Function types
lets consider the following code, returning undefined when we used worng function as a value of combineValue, at this point function type comes into play
```
function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number) {
    console.log("Result: " + num);
}

let combineValue: Function;
combineValue = add;
combineValue = printResult;
// combineValue = 5 !!! Error !!!
console.log(combineValue(9, 9)) // undefined since print result accept one arg
```

Function types are the types that describe the function regarding parameters and return value of the function
```
let combineValue2: (a: number, b: number) => number;
combineValue2 = add;
// combineValue2 = printResult; // !!! ERROR //
// combineValue2 = 5 // !!! Error !!!
console.log(combineValue2(9, 9)) // undefined since print result accept one arg
```


## function types and callback
```
function addAndHandle (n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10, 20, (result) => {
    console.log(result);
})
```


## Unknown Type
unknown type, we can store any type without getting errors
unknown type is different from any, let's see how

```
let userInput:  unknown;
let userName: string;
userInput = 5;
userInput = 'Max'
// userName = userInput // !!! this will fail becuase unknown is not guarenteed to be a string, this will fix if we convert unknown to any type
```

unknown is not a type you should you everytime, but its better choice over any, so to avoid the error we would need to add check
```
if(typeof userInput === 'string') {
    userName = userInput
}
```


## Never type

This function is not just void, but also never, as it is throwing error
The function can also return never type if has infinite loop
```
function generateError (message: string, code: number): never {
    throw { message: message, errorCode: code }
    // while (true) {}
}

generateError("an error occurred", 500)
```


## The Typescript compiler and its configuration

## Using watch mode
In order to compile your Typescript into javascript, you have to run this command
```
tsc app.ts
```
But watch mode allow typescript to watch file and whenever that file changes, typescript will recompile it into javascript
``` 
tsc app.ts --watch
```
Watch mode is a very big improvement, but the downside of this approach is that it's only watching one file
to be continued...


## Compiling the entire project / Multiple files
```
tsc --init
```
this command will generate tsconfig.json file, which will allow us to only run ```tsc``` that will automatically compile all the files in this project into javascript. So in order to watch all the ts file you can just run
```
tsc --watch
```


## Including and Excluding files
The tsconfig.json file tells typescript how it should compile the files.
**Exclude**
In the root object of tsconfig, add exclude key and give the files name that you want to exlude when compiling project
```
"exclude": [
  "analytics.ts"
]
```
or 
```
"exclude": [
   "*.ts"   // this means exclude each file that has ts extension
```
note: mode_modules are automatically excluded as a default settings


**Include**
Allow you to specifically tell typescript which files you wanna include in the compilation process, and anythin that's not listed here wil not compiled
```
"inlude": [
  "app.ts"
]
```
note: If you wanna compile all TS files in the project, you do not provide include option


## Compiler options
This allow you to control how your typescript code is compiled. we can provide compiler options in the root of tsconfig file's object
```
{
   "compilerOptions": {
      ... your options here
   }
}
```
let's go through all the options one by one that we can define in compiler options
- **target** : Is ysed to tell typescript for which target javascript version you want to compile the code, by default it provide es5

- **lib**: Allows you to specify which default object and features typescript knows

- **sourceMap**": helps us with debugging and development  

- **outDir**: allow us where we want to put our compiled files.
```
"outDir": "./dist"
```
this will move all the compiled JS files into dist folder

**rootDir**
This option makes sure that ts compiler do not look into other directories. It also make sure that the project structure is also kept in dist folder

**noEmitOnError**
If we have an error in ts will, ts will compile and generate file anyway, to avoid this we set noEmmitOnError to true. By default it is false
## Class Members
Here is the most basic class - an empty one:
```
class Point {}
```


## Classes & Interfaces
To understand classes let's look into Object oriented programming

#### What's Object Oriented Programming (OOP)?
- The idea behind OOP and classes is to work with real-life entities in your Code

**For example** 
Render a list of products which were fetched from a server (database) <> Object holds rendering + fetching logic

#### Classes and Instances
Classes are the **blueprints for objects**, define how objects look like, which properties and methods they have, and make creation of multiple similar objects much easier, here is how you can write your first class

## Creating a first Class
```
// Convention is to name class with first letter uppercase
// here name is called the field of the department class
class Department {
    name: string;
    constructor (n: string) {
        this.name = n;
    }
}

// now create  department object
const accounting = new Department("Accounting");
console.log(accounting)
```

#### This keyword
This keyword is use to access the fields or methods of classes with in the class instance


## Private access modifier
You can make the fields public or private by using **public** and **private** keyword, the fields with private access modifiers are only accessible inside the class,
the fields of classes are by default public
```
// added employee field with in department class
private employees: string[] = [];

accounting.employees[2] = "anna"; // error because you cannot change employee value outside the class
```

## shorthand initialization
``` 
class Department {
  name: string;
  
  constructor (n: string) {
     this.name = n;
  }
}
```
This code(defined above) is same as this
```
class Department {
   constructor (public name: string) {}
}
```


## readonly
readonly keyword is introduced by ts which make  sure that if you try to mutate its property, you will fail
```
constructor (public readonly name: string) {}
this.name = "hello" // error, not allowed
```


## Static methods and properties
To access the static methods of class, you do not need to instantiate class. when you add static method in class, you can not access them from non static parts of the class. Exmaple
```
class Department2 {
  static fiscalYear = 2020;
  protected employees: string[] = [];
  constructor(public name: string) {
    // console.log(this.fiscalyear) /// !ERROR - we can not access them in on static parts inside the class
  }

  static createEmployee(name: string) {
    return { name: name };
  }
}

const it = new Department2("abc");
console.log(it);

const employee1 = Department2.createEmployee("maxim");
console.log(employee1, "employee1", Department2.fiscalYear);
```


## Interface
An Interface describe the structure of an object. It only exists in Javscript
```
interface Person {
    name: string;
    age: number;
    title: string = "acb" // error, we can not initialize value in interface
    
    method
    greet(phrase: string): void;
   
}
   
    let user1: Person;
}
```


## Interface with classes
```
interface Greetable {
    name: string;
    greet(phrase: string): void;
}


class Person implements Greetable {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
    greet(phrase: string) {
        console.log(phrase + " " + this.name) // Hi there - I am Maxim
    }
} 

let user2: Greetable
user2 = new Person("Maxim");
user2.greet("HI there - I am")
```


## Read only interface properties
We can also make interface properties readonly , but not public, private or protected. for example
```
interface Greetabl3 {
  readonly name: string;
}

class Person implements Greetabl3 {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
}

let user3: Greetabl3;
user3 = new Person("Maxim");

user3.name = "Maryam Noor"; // error becuase name is read only

```


## Extending Interfaces
We can extend interface to split them into multiple parts like this
```

interface Named {
    readonly name: string;
}

interface Greetable4 extends Named {
    greet(phrase: string): void;
}

// extend more than one 
// interface Greetable4 extends Named , AnotherName {}

  class Person6 implements Greetable4 {
    name: string;
    constructor(n: string) {
      this.name = n;
    }
    greet(phrase: string) {
        console.log(phrase + " " + this.name)
    }
  }
  
  let user4: Greetable4;
  user4 = new Person6("Maxim");
```


## Optional Properties of interface
Make any property of interface optional using ? before :. For example
```
interface Named2 {
    readonly name?: string;
    outputName ?: string;
}

  class Person7 implements Named2 {
    name?: string;
    constructor(n?: string) {
      this.name = n;
    }
  }
  
  let user6: Named2;
  user6 = new Person7();
  
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
## --strictPropertyInitialization
Making strictPropertyInitialization to true would not allow you to declare a class fields without initialization



## Readonly
Fields maybe frefixed with the readonly modifier. This prevents assignments to the field outside of the constructor



## Constructor
The constructor() is used to assign values to the class variables at the time of object creation.
The constructor() method is called automatically when a class is initiated, and it has to have the exact name "constructor", in fact, if you do not have constructor method, Javascript will add an invisible and empty constructor method.
A class cannot have more than one constructor. 

## Syntax 
```
constructor () {
  // code need to be executed
}
```
## Parameterized constructor
```
constructor(parameter1, parameter2.....,parameterN) {
  // code need to be executed
}
```


## Intersection types
Intersection types Allow us to combine other types

```
type Admin = {
    name: string;
    privileges: string[]; 
};

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee
// interface ElevatedEmployee2 extends Employee, Admin {}  /// !same as above intesection method

const el: ElevatedEmployee = {
    name: "Max",
    privileges: ['create server'],
    startDate: new Date()
}
```



## type guards
It help us with union type

```
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
```


## Discriminated Union
Pattern that implements typeguards easier when using union types
Discriminated Union means we have one common property in every object that makes up a union to have 100% type safety
```
interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal (animal: Animal) {
    let speed;
    switch(animal.type) {
        case 'bird':
            speed = animal.flyingSpeed
            break;
        case 'horse':
            speed = animal.runningSpeed
    }
}

moveAnimal({type: 'bird', flyingSpeed: 10})
```

## Type casting

Type casting helps to tell ts that some value is of a specific value when ts don't know

Typescript infer its (paragraph's type as HTMLParagraphElement | null
```
const paragraph = document.querySelector('p')
```

TS infer its (input's ) type as HTMLElement | null which means typescript is unable to recognize that its HTML Input Element
```
const userInputElement = document.getElementById('user-input')
```

You will get the following error while setting value to it 
'userInputElement' is possibly 'null'.ts(18047)
Property 'value' does not exist on type 'HTMLElement'
```
userInputElement.value = "hi there"
```

Now you would need to use type casting here
syntax 1
```
const userInputElement2 = <HTMLInputElement>document.getElementById('user-input')
userInputElement2.value = "hi there"
```

syntax 2
! means this express will never yeild null, typescript thought that the user-input element return by DOM  might return null
but if we as a developer knows that it would not return null then we can use this !.
```
const userInputElement3  = document.getElementById('user-input')! as HTMLInputElement
userInputElement3.value = "hi there"
```


## Index Properties
Allow us to create flexible objects

If you don't know the exact property name of an object, let see the error example
// { email: "not a valid email", username: "must start with a capital character"}

```
interface ErrorContainer {
    [prop: string]: string;
}
```

Any thing that can be converted to a string is a valid property name. 
```
const errorBag: ErrorContainer = {
    email: "not a vlid email",
    username: "must stasrt with a capital character"
}
```


## Function overloads
A feature that allow us to define multiple function signatures

```
type Combinable2 = string | number;
type Numeric2 = number | boolean;

type Universal = Combinable2 | Numeric2;


// function overload 
function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
function add2(a: string, b: number): string;
function add2(a: number, b: string): string;

// function definition
function add2(a: Combinable2, b: Combinable2) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add2("Max", "Schwarz")
// result.split(' ') // ! would not work
// now i can't perform string methods or functions on result, since typesript is infering
// the return type of add function as Combinable (either string or number)

// to fix this we can use type casting
const result7 = add2("Max", "Schwarz") as string;



// or by using function overload, define overload above the function definition
const result2 = add2("Max", "Schwarz");
result2.split(' ')
```


## Optional Chaining
When you are not sure that certain property exists on object 

```
const fetchedUserData = {
    id: "u1",
    name: "max",
    // job: { title: "ceo", description: "my own company"}
}

// javscript way
console.log(fetchedUserData.job && fetchedUserData.job.title)

// in typescript
console.log(fetchedUserData?.job?.title)
```



## Nullish coalescing

```
const userInput = null;
```
give default fallback value if userInput is null or undefined (nullish value)
```
const storedData = userInput || "DEFAULT";
console.log(storedData) // DEFAULT
```


## Generics
A generic type is a type which is kind of connected with some other type.
It is really flexible regarding which exact type other type is

```
// string[]
const names = ["Max", "manuel"]

// never[]
const names1 = []

// Generic type 'Array<T>' requires 1 type argument(s).
// Array 
const names2: Array<string> = []; // string[]
// now TS would allow me to perform string operations on array elements 
names2[0].split(' ')

// promise
// TS will infer promise's return type as Promise<unknown>, if 
// we do not define generic type
const promise: Promise<any> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10)
    }, 2000);
})
promise.then(data => {
    data.split(' ');
})
```
   
   
## Generic functions

Create a Generic functions

Let's merges two object and return new obj 

---- without generics ------

```
function merge1(objA: object, objB: object)  {
    return  { ...objA, ...objB };
}

const mergeObj1 = merge1({name: "Max"}, {age: 3}) // object type

// mergeObj1.age; // Property 'age' does not exist on type 'void'.ts(2339)
```



----- using generics ----- 

This function retuns intersection of these two (T and U) types 
Here we are telling TS that which types our function should fill in by adding angle brackets after the func

```
function merge2<T, U>(objA: T, objB: U) {
    return  { ...objA, ...objB };
}
```

here type of mergeObj is inferred as { name: string; } & { age: number; }

```
const mergeObj2 = merge2({name: "Max"}, {age: 14})
```

you can also define types here on function call like this
but you don't really need to do this since typescript automatically infer it's type

```
const mergeObj3 = merge2<{name: string}, {age: number}>({name: "Max"}, {age: 14})
console.log(mergeObj2.age, mergeObj2.name)
```


## Constraints 

let's go with this example
this function should only take an object everytime, but currentlty it's taking any type of value. 
Here if we want to restrict the type of T and U  
We can do that using type constraints

```
// ---- without constraints
function merge3<T, U>(objA: T, objB: U) {
    return  { ...objA, ...objB };
}
```

If we pass any literal instead of object, It would not be merged into another obj.

```
const mergeObj3 = merge3({name: "Max"}, 14)
console.log(mergeObj3) // { name: 'Max' }
```

```
// ----- with constraints -----
function merge4<T extends object, U extends object>(objA: T, objB: U) {
    return  { ...objA, ...objB };
}

const mergeObj4 = merge4({name: "Max"}, 14) // error
const mergeObj5 = merge4({name: "Max"}, {age: 14}) // error
console.log(mergeObj5) // { name: 'Max', age: 14 }
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
