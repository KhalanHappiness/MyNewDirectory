//referencename =[]

const fruits =["Apple", "Bananas", "Grapes"]
console.log(fruits)


// Access of elemets in arrays
//via index position, are counted from 0

console.log(fruits[2])

//we use arrays when we need an ordered list of items
// When you want to store a similar types of data collection

//array operations
//.length to get size of an array
console.log(fruits.push("Mango")) // add a new element to the array and returns a new size
console.log(fruits.length)

console.log(fruits)

console.log(fruits.unshift("pear")); // add a new element in the beginning of an array
console.log(fruits)

console.log(fruits.pop() ) //removes tje lasr item and returns it
console.log(fruits.shift()) // removes the first item from the array and returns that item

//. map .reduce .filter // does it change your array in any way?

console.log(fruits)

//OBJECTS
//unordered collection of key and valur pairs , where the keys references as properties 

User = {
    name: "Happiness",
    Id: "456789",
    email:"h.m@gmail.com"
}

User2 = {
    name: "Mwita",
    Id: "456789",
    email:"h.m@gmail.com"
}

// accedd to access values in an onject
//access using the dot notation(objectname.propertyname/ key name)
 console.log(User.name)
// used when you need a structured way to represent a single entity

// let moringaStaff= []
// let user_profile={}
// moringaStaff.push(User)
// console.log(moringaStaff)
// moringaStaff.push(User2)
// console.log(moringaStaff)

//To modify objects

User2.Id = 23456789

console.log(User2)

// to add properties

User2.location ="Nairobi"
console.log(User2)
//Checking keys
console.log(Object.keys(User2))
// checking values
console.log(Object.values(User2))

//for .. in loop
//trasverse orlooping collections
// for loop
//while loop
// for .. in for objectss

for(let key in User2){
    console.log($key => ${User2[key]} )
}