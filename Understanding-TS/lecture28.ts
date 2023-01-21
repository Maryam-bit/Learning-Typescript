// function overloads
// a feature that allow us to define multiple function signatures

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
