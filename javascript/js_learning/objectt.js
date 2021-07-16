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

// for(let key in alien){
//     // console.log(key);
//     // console.log(key, alien[key]);
//     console.log(key, alien[key])

//     // for(let key1 in alien[key]){
//     //     console.log(key1);
//     // }
    
// }

// Function

// function greet(user){

//     return `Hello ${user}`;

// }

// let user = 'Zaidddf';

// let str = greet(user);
// console.log(str);

// fctn expression
// let add = function(num1, num2)
//         {
//             return num1 + num2;
//         }

// let sum = add; // this is treating as aN OBJECT
// let getRes = add(5, 6);
// getRes = sum(6,9);

// console.log(getRes);

//HOISTING
// function greet(u){

//     console.log(user);

//     return `Hello ${user}`;

// }

// let user = 'Zaidddf';

// let str = greet(user);
// console.log(str);
// Default variable, Local Variable, Global variable
// function add(num1, num2, num3 = 1) // num1, num2, and num3 are parameters
// {
//     // num3 = 1 default value when we dont pass argument any argument in vwill print the default value
//     console.log(num1, num2, num3);
//     return num1 + num2 + num3;

// }

// let resultt  = add(5, 6, 5) // 5,6,5 are the arguments
// console.log("the result is" + resultt);   

// arrow function 
// we can pass argument too...
// let greet = (/*parameters too*/) => {
//     console.log("hello");
//     return 1;
// }
// console.log(greet());

let add = (num1 , num2) => num1 + num2; // when assigning in the variable we use arrow fctn
let sum = add;
let res = add(5, 6);
console.log(res);
console.log(sum);