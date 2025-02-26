// Variables defined outside of any function have a global scope
// they are accessible anywhere in the file even in the block scopes like functions
// const global_scope = "Global Scope"
// let changing_variable = "This is supposed to change"
// //functions: block of code to execute a specific task
// //syntax for writing a function will look like this

// function nameOfFunction(){
//     //the code in here is only related to the function

//     console.log("Inside the function", global_scope)
//     changing_variable = 10;
//     console.log(changing_variable)
// }

// function local_scope(){
//     const local_variable = "This is a local variable"

//     //variables declared in functions are only accessible inside the function
//     // varibles inside the function are destroyed on function execution completion
//     console.log(local_variable)

// }

// nameOfFunction();
// console.log(global_scope)
// console.log(changing_variable)
// local_scope();
//console.log(local_scope)


// this program prints out if a youth is allowed to vote or not

let age =19

//syntax of the if statement
if ( age >= 18){
    // this block of code will execute only if the condition  is true

    console.log("You are allowed to vote")
}else{
    console.log("You are underage ")
    // this is executed if the if statement is not executed
}


