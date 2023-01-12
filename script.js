//Create array which will hold the data.
let ticTacArray = []
//DOM - create a button which moves to a new round when a winner is found.
let nextRoundButton = document.getElementById('nextroundbutton')
nextRoundButton.style.display = 'none'
//General DOM - grab HTML elements.
let gameArea = document.querySelector('.gamearea')
let gameBoard = document.querySelector('.gamegrid')
let twoPlayerButton = document.getElementById('twoplayer')
let resetButton = document.getElementById('resetbutton')
resetButton.disabled = true; //Don't allow reset unless the game has started.
let gameGridDiv = document.querySelector('.gameGridDiv')
let playerOneTurnSignal = document.querySelector('.playerone')
playerOneTurnSignal.style.color = 'white'
let playerTwoTurnSignal = document.querySelector('.playertwo')
playerTwoTurnSignal.style.color = 'white'
let computerGameButton = document.getElementById('playcomputerbutton')
// Set global variables - score, round number, amount of noughts & crosses
let clickGrid = 0;
let score = 0;
let playerOneScore = 0;
let playerTwoScore = 0;
let roundNumber = 1;
//Create a round number counter.
let roundNumberText = document.createElement('div')
roundNumberText.classList.add('roundnumber')
roundNumberText.textContent = roundNumber


// Create two-player game
let scoreContainer = document.createElement('div')
scoreContainer.style.display = 'flex'
scoreContainer.style.marginTop = '10px'
gameArea.appendChild(scoreContainer)

let twoPlayerPlayerOneScore = document.createElement('div')
twoPlayerPlayerOneScore.classList.add('playerscore')


let twoPlayerPlayerTwoScore = document.createElement('div')
twoPlayerPlayerTwoScore.classList.add('playerscore')



twoPlayerButton.addEventListener('click', (twoPlayerGame))
twoPlayerButton.addEventListener('click', () => {
        playerOneTurnSignal.style.color = 'black'
})

computerGameButton.addEventListener('click', (gameVersusComputer))

function gameVersusComputer() {
    for (let i = 0; i < 9; i++) {
        let gameGridDiv = document.createElement('div')
        gameGridDiv.classList.add('gameGridDiv')
        gameGridDiv.setAttribute('data', i+1)
        gameGridDiv.style.width = "100px"
        gameGridDiv.style.height = "100px"
        gameGridDiv.style.border = "2px solid black"
        gameBoard.appendChild(gameGridDiv)
        let gameGridDivNumber = gameGridDiv.getAttribute('data')
        ticTacArray.push(gameGridDivNumber)
}
}

function twoPlayerGame() {
        for (let i = 0; i < 9; i++) {
            let gameGridDiv = document.createElement('div')
            gameGridDiv.classList.add('gameGridDiv')
            gameGridDiv.setAttribute('data', i+1)
            gameGridDiv.style.width = "100px"
            gameGridDiv.style.height = "100px"
            gameGridDiv.style.border = "2px solid black"
            gameBoard.appendChild(gameGridDiv)
            let gameGridDivNumber = gameGridDiv.getAttribute('data')
            ticTacArray.push(gameGridDivNumber)
            gameGridDiv.addEventListener('click', () => {
                if (roundNumber % 2 != 0 && clickGrid % 2 != 0) {
                    playerOneTurnSignal.style.color = 'black'
                    playerTwoTurnSignal.style.color = 'white'
                } else if (roundNumber % 2 != 0 && clickGrid % 2 == 0) {
                    playerOneTurnSignal.style.color = 'white'
                    playerTwoTurnSignal.style.color = 'black'
                } else if (roundNumber % 2 == 0 && clickGrid % 2 != 0) {
                    playerOneTurnSignal.style.color = 'white'
                    playerTwoTurnSignal.style.color = 'black'
                } else if (roundNumber % 2 == 0 && clickGrid % 2 == 0) {
                    playerOneTurnSignal.style.color = 'black'
                    playerTwoTurnSignal.style.color = 'white'
                }
                clickGrid++
                if (roundNumber % 2 != 0) {
                    if (clickGrid % 2 != 0) {
                        gameGridDiv.innerHTML = 'x'
                        let cross = {squareNumber: gameGridDivNumber, value: 'x'}
                        ticTacArray[gameGridDivNumber - 1] = cross
                        console.log(ticTacArray)
                        winnerAnnouncement();
                        return ticTacArray
                    } else if (clickGrid % 2 == 0) {
                        gameGridDiv.innerHTML = 'o'
                        let nought = {squareNumber: gameGridDivNumber, value: 'o'}
                        ticTacArray[gameGridDivNumber - 1] = nought
                        console.log(ticTacArray)
                        winnerAnnouncement();
                        return ticTacArray
                    }
                } else if (roundNumber % 2 == 0) {
                    if (clickGrid % 2 != 0) {
                        gameGridDiv.innerHTML = 'o'
                        let cross = {squareNumber: gameGridDivNumber, value: 'x'}
                        ticTacArray[gameGridDivNumber - 1] = cross
                        console.log(ticTacArray)
                        winnerAnnouncement();
                        return ticTacArray
                    } else if (clickGrid % 2 == 0) {
                        gameGridDiv.innerHTML = 'x'
                        let nought = {squareNumber: gameGridDivNumber, value: 'o'}
                        ticTacArray[gameGridDivNumber - 1] = nought
                        console.log(ticTacArray)
                        winnerAnnouncement();
                        return ticTacArray
                }}
                console.log(ticTacArray)
            })
        }
        scoreContainer.appendChild(twoPlayerPlayerOneScore)
        twoPlayerPlayerOneScore.textContent = `Player one: ${playerOneScore}`
        scoreContainer.appendChild(twoPlayerPlayerTwoScore)
        twoPlayerPlayerTwoScore.textContent = `Player two: ${playerTwoScore}`
        roundNumberText.classList.add('roundnumber')
        roundNumberText.innerHTML = `Round number: ${roundNumber}`
        gameArea.appendChild(roundNumberText)
        twoPlayerButton.disabled = true;
        resetButton.disabled = false;
        console.log(ticTacArray)
        gameEnd();
    }

nextRoundButton.addEventListener('click', () => {
    roundNumber++
    roundNumberText.innerHTML = `Round number: ${roundNumber}`
    nextRoundButton.style.display = 'none'
    if (roundNumber % 2 != 0) {
        playerOneTurnSignal.textContent = 'Player one\'s turn'
        playerOneTurnSignal.style.color = 'black'
        playerOneTurnSignal.style.fontWeight = 'normal'
        playerTwoTurnSignal.textContent = 'Player two\'s turn'
        playerTwoTurnSignal.style.color = 'white'
        playerTwoTurnSignal.style.fontWeight = 'normal'
    } else if (roundNumber % 2 == 0) {
        playerOneTurnSignal.textContent = 'Player one\'s turn'
        playerOneTurnSignal.style.color = 'white'
        playerOneTurnSignal.style.fontWeight = 'normal'
        playerTwoTurnSignal.textContent = 'Player two\'s turn'
        playerTwoTurnSignal.style.color = 'black'
        playerTwoTurnSignal.style.fontWeight = 'normal'
    }
    deleteGrid();
    twoPlayerGame();
    console.log('Next round clicked')
    clickGrid = 0;
})


function deleteGrid() {
    ticTacArray = []
    twoPlayerButton.disabled = false;
    console.log(ticTacArray)
    let gridSquare = gameBoard.lastElementChild;
    while (gridSquare) {
        gameBoard.removeChild(gridSquare)
        gridSquare = gameBoard.lastElementChild
    }

}

resetButton.onclick = function() {
    deleteGrid()
    clickGrid = 0;
    roundNumber = 1;
    playerOneScore = 0;
    playerTwoScore = 0;
    resetButton.disabled = true;
    playerOneTurnSignal.style.color = 'white'
    playerTwoTurnSignal.style.color = 'white'
    roundNumberText.remove()
}

function gameEnd() {
    if (playerOneScore == 5) {
        alert('Player one wins!') ? "" : location.reload();
    } else if (playerTwoScore == 5) {
        alert('Player two wins!') ? "" : location.reload();
    } else if (roundNumber == 20) {
        if (playerOneScore > playerTwoScore) {
            alert('Player one wins!') ? "" : location.reload();
        } else {
            alert('Player two wins!') ? "" : location.reload();
    }
}
}
//Winner announcement - abstracted away due to length.

function winnerAnnouncement() {
    //player two win message
if (roundNumber % 2 != 0) {
    if (ticTacArray[0].value == 'o' && ticTacArray[1].value == 'o' && ticTacArray[2].value == 'o') {
        playerTwoTurnSignal.textContent = "Player two wins!"
        playerTwoTurnSignal.style.color = 'blue'
        playerTwoTurnSignal.style.fontWeight = 'bolder'
        playerOneTurnSignal.style.color = 'white'
        playerTwoScore++;
        nextRoundButton.style.display = 'inline';
    } else if (ticTacArray[3].value == 'o' && ticTacArray[4].value == 'o' && ticTacArray[5].value == 'o') {
        playerTwoTurnSignal.textContent = "Player two wins!"
        playerTwoTurnSignal.style.color = 'blue'
        playerTwoTurnSignal.style.fontWeight = 'bolder'
        playerOneTurnSignal.style.color = 'white'
        playerTwoScore++;
        nextRoundButton.style.display = 'inline';
    } else if (ticTacArray[6].value == 'o' && ticTacArray[7].value == 'o' && ticTacArray[8].value == 'o' ) {
        playerTwoTurnSignal.textContent = "Player two wins!"
        playerTwoTurnSignal.style.color = 'blue'
        playerTwoTurnSignal.style.fontWeight = 'bolder'
        playerOneTurnSignal.style.color = 'white'
        playerTwoScore++;
        nextRoundButton.style.display = 'inline';
    } else if (ticTacArray[0].value == 'o' && ticTacArray[3].value == 'o' && ticTacArray[6].value == 'o' ) {
        playerTwoTurnSignal.textContent = "Player two wins!"
        playerTwoTurnSignal.style.color = 'blue'
        playerTwoTurnSignal.style.fontWeight = 'bolder'
        playerOneTurnSignal.style.color = 'white'
        playerTwoScore++;
        nextRoundButton.style.display = 'inline';
    } else if (ticTacArray[1].value == 'o' && ticTacArray[4].value == 'o' && ticTacArray[7].value == 'o' ) {
        playerTwoTurnSignal.textContent = "Player two wins!"
        playerTwoTurnSignal.style.color = 'blue'
        playerTwoTurnSignal.style.fontWeight = 'bolder'
        playerOneTurnSignal.style.color = 'white'
        playerTwoScore++;
        nextRoundButton.style.display = 'inline';
    } else if (ticTacArray[2].value == 'o' && ticTacArray[5].value == 'o' && ticTacArray[8].value == 'o' ) {
        playerTwoTurnSignal.textContent = "Player two wins!"
        playerTwoTurnSignal.style.color = 'blue'
        playerTwoTurnSignal.style.fontWeight = 'bolder'
        playerOneTurnSignal.style.color = 'white'
        playerTwoScore++;
        nextRoundButton.style.display = 'inline';
    } else if (ticTacArray[2].value == 'o' && ticTacArray[4].value == 'o' && ticTacArray[6].value == 'o' ) {
        playerTwoTurnSignal.textContent = "Player two wins!"
        playerTwoTurnSignal.style.color = 'blue'
        playerTwoTurnSignal.style.fontWeight = 'bolder'
        playerOneTurnSignal.style.color = 'white'
        playerTwoScore++;
        nextRoundButton.style.display = 'inline';
    } else if (ticTacArray[0].value == 'o' && ticTacArray[4].value == 'o' && ticTacArray[8].value == 'o' ) {
        playerTwoTurnSignal.textContent = "Player two wins!"
        playerTwoTurnSignal.style.color = 'blue'
        playerTwoTurnSignal.style.fontWeight = 'bolder'
        playerOneTurnSignal.style.color = 'white'
        playerTwoScore++;
        nextRoundButton.style.display = 'inline';
        //player one win message
    } else if (ticTacArray[0].value == 'x' && ticTacArray[1].value == 'x' && ticTacArray[2].value == 'x') {
        playerOneTurnSignal.textContent = "Player one wins!"
        playerOneTurnSignal.style.color = 'blue'
        playerOneTurnSignal.style.fontWeight = 'bolder'
        playerTwoTurnSignal.style.color = 'white'
        playerOneScore++;
        nextRoundButton.style.display = 'inline';
    } else if (ticTacArray[3].value == 'x' && ticTacArray[4].value == 'x' && ticTacArray[5].value == 'x') {
        playerOneTurnSignal.textContent = "Player one wins!"
        playerOneTurnSignal.style.color = 'blue'
        playerOneTurnSignal.style.fontWeight = 'bolder'
        playerTwoTurnSignal.style.color = 'white'
        playerOneScore++;
        nextRoundButton.style.display = 'inline';
    } else if (ticTacArray[6].value == 'x' && ticTacArray[7].value == 'x' && ticTacArray[8].value == 'x' ) {
        playerOneTurnSignal.textContent = "Player one wins!"
        playerOneTurnSignal.style.color = 'blue'
        playerOneTurnSignal.style.fontWeight = 'bolder'
        playerTwoTurnSignal.style.color = 'white'
        playerOneScore++;
        nextRoundButton.style.display = 'inline';
    } else if (ticTacArray[0].value == 'x' && ticTacArray[3].value == 'x' && ticTacArray[6].value == 'x' ) {
        playerOneTurnSignal.textContent = "Player one wins!"
        playerOneTurnSignal.style.color = 'blue'
        playerOneTurnSignal.style.fontWeight = 'bolder'
        playerTwoTurnSignal.style.color = 'white'
        playerOneScore++;
        nextRoundButton.style.display = 'inline';
    } else if (ticTacArray[1].value == 'x' && ticTacArray[4].value == 'x' && ticTacArray[7].value == 'x' ) {
        playerOneTurnSignal.textContent = "Player one wins!"
        playerOneTurnSignal.style.color = 'blue'
        playerOneTurnSignal.style.fontWeight = 'bolder'
        playerTwoTurnSignal.style.color = 'white'
        playerOneScore++;
        nextRoundButton.style.display = 'inline';
    } else if (ticTacArray[2].value == 'x' && ticTacArray[5].value == 'x' && ticTacArray[8].value == 'x' ) {
        playerOneTurnSignal.textContent = "Player one wins!"
        playerOneTurnSignal.style.color = 'blue'
        playerOneTurnSignal.style.fontWeight = 'bolder'
        playerTwoTurnSignal.style.color = 'white'
        playerOneScore++;
        nextRoundButton.style.display = 'inline';
    } else if (ticTacArray[2].value == 'x' && ticTacArray[4].value == 'x' && ticTacArray[6].value == 'x' ) {
        playerOneTurnSignal.textContent = "Player one wins!"
        playerOneTurnSignal.style.color = 'blue'
        playerOneTurnSignal.style.fontWeight = 'bolder'
        playerTwoTurnSignal.style.color = 'white'
        playerOneScore++;
        nextRoundButton.style.display = 'inline';
    } else if (ticTacArray[0].value == 'x' && ticTacArray[4].value == 'x' && ticTacArray[8].value == 'x' ) {
        playerOneTurnSignal.textContent = "Player one wins!"
        playerOneTurnSignal.style.color = 'blue'
        playerOneTurnSignal.style.fontWeight = 'bolder'
        playerTwoTurnSignal.style.color = 'white'
        playerOneScore++;
        nextRoundButton.style.display = 'inline';
    } else if (clickGrid == 9) {
        playerOneTurnSignal.textContent = "It's a tie!"
        playerOneTurnSignal.style.color = 'blue'
        playerOneTurnSignal.style.fontWeight = 'bolder'
        playerOneTurnSignal.style.marginRight = '5px'
        playerTwoTurnSignal.textContent = "Play again!"
        playerTwoTurnSignal.style.color = 'blue'
        playerTwoTurnSignal.style.fontWeight = 'bolder'
        nextRoundButton.style.display = 'inline'
    }
} else if (roundNumber % 2 == 0) {
    if (ticTacArray[0].value == 'o' && ticTacArray[1].value == 'o' && ticTacArray[2].value == 'o') {
        playerOneTurnSignal.textContent = "Player one wins!"
        playerOneTurnSignal.style.color = 'blue'
        playerOneTurnSignal.style.fontWeight = 'bolder'
        playerTwoTurnSignal.style.color = 'white'
        playerOneScore++;
        nextRoundButton.style.display = 'inline';
    } else if (ticTacArray[3].value == 'o' && ticTacArray[4].value == 'o' && ticTacArray[5].value == 'o') {
        playerOneTurnSignal.textContent = "Player one wins!"
        playerOneTurnSignal.style.color = 'blue'
        playerOneTurnSignal.style.fontWeight = 'bolder'
        playerTwoTurnSignal.style.color = 'white'
        playerOneScore++;
        nextRoundButton.style.display = 'inline';
    } else if (ticTacArray[6].value == 'o' && ticTacArray[7].value == 'o' && ticTacArray[8].value == 'o' ) {
        playerOneTurnSignal.textContent = "Player one wins!"
        playerOneTurnSignal.style.color = 'blue'
        playerOneTurnSignal.style.fontWeight = 'bolder'
        playerTwoTurnSignal.style.color = 'white'
        playerOneScore++;
        nextRoundButton.style.display = 'inline';
    } else if (ticTacArray[0].value == 'o' && ticTacArray[3].value == 'o' && ticTacArray[6].value == 'o' ) {
        playerOneTurnSignal.textContent = "Player one wins!"
        playerOneTurnSignal.style.color = 'blue'
        playerOneTurnSignal.style.fontWeight = 'bolder'
        playerTwoTurnSignal.style.color = 'white'
        playerOneScore++;
        nextRoundButton.style.display = 'inline';
    } else if (ticTacArray[1].value == 'o' && ticTacArray[4].value == 'o' && ticTacArray[7].value == 'o' ) {
        playerOneTurnSignal.textContent = "Player one wins!"
        playerOneTurnSignal.style.color = 'blue'
        playerOneTurnSignal.style.fontWeight = 'bolder'
        playerTwoTurnSignal.style.color = 'white'
        playerOneScore++;
        nextRoundButton.style.display = 'inline';
    } else if (ticTacArray[2].value == 'o' && ticTacArray[5].value == 'o' && ticTacArray[8].value == 'o' ) {
        playerOneTurnSignal.textContent = "Player one wins!"
        playerOneTurnSignal.style.color = 'blue'
        playerOneTurnSignal.style.fontWeight = 'bolder'
        playerTwoTurnSignal.style.color = 'white'
        playerOneScore++;
        nextRoundButton.style.display = 'inline';
    } else if (ticTacArray[2].value == 'o' && ticTacArray[4].value == 'o' && ticTacArray[6].value == 'o' ) {
        playerOneTurnSignal.textContent = "Player one wins!"
        playerOneTurnSignal.style.color = 'blue'
        playerOneTurnSignal.style.fontWeight = 'bolder'
        playerTwoTurnSignal.style.color = 'white'
        playerOneScore++;
        nextRoundButton.style.display = 'inline';
    } else if (ticTacArray[0].value == 'o' && ticTacArray[4].value == 'o' && ticTacArray[8].value == 'o' ) {
        playerOneTurnSignal.textContent = "Player one wins!"
        playerOneTurnSignal.style.color = 'blue'
        playerOneTurnSignal.style.fontWeight = 'bolder'
        playerTwoTurnSignal.style.color = 'white'
        playerOneScore++;
        nextRoundButton.style.display = 'inline';
        //player one win message
    } else if (ticTacArray[0].value == 'x' && ticTacArray[1].value == 'x' && ticTacArray[2].value == 'x') {
        playerTwoTurnSignal.textContent = "Player two wins!"
        playerTwoTurnSignal.style.color = 'blue'
        playerTwoTurnSignal.style.fontWeight = 'bolder'
        playerOneTurnSignal.style.color = 'white'
        playerTwoScore++;
        nextRoundButton.style.display = 'inline';
    } else if (ticTacArray[3].value == 'x' && ticTacArray[4].value == 'x' && ticTacArray[5].value == 'x') {
        playerTwoTurnSignal.textContent = "Player two wins!"
        playerTwoTurnSignal.style.color = 'blue'
        playerTwoTurnSignal.style.fontWeight = 'bolder'
        playerOneTurnSignal.style.color = 'white'
        playerTwoScore++;
        nextRoundButton.style.display = 'inline';
    } else if (ticTacArray[6].value == 'x' && ticTacArray[7].value == 'x' && ticTacArray[8].value == 'x' ) {
        playerTwoTurnSignal.textContent = "Player two wins!"
        playerTwoTurnSignal.style.color = 'blue'
        playerTwoTurnSignal.style.fontWeight = 'bolder'
        playerOneTurnSignal.style.color = 'white'
        playerTwoScore++;
        nextRoundButton.style.display = 'inline';
    } else if (ticTacArray[0].value == 'x' && ticTacArray[3].value == 'x' && ticTacArray[6].value == 'x' ) {
        playerTwoTurnSignal.textContent = "Player two wins!"
        playerTwoTurnSignal.style.color = 'blue'
        playerTwoTurnSignal.style.fontWeight = 'bolder'
        playerOneTurnSignal.style.color = 'white'
        playerTwoScore++;
        nextRoundButton.style.display = 'inline';
    } else if (ticTacArray[1].value == 'x' && ticTacArray[4].value == 'x' && ticTacArray[7].value == 'x' ) {
        playerTwoTurnSignal.textContent = "Player two wins!"
        playerTwoTurnSignal.style.color = 'blue'
        playerTwoTurnSignal.style.fontWeight = 'bolder'
        playerOneTurnSignal.style.color = 'white'
        playerTwoScore++;
        nextRoundButton.style.display = 'inline';
    } else if (ticTacArray[2].value == 'x' && ticTacArray[5].value == 'x' && ticTacArray[8].value == 'x' ) {
        playerTwoTurnSignal.textContent = "Player two wins!"
        playerTwoTurnSignal.style.color = 'blue'
        playerTwoTurnSignal.style.fontWeight = 'bolder'
        playerOneTurnSignal.style.color = 'white'
        playerTwoScore++;
        nextRoundButton.style.display = 'inline';
    } else if (ticTacArray[2].value == 'x' && ticTacArray[4].value == 'x' && ticTacArray[6].value == 'x' ) {
        playerTwoTurnSignal.textContent = "Player two wins!"
        playerTwoTurnSignal.style.color = 'blue'
        playerTwoTurnSignal.style.fontWeight = 'bolder'
        playerOneTurnSignal.style.color = 'white'
        playerTwoScore++;
        nextRoundButton.style.display = 'inline';
    } else if (ticTacArray[0].value == 'x' && ticTacArray[4].value == 'x' && ticTacArray[8].value == 'x' ) {
        playerTwoTurnSignal.textContent = "Player two wins!"
        playerTwoTurnSignal.style.color = 'blue'
        playerTwoTurnSignal.style.fontWeight = 'bolder'
        playerOneTurnSignal.style.color = 'white'
        playerTwoScore++;
        nextRoundButton.style.display = 'inline';
    } else if (clickGrid == 9) {
        playerOneTurnSignal.textContent = "It's a tie!"
        playerOneTurnSignal.style.color = 'blue'
        playerOneTurnSignal.style.fontWeight = 'bolder'
        playerOneTurnSignal.style.marginRight = '5px'
        playerTwoTurnSignal.textContent = "Play again!"
        playerTwoTurnSignal.style.color = 'blue'
        playerTwoTurnSignal.style.fontWeight = 'bolder'
        nextRoundButton.style.display = 'inline'
    }
}
}