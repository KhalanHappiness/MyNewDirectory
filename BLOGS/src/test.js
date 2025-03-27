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


<script>
        document.addEventListener('DOMContentLoaded', () => {
            const cells = document.querySelectorAll('.cell');
            const statusDisplay = document.getElementById('status');
            const restartButton = document.getElementById('restart');
            
            let gameActive = true;
            let currentPlayer = 'X';
            let gameState = ['', '', '', '', '', '', '', '', ''];
            
            const winningConditions = [
                [0, 1, 2], // top row
                [3, 4, 5], // middle row
                [6, 7, 8], // bottom row
                [0, 3, 6], // left column
                [1, 4, 7], // middle column
                [2, 5, 8], // right column
                [0, 4, 8], // diagonal top-left to bottom-right
                [2, 4, 6]  // diagonal top-right to bottom-left
            ];
            
            // Messages
            const winningMessage = () => `Player ${currentPlayer} has won!`;
            const drawMessage = () => `Game ended in a draw!`;
            const currentPlayerTurn = () => `Player ${currentPlayer}'s turn`;
            
            // Set initial status message
            statusDisplay.textContent = currentPlayerTurn();
            
            // Handle cell click
            function handleCellClick(event) {
                const clickedCell = event.target;
                const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
                
                // Check if cell is already played or game is paused
                if (gameState[clickedCellIndex] !== '' || !gameActive) {
                    return;
                }
                
                // Update game state
                gameState[clickedCellIndex] = currentPlayer;
                clickedCell.textContent = currentPlayer;
                clickedCell.classList.add(currentPlayer.toLowerCase());
                
                // Check if the current player won
                checkWin();
                
                // Check if it's a draw
                checkDraw();
                
                // Change player if game is still active
                if (gameActive) {
                    changePlayer();
                }
            }
            
            function checkWin() {
                let roundWon = false;
                for (let i = 0; i < winningConditions.length; i++) {
                    const [a, b, c] = winningConditions[i];
                    const condition = gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c];
                    
                    if (condition) {
                        roundWon = true;
                        // Highlight winning cells
                        cells[a].classList.add('win');
                        cells[b].classList.add('win');
                        cells[c].classList.add('win');
                        break;
                    }
                }
                
                if (roundWon) {
                    statusDisplay.textContent = winningMessage();
                    gameActive = false;
                    return;
                }
            }
            
            function checkDraw() {
                if (!gameState.includes('') && gameActive) {
                    statusDisplay.textContent = drawMessage();
                    gameActive = false;
                }
            }
            
            function changePlayer() {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                statusDisplay.textContent = currentPlayerTurn();
            }
            
            function restartGame() {
                gameActive = true;
                currentPlayer = 'X';
                gameState = ['', '', '', '', '', '', '', '', ''];
                statusDisplay.textContent = currentPlayerTurn();
                
                cells.forEach(cell => {
                    cell.textContent = '';
                    cell.classList.remove('x', 'o', 'win');
                });
            }
            
            // Event listeners
            cells.forEach(cell => {
                cell.addEventListener('click', handleCellClick);
            });
            
            restartButton.addEventListener('click', restartGame);
        });
    </script>