//Arrays
//There are two types arrays
//immutable - they will ccareate new array refeereneces
//.map() transfers each element in the array according to logic

const numbers = [1, 2, 3, 4, 5]

const doubled = numbers.map(num =>{
    return num * 2
})
let newArray = []

for(let i =0; i<numbers.length; i++)
{
   let result =  number[i]*2
   newArray.push(result)
}