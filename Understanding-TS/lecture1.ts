// javascript types vs typescript types

// ------------ typescript type ------------
function add5(n1: number, n2: number) {
    return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const result = add5(number1, number2);
console.log(result)


// ------------ javascript type ------------
// function add(n1, n2) {
//     if(typeof n1 !== 'number' || typeof n2 !== 'number') {
//         throw new Error('Incorrect input');
//     }
//     return n1 + n2;
// }

// const number1 = 5;
// const number2 = 2.8;

// const result = add(number1, number2);
// console.log(result)