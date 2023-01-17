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