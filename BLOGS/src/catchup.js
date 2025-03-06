const basketBallPlayer ={
    name: "Lebron James",
    team: "LA Lakers",
    position: "Forward",
    height: "6ft 9in",
    pontperGame: 27.2
}

//Iteration
//for ... in

for(let key in basketBallPlayer){
    console.log(key)
}

//Object keys with a for each method

Object.keys(basketBallPlayer).forEach(key => {
    console.log(`${key} => ${basketBallPlayer[key]}`)
})

Object.entries(basketBallPlayer).forEach(([key, value]) =>{
    console.log(`${key} =>${value}`)
})

//function declaration

function printPlayerStacks(player){
    let printMsg = `Player: ${player.name}, Team: ${player.team}, PPG: ${player.pontperGame}`

    return printMsg


}
console.log(printPlayerStacks(basketBallPlayer))

//callbacks: a callback function is a function passed as an argument to another function and executed later
//mostly used for asynchronous operations(fetching data from servers, event handling)

// document.addEventListener('click', function(){
//     // it takes in the event and what will happen when the event happens
// })

function processPlayer(player, x){
    console.log("processing player....")
    //inidcation of a callback in a function
    x(player)
}
//calling and passing my callback
processPlayer(basketBallPlayer, printPlayerStacks)

//lexical scoping: a function can access variables from its outer scope where it was defined and not where it was called

function createBasketBallPlayer(name, team){
    let pointsPerGame = 25 //function scope/ variable in the outer function
    function displayStats(){
        // It can access the name, team and pointspergame

        console.log(`${name}, ${team}, ${pointsPerGame}`)

    }
    displayStats()
}
createBasketBallPlayer("Steph Curry", "gsm")


