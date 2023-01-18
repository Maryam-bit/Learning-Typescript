// Interfaces as function types

// type AddFn = (a: number, b: number) => number;

interface AddFn {
    (a: number, b: number): number
}

let add8: AddFn;
add8 = (n1: number, n2: number) => {
    return n1+ n2
}
 