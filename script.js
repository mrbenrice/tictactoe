// DOM 
let ticTacArray = []
let gameBoard = document.querySelector('.gamegrid')
let twoPlayerButton = document.getElementById('twoplayer')
let resetButton = document.getElementById('resetbutton')
resetButton.disabled = true;
let gameGridDiv = document.querySelector('.gameGridDiv')
let clickGrid = 0;
let playerOneTurnSignal = document.querySelector('.playerone')
playerOneTurnSignal.style.color = 'white'
let playerTwoTurnSignal = document.querySelector('.playertwo')
playerTwoTurnSignal.style.color = 'white'

// Create two-player game
twoPlayerGame();

function twoPlayerGame() {
        twoPlayerButton.addEventListener('click', () => {
        playerOneTurnSignal.style.color = 'black'
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
                clickGrid++
                if (clickGrid % 2 != 0) {
                    gameGridDiv.innerHTML = 'x'
                    playerOneTurnSignal.style.color = 'white'
                    playerTwoTurnSignal.style.color = 'black'
                    let cross = {squareNumber: gameGridDivNumber, value: 'x'}
                    ticTacArray[gameGridDivNumber - 1] = cross
                    console.log(ticTacArray)
                    winnerAnnouncement();
                    return ticTacArray
                } else if (clickGrid % 2 == 0) {
                    gameGridDiv.innerHTML = 'o'
                    playerOneTurnSignal.style.color = 'black'
                    playerTwoTurnSignal.style.color = 'white'
                    let nought = {squareNumber: gameGridDivNumber, value: 'o'}
                    ticTacArray[gameGridDivNumber - 1] = nought
                    console.log(ticTacArray)
                    winnerAnnouncement();
                    return ticTacArray
                }
                console.log(ticTacArray)
            })
        }
        twoPlayerButton.disabled = true;
        resetButton.disabled = false;
        console.log(ticTacArray)
    })
}

function winnerAnnouncement() {
    if (clickGrid < 5) {
        return
    }
    if (ticTacArray[0].value == ticTacArray[1].value && ticTacArray[1].value == ticTacArray[2].value) {
        alert('You win!')
    } else if (ticTacArray[3].value == ticTacArray[4].value && ticTacArray[4].value == ticTacArray[5].value) {
        alert('You win!')
    } else if (ticTacArray[6].value == ticTacArray[7].value && ticTacArray[7].value == ticTacArray[8].value) {
        alert('You win!')
    } else if (ticTacArray[0].value == ticTacArray[3].value && ticTacArray[3].value == ticTacArray[6].value) {
        alert('You win!')
    } else if (ticTacArray[1].value == ticTacArray[4].value && ticTacArray[4].value == ticTacArray[7].value) {
        alert('You win!') 
    } else if (ticTacArray[2].value == ticTacArray[5].value && ticTacArray[5].value == ticTacArray[8].value) {
        alert('You win!')
    }
}

function deleteGrid() {
    ticTacArray = []
    twoPlayerButton.disabled = false;
    console.log(ticTacArray)
    let gridSquare = gameBoard.lastElementChild;
    while (gridSquare) {
        gameBoard.removeChild(gridSquare)
        gridSquare = gameBoard.lastElementChild
    }
    resetButton.disabled = true;
    playerOneTurnSignal.style.color = 'white'
    playerTwoTurnSignal.style.color = 'white'
    clickGrid = 0
}

resetButton.onclick = function() {
    deleteGrid()
}