let myName = "Happiness Khalan"
// let allows us to reassign values
// to print our consoles we can always use the js valur


console.log(myName);
myName = "Samuel"
console.log(myName);

// const as keyword: immutable

const myNumber = 10;
console.log(myNumber);

console.log(myNumber, myName)

//DATATYPES
//A sequence of characters or anything inside a quotation

let string_variable = "This is a string"
 

//. Number data types: int, float or doubles
let integers_varible = 10
let float_variable = 10.00

//Booleans: True or false


let boolean_variable = true

//functions
let function_variable = function(){
    return "Happiness Khalan"
}

//Arrays : A collection og items and this items can be of the same or different datatype

let array_varriable = ["String", 10, 10.00, true] ;

//object  : A collection of key  and value pairs

let object_varible =
{ name: "happiness",
    userrole: "lecturer",
    userEmail: "happinesskhala@gmail.com",
    userId: 78800

}

console.log(object_varible.name);

//Undefined: this is the dat type returned when a variable is declared but noe initialized

let x

console.log(x)

// NULL represents an empty or non existent value

let y = null;
console.log(y)


//type checking : checking the data type of a variable
//typeof

console.log(typeof object_varible)

console.log(`This is ${object_varible.name} a ${object_varible.userrole} at Moringa school`)

//DATA TYPE OPERATION
// in js everything is an object
// an object id a single entity eith properties and methods that work on the properties


// length an operation that allows you to get the number of 

console.log(myName.length)