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

<<<<<<< HEAD
function greet(user3){
=======
// function greet(user){
>>>>>>> f45a7ee162f911641014a75b8aea322711dc7318

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

// let add = (num1 , num2) => num1 + num2; // when assigning in the variable we use arrow fctn
// let sum = add;
// let res = add(5, 6);
// console.log(res);
// console.log(sum);
// let add = (num1 , num2) => num1 + num2; // when assigning in the variable we use arrow fctn
// let sum = add;
// let res = add(5, -3);
// console.log(-res);
// console.log(sum);

// let laptop1 = {
//     cpu : 'i9',
//     ram: '4gb',
//     brand: 'Hp',

//     getConfig: function(){

//         console.log(this.cpu);
//     } // methods
// }

// laptop1.getConfig();
// let laptop2 = {
//     cpu : 'i9',
//     ram: '4gb',
//     brand: 'Hp',

//     getConfig: function(){

//         console.log(this.cpu);
//     } // methods
// }

// laptop2.getConfig();
// console.log(laptop);

   // THIS KEYWORD 
   let laptop1 = {
    cpu : 'i8',
    ram: '4gb',
    brand: 'Hp',

    compare: function(other){
        if(this.cpu > other.cpu)
            console.log(this);
        else
            console.log(other);
    },

    getConfig: function(){

        console.log(this.cpu);
    } // methods
}


    let laptop2 = {
        cpu : 'i9',
        ram: '4gb',
        brand: 'apple',

        getConfig: function(){

            console.log(this.cpu);
        } // methods
    }

laptop1.compare(laptop2);

 // CONSTRUCTOR

function Alien(name, tech){
    this.name = name;
    this.tech = tech;

    this.work = function work(){
        console.log("This is inside constructor");
    }
}

<<<<<<< HEAD
let user3 = 'Zaid';
=======
let alien1 = new Alien('Zaid', 'Java');
let alien2 = new Alien('Zeeshan', 'Android')

alien1.tech = 'Blockchain';

console.log(alien1);
console.log(alien2);

alien1.work();
alien2.work();

// Array;
// let values = new Array();

let values = [5,9];
values[2] = 7
// one way to assign values to array
// values.push(5);
// values.push(7);

console.log(values);

let data = ['Zaid', 25, {tech: 'Java', education: 'MCA'}, () => {console.log("Hello World");}];

console.log(data);

data[3]();

// array methods

let data1 = [5, 7, 8, 9, 4];
// console.log(data1.push(2));
// console.log(data1.pop());

// console.log(data1.shift());
// console.log(data1.unshift(3));
// console.log(data1.splice(2));
// console.log(data1.splice(2, 1));
console.log(data1.splice(2, 2, 11, 15));
console.log(data1.push(3,1));

console.log(data1);

let nums = [];
nums[0] = 5;
nums[99] = 9;
// for (let n  of nums)
//     console.log(n);

for(let key in nums)
    console.log(nums[key]);




>>>>>>> f45a7ee162f911641014a75b8aea322711dc7318

