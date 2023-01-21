// generic functions <> another example

interface Length {
    length: number;
}

// here T type doesn't know if element has length, to fix this we need to tell it explictly 
function countAndDescribe<T extends Length>(element: T): [T, string] {
    let descriptionText = "got no value";
    if(element.length === 1) 
    descriptionText = "got 1 element"
    else if (element.length > 1) 
    descriptionText = "got " + element.length + " elements"
    return [element, descriptionText];
}

console.log(countAndDescribe("hi there"))