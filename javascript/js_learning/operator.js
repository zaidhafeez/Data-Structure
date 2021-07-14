// // Arithmetic operator
// let num1 = 4
// let num2 = 6
// let result = num1 % num2
// console.log(result);

// num1 = true
// num2 = true
// result = num1 + num2 // this + operator convert this into number // type coercion
// console.log(result);



let num = 4
// let result = Math.pow(4, 3)
let result = 4 ** 3 // same as power
console.log(result);

// relational operator
console.log(5 < 6);

let x = "Pen"
let y = "Book"

let data = x <= y // compare ASCII code

console.log(data);
let a = "2"
let b = 1

let datab = x <= y // first convert into num the compare

console.log(data);

// for == operator convert into type
let f = "2"
let g = 3

let datae = f === g // strcly equality operator
console.log(datae);

f = " "
g = false

datae = f === g // strcly equality operator
console.log(datae);

f = 7 , g = 8, h = 9

datae = f < g && f < h
datae = f < g || f < h

console.log("a " + datae);

// conditional statement

let num12 = 5
let num21 = 6

let result1 = num12 < num21

if(result1)
    console.log("hii,,,");
// ternary op.

let nmbr = 5;
let resultget;

result = nmbr % 2 === 0 ? "Even" : "odd";
console.log("resultget " + result);

// switch statemnet
let day = "Wednesday";

switch(day){
    case "Monday" :
        console.log("7am");
        break;
    case "Tuesday" :
    case "Wednesday" :
    case "Thusday" :
        console.log("4am");
        break;
    case "Friday" :
        console.log("9am");
        break;
    case "Saturday" :
    case "Sunday" :
        console.log("8am");
        break;
    default:
        console.log("&am watch");
}