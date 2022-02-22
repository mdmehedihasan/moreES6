const fish = {
    id: 58, name: 'king hilila', color: 'silver', price: 9000, phone: 017773737373, address: 'chandpur'
};
// const phone = fish.phone;
// const id = fish.id;
// console.log(phone, id);

const { phone, price, name, color, address } = fish;
console.log(phone, price, address);

const company = {
    name: 'gp', ceo: { id: 3, Ceoname: 'ajmol', food: 'fuska' },
    web: { work: 'Website development', employe: 22, framwork: 'react' }
};
// const works = company.web.work;

const { work, framwork } = company.web;
console.log(work, framwork);
const { id, Ceoname: CEOname, food } = company.ceo;
console.log(id, CEOname);
