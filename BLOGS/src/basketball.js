
const basketBallPlayer ={
    name: "Lebron James",
    team: "LA Lakers",
    position: "Forward",
    height: "6ft 9in",
    pontperGame: 27.2
}

// function a display the stats

function displayPlayerState(player){
    Object.entries(player).forEach(([key, value])=>{
        console.log(`${key} : ${value}`)
    })
}

displayPlayerState(basketBallPlayer)
// tracks the play scores across the button clicks
function playerScorer(name){
    let point = 0

    return function scoreBasket(){
        point +=2
        console.log(`${name} has now scored ${point} points` )

    }
}
const lebronScore = playerScorer("Lebron James")

//clicking the game button updates the score and dipslats the messafe

//event handling and manipulationg the DODM

function basketBallButton(playerName){
    let message =`${playerName} is ready to play`
    const playerDiv = document.getElementById("playerInfo")

    document.getElementById("gameButton").addEventListener('click', function(){
        console.log(message)
        lebronScore()
        playerDiv.innerHTML = `<p> ${playerName} just scored check the console for the update</p>`

    })
    //when writing an element inside another element we use innerHTMl 


}

basketBallButton(basketBallPlayer.name)

