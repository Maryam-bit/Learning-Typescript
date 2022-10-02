![image](https://user-images.githubusercontent.com/56764144/193456198-751083a0-2361-47eb-918d-d5d0e0cf195b.png)

In Typescript, we can use common object-oriented patterns.
- Classes
- Interfaces
## Classes
### Class Members
  Here Is the Most basic class - an empty one: 
```
class Point {}
```
### Fields
#### Field declaration
```
class Point {
    x: number;
    y: number;
}
const pt = new Point();
pt.x = 0;
pt.y = 1;
```
#### Field Initialization
```
const Point {
    x = 0;
    y = 1;
}
const pt = new Point();
consolel.log(pt.x, pt.y)
```
#### --strictPropertyInitialization
Making strictPropertyInitialization to true would not allow you to declare a class fields without initialization

### Readonly
Fields maybe frefixed with the readonly modifier. This prevents assignments to the field outside of the constructor

### Constructor
The constructor() is used to assign values to the class variables at the time of object creation.
The constructor() method is called automatically when a class is initiated, and it has to have the exact name "constructor", in fact, if you do not have constructor method, Javascript will add an invisible and empty constructor method.
A class cannot have more than one constructor. 
