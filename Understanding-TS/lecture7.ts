// union types
// if we want our function to accept multiple type of values, we can use union types

function combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges2 = combine(30, 26);
console.log(combinedAges2)

const combinedNames2 = combine("Max", "Anna");
console.log(combinedNames2)