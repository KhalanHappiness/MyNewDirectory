// console.log(this)

// "use strict"
// function show(){
//     console.log(this) // this points to undefined
// }
// show()

const person = {
    name: "happinessK",
    greet : function(){
        console.log(this.name)
    }
}


person.greet()



function greet(){
    const pers = {name: "Happiness"}
    console.log(`hello, my name is  ${this.name}`)
    //this has to point to an object
    //whenever we bring in this, it has to point to an object
}
//call is a method that allows us to call a function with a specified this value
greet.call(person)

function introduce(city, country){
    console.log(   `I am ${this.name} from ${city}, ${country}`)
}

introduce.call(person, "nairobi", "Kenya")

//bind method: returns a new function with a bind this
//Does not execute the function immediately instead it returns a new function with a given 'this'
// you have to create a new variable to store the reference to the binded function


const boundGreet = greet.bind(person)
boundGreet()
const boundintro = introduce.bind(person, "Kisumu", "Kenya")
boundintro()

//apply method: it is similar to call ie immediately invokes the function
//it accepts arguments as an array

introduce.apply(person, ["Mombasa", "Kenya"])

// arrow functions do not have their owwn this context
//am arrow function must inherit this refernce from a lexical scopung perspective
const user4 = {
    name: "Adam",
    greet: function(){
        const arrowGreet = () => {
            console.log(`Hello myname is ${this.name}`)
        }
        arrowGreet()
    }
}
user4.greet()