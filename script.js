let player1Element = document.querySelector("#player1Score");
let player2Element = document.querySelector("#player2Score");
let player1Button = document.querySelector("#player1Button");
let player2Button = document.querySelector("#player2Button");
let resetButton = document.querySelector("#resetButton");
let selectElement = document.querySelector("#winningPoints");

let player1Score = 0;
let player2Score = 0;
let winningScore = parseInt(selectElement.value);

selectElement.addEventListener('change', () => {
    winningScore = parseInt(selectElement.value);
});

function updateScores() {
    player1Element.innerText = player1Score;
    player2Element.innerText = player2Score;
}

function checkGameOver() {
    if (player1Score >= winningScore || player2Score >= winningScore) {
        player1Button.disabled = true;
        player2Button.disabled = true;

        player1Element.style.color = player1Score >= winningScore ? "green" : "red";
        player2Element.style.color = player2Score >= winningScore ? "green" : "red";
    }
}

function incrementScore(player) {
    if (player === 'player1') {
        player1Score++;
    } else {
        player2Score++;
    }
    updateScores();
    checkGameOver();
}

player1Button.addEventListener('click', () => incrementScore('player1'));
player2Button.addEventListener('click', () => incrementScore('player2'));

function reset() {
    player1Score = 0;
    player2Score = 0;
    updateScores();
    
    player1Button.disabled = false;
    player2Button.disabled = false;

    player1Element.style.color = "black";
    player2Element.style.color = "black";
}

resetButton.addEventListener('click', reset);
