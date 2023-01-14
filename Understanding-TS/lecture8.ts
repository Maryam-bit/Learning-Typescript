// Type aliases  custom types , not built in javascript, only supported by ts

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