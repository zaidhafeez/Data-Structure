// //object literal
// let alien = {};

// console.log(typeof alien);
let input = 'name';


let alien = {
    name: 'Zaid',
    tech: 'JS',
    'work exp': 4
}

console.log(alien.name);
console.log(alien['tech']); // same way define
console.log(alien['work exp']);
console.log(alien[input]);