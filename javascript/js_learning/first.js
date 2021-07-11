const c = "zaid" //constant
console.log(typeof c); // know the type of data
let num = 4 // create the variable 
console.log(num);

num = 1091910102939040403n // where n is donated the BigInt
console.log(num);

let bool = 5 < 6
console.log(bool)

num = Number("123") //Explicit conversion
console.log(num, typeof num);

let x
console.log(x, typeof x);
x = 8
console.log(x, typeof x);

x = x + ""
console.log(x, typeof x); // type coercion //implicit conversion //string
// x = x -2
// console.log(x, typeof x); // type coercion //implicit conversion //number

// x = !x
// console.log(x, typeof x); // type coercion //implicit conversion //boolean 

x = +x + 2
console.log(x, typeof x); // type coercion //implicit conversion //number unary operator

x = parseInt("123 Navin") // convert a string into number but remember first character will not be character
console.log(x);