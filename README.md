
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

