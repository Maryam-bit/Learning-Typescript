function add6(n1: number, n2: number) {
    return n1 + n2;
}

function printResult3(num: number) {
    console.log("Result: " + num);
}

let combineValue: Function;
combineValue = add6;
combineValue = printResult3;
// combineValue = 5 !!! Error !!!
console.log(combineValue(9, 9)) // undefined since print result accept one arg

// function type
// Function types are the types that describe the function regarding parameters and return value of the function

let combineValue2: (a: number, b: number) => number;
combineValue2 = add6;
// combineValue2 = printResult3; // !!! ERROR //
// combineValue2 = 5 // !!! Error !!!
console.log(combineValue2(9, 9)) // undefined since print result accept one arg
