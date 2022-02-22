//declare variable based on the name of an object property
const myObject = { x: 2, y: 50, z: 600, a: 23 };
const { x, y, z, a } = myObject;
console.log(x, y, z);

//destructuring in an array
const [p, q] = [45, 34];
console.log(p, q);

const [best, faltu] = ['riyaj', 420];
console.log(best, faltu);
const { sky, soil, quantity } = { sky: 'blue', soil: 'mattin', color: 'red', quantity: 34, mood: 'swing' };
console.log(quantity);

const company = {
    name: 'gp', ceo: {
        id: 3, Ceoname: 'ajmol', food: 'fuska'
    },
    web: {
        work: 'Website development', employe: 22, framwork: 'react'
    }
};

//chaining

console.log(company.web.work.q?.p?.j);