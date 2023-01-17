
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
// Set global variables - score, round number, amount of noughts & crosses, computer square selection
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
        computerGameButton.style.visibility = 'hidden'
})

computerGameButton.addEventListener('click', (gameVersusComputer))
computerGameButton.addEventListener('click', () => {
    twoPlayerButton.style.visibility = 'hidden'
    resetButton.disabled = false
    computerGameButton.disabled = true
})


function gameVersusComputer() {
    roundNumberText.innerHTML = `Round number: ${roundNumber}`
    gameArea.appendChild(roundNumberText)
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
        clickGrid++;

        if (clickGrid % 2 != 0) {
            gameGridDiv.innerHTML = 'x'
            let cross = {squareNumber: gameGridDivNumber, value: 'x'}
            ticTacArray[gameGridDivNumber - 1] = cross
        } else if (clickGrid % 2 == 0) {
            computerTurn();
        }
    })
}
}

function twoPlayerGame() {
    twoPlayerPlayerOneScore.style.visibility = 'visible'
    twoPlayerPlayerTwoScore.style.visibility = 'visible'
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
                if (gameGridDiv.innerHTML != '') return clickGrid
                clickGrid++
                console.log(clickGrid)
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

function computerTurn() {
        let aiSquareSelect = Math.floor(Math.random() * ticTacArray.length)
        let nought = {squareNumber: aiSquareSelect, value: 'o'}
        if (ticTacArray[aiSquareSelect == Number]) {
        ticTacArray[aiSquareSelect] = nought
        console.log(ticTacArray)
        }
}

function deleteGrid() {
    ticTacArray = []
    twoPlayerButton.disabled = false;
    computerGameButton.disbaled = false;
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
    twoPlayerPlayerOneScore.style.visibility = 'hidden'
    twoPlayerPlayerTwoScore.style.visibility = 'hidden'
    playerTwoScore = 0;
    resetButton.disabled = true;
    computerGameButton.disabled = false
    playerOneTurnSignal.style.color = 'white'
    playerTwoTurnSignal.style.color = 'white'
    roundNumberText.remove()
    computerGameButton.style.visibility = 'visible'
    twoPlayerButton.style.visibility = 'visible'
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