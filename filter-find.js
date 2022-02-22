const numbers = [3, 23, 53, 54, 32, 555];
const products = [
    { name: 'motorola', quantity: 2, color: 'green' },
    { name: 'Nokia', quantity: 24, color: 'red' },
    { name: 'Samsung', quantity: 32, color: 'white' },
    { name: 'Symphony', quantity: 25, color: 'vintage' },
    { name: 'Sony', quantity: 29, color: 'red' },
]
// find higest
const bigNumber = numbers.filter(Number => Number > 20);
console.log(bigNumber);
//find lowest
const lowestNumber = numbers.filter(Number => Number < 20);
console.log(lowestNumber);
//more than 100
const moreThan = products.filter(product => product.quantity > 20);
console.log(moreThan);
//filter by color
const red = products.filter(color => color.color == "red");
// console.log(red);

//find black
const reds = products.find(color => color.color == 'red');
console.log(reds);
