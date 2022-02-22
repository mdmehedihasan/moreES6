const numbers = [23, 42, 5, 6, 43, 99];
const output = [];
function doubleOld(number) {
    return number * 2;
}
const doubleIt = number => number * 2;

for (const number of numbers) {
    // const res = number * 2;
    // doubleOld(number)
    output.push(doubleIt(number));
}
//map function
const outputs = numbers.map(doubleIt);
const outputed = numbers.map(number => number * 2);

console.log(output);

///square
const sqr = numbers.map(x => x * x);
console.log(sqr);