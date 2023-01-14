// function return type
// in this function typescript infer the return type of function as number

function add(n1: number, n2: number) {
    return n1 + n2;
}

// function explicit return type
function add3(n1: number, n2: number): number {
    return n1 + n2;
}

// note: its good idea to let typescript do its job regarding type inference, and if you have no specific reason for explictyly setting the type, you should therefore not set the type and instead let typescript infer the type

// function void return type <> since its not returning anything
function printResult(num: number) {
    console.log("Result: " + num);
}

// and we can also define its type expplicity 
function printResult2(num: number): void {
    console.log("Result: " + num);
}

printResult(add(5, 12));
printResult2(add(5, 12));