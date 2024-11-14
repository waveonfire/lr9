// Initialize scores
let userScore = 0;
let computerScore = 0;
let rounds = 0;
const cards = [6,7,8,9,10,2,3,4,11];
const cardspics=["images/6.png","images/7.png","images/8.png","images/9.png","images/10.png","images/jack.png","images/queen.png","images/king.png","images/ace.png"];

document.getElementById("startbutton").addEventListener("click",startGame);
document.getElementById("generatecards").addEventListener("click",dealCards);

function startGame() {
  const playerName = document.getElementById('player-name').value;
  if (playerName.trim()==="") {
    playerName = "User";
  }
  document.getElementById('user-name').textContent = playerName;
  document.getElementById('welcome-screen').classList.add('hidden');
  document.getElementById('game-container').classList.remove('hidden');
}

function dealCards() {
  if (rounds < 3) {
    rounds++;
    const userCard = Math.floor(Math.random() * 9);
    const computerCard = Math.floor(Math.random() * 9);

    userScore += cards[userCard];
    computerScore += cards[computerCard];

    displayCards(userCard, computerCard);

    if (rounds === 3) {
      displayWinner();
    }
  }
}

function displayCards(userCard, computerCard) {
  const userCardSlot = document.getElementById('user-card-slot');
  const computerCardSlot = document.getElementById('computer-card-slot');

  const userCardElement = document.createElement('img');
  userCardElement.classList.add('card');
  userCardElement.src = cardspics[userCard];

  const computerCardElement = document.createElement('img');
  computerCardElement.classList.add('card');
  computerCardElement.src = cardspics[computerCard];

  userCardSlot.appendChild(userCardElement);
  computerCardSlot.appendChild(computerCardElement);

  document.getElementById('user-score').textContent = userScore;
  document.getElementById('computer-score').textContent = computerScore;
}

function displayWinner() {
  const resultMessage = document.getElementById('result-message');
  resultMessage.classList.remove('hidden');
  if (userScore > computerScore) {
    resultMessage.textContent = "Вітаю з перемогою, ви перемогли!";
  } else if (userScore < computerScore) {
    resultMessage.textContent = "Комп'ютер переміг! Наступного разу пощастить!";
  } else {
    resultMessage.textContent = "Нічия!";
  }
}
