//let const
const hubby = 'Omor sani';
let phone = 'iphone';
phone = 'Samsung Galaxy s8';
console.log(phone);

//template string
const myNotes = `I am mojnu.I dont have a laili ${hubby}`;
console.log(myNotes);

//default parameter
//spread or three dots
function max(array = []) {
    const max = Math.max(...array);
    console.log(max);
}
max([12, 34, 3, 55, 4, 5]);

//arrow function
const square = a => a * a;
console.log(square(3));