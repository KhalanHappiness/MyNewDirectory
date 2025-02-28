// function declarations
//functions with parameters
function greet(name) {
  return `Hello, ${name}`;
  //to basically indicate it is the final output
}

// to call/ invoke
//happiness is a function argument which will be mapped in position eith the paramenter at declaration
console.log(greet("Happiness"));

// function expressions
//best used when you need a function that should not be hoisted
const add = function (a, b) {
  return a + b;
};

console.log(add(10, 10));

//Hoisting with var
//variables declared with var are hoisted but initialized as defined

console.log(a);
var a = 2;
console.log(a);
//Hoisting with let and const
// these varibles are hoisted but not initialised and this leads to a reference error(leads to temporal dead zone)

//console.log(b)
let b = 50;
console.log(b);

// Arrow functions
// can only be used after declaration or initialization
const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(4, 5));

// method 2

const division = (a, b) => a / b;

console.log(division(45, 9));

// immediately invoked funcitons
//generator functions
//higher order functions
function nondestructivelyupdateobject(obj, key, value) {
  const newobj = { ...obj };
  newobj[key] = value;
  return newobj;
}

console.log(nondestructivelyupdateobject("Tuesdaymenu", "lunch", "salad"));
