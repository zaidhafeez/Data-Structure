// //object literal
// let alien = {};

// console.log(typeof alien);
// let input = 'name';


// let alien = {
//     name: 'Zaid',
//     tech: 'JS',
//     'work exp': 4
// }

// console.log(alien.name);
// console.log(alien['tech']); // same way define
// console.log(alien['work exp']);
// console.log(alien[input]);

// complex object
let alien = {

        name: 'Zaid',
        tech: 'JS',
        laptop: {
            cpu: 'i7',
            ram: '4',
            brand1: 'Asus'
        } 
}
// console.log(alien.laptop.brand.length);
// /(double question mark) (Nullish Coalescing Operator)
// console.log(alien.laptop?.brand?.length);
delete alien.tech // delete keyword which is provided by js its delete the object property
// console.log(alien);

for(let key in alien){
    // console.log(key);
    console.log(key, alien[key]);

    // for(let key1 in alien[key]){
    //     console.log(key1);
    // }
    
}