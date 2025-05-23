document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('#game-board');
    const startButton = document.getElementById('start-game');
    const player1Score = document.getElementById('player1-score');
    const player2Score = document.getElementById('player2-score');
    const timerDisplay = document.getElementById('timer');

    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    let currentPlayer = 1;
    let scores = { 1: 0, 2: 0 };
    let timer;
    let timeRemaining = 60;

    const cardArray = [
  { name: 'goku', img: 'images/goku.png' },
  { name: 'goku', img: 'images/goku.png' },
  { name: 'vegeta', img: 'images/vegeta.png' },
  { name: 'vegeta', img: 'images/vegeta.png' },
  { name: 'gohan', img: 'images/gohan.png' },
  { name: 'gohan', img: 'images/gohan.png' },
  { name: 'piccolo', img: 'images/piccolo.png' },
  { name: 'piccolo', img: 'images/piccolo.png' },
  { name: 'trunks', img: 'images/trunks.png' },
  { name: 'trunks', img: 'images/trunks.png' }
];

    function shuffle(array) {
        array.sort(() => 0.5 - Math.random());
    }

    function createBoard() {
        shuffle(cardArray);
        grid.innerHTML = '';
        cardsWon = [];
        scores = { 1: 0, 2: 0 };
        player1Score.textContent = 0;
        player2Score.textContent = 0;
        timeRemaining = 60;
        timerDisplay.textContent = timeRemaining;
        currentPlayer = 1;

        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }

        startTimer();
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        if (!cardsChosenId.includes(cardId)) {
            cardsChosen.push(cardArray[cardId].name);
            cardsChosenId.push(cardId);
            this.setAttribute('src', cardArray[cardId].img);

            if (cardsChosen.length === 2) {
                setTimeout(checkForMatch, 500);
            }
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('#game-board img');
        const firstCardId = cardsChosenId[0];
        const secondCardId = cardsChosenId[1];

        if (cardsChosen[0] === cardsChosen[1] && firstCardId !== secondCardId) {
            cards[firstCardId].style.visibility = 'hidden';
            cards[secondCardId].style.visibility = 'hidden';
            cardsWon.push(cardsChosen);

            scores[currentPlayer] += 10;
            updateScores();
        } else {
            cards[firstCardId].setAttribute('src', 'images/blank.png');
            cards[secondCardId].setAttribute('src', 'images/blank.png');
        }

        cardsChosen = [];
        cardsChosenId = [];
        currentPlayer = currentPlayer === 1 ? 2 : 1;

        if (cardsWon.length === cardArray.length / 2) {
            clearInterval(timer);
            alert('Game Over! Player 1 Score: ' + scores[1] + ' | Player 2 Score: ' + scores[2]);
        }
    }

    function updateScores() {
        player1Score.textContent = scores[1];
        player2Score.textContent = scores[2];
    }

    function startTimer() {
        timer = setInterval(() => {
            timeRemaining--;
            timerDisplay.textContent = timeRemaining;

            if (timeRemaining <= 0) {
                clearInterval(timer);
                alert('Time Up! Player 1 Score: ' + scores[1] + ' | Player 2 Score: ' + scores[2]);
            }
        }, 1000);
    }

    startButton.addEventListener('click', createBoard);
});
