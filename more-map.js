const friends = ['tom', 'tom cuise', 'tom budy', 'tom solaiman'];
const flengths = friends.map(vari => vari.length);
console.log(flengths);

const products = [
    { name: 'motorola', quantity: 2, color: 'green' },
    { name: 'Nokia', quantity: 24, color: 'red' },
    { name: 'Samsung', quantity: 32, color: 'white' },
    { name: 'Symphony', quantity: 25, color: 'vintage' },
    { name: 'Sony', quantity: 29, color: 'tomato' },
]
const productName = products.map(produ => produ.name);
const productQuantity = products.map(productNum => productNum.quantity);
//console the whole loop
products.map(product => console.log(product));

//forEach
products.forEach(product => console.log(product));

console.log(productName);
console.log(productQuantity);