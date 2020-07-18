const gameSummary = {
  numbers: 0,
  wins: 0,
  losses: 0,
  draws: 0
}

const game = {
  playerHand: "",
  aiHand: ""
}

const hands = [...document.querySelectorAll('.hands img')];

function handSelection() {
  game.playerHand = this.dataset.option
  hands.forEach(hand => hand.style.boxShadow = '')
  this.style.boxShadow = '0 0 0 4px gold';
  this.style.borderRadius = "50%";
  console.log(game.playerHand);
}

function aiChoice() {
  const aiHand = hands[Math.floor(Math.random() * 3)].dataset.option
  return aiHand
}

// game function
function startGame() {
  if (!game.playerHand) {
    return alert("Choose hand")
  }
  game.aiHand = aiChoice();
  const gameResult = checkResult(game.playerHand, game.aiHand);
  console.log(gameResult);
  publishResult(game.playerHand, game.aiHand, gameResult);

}


hands.forEach(hand => hand.addEventListener('click', handSelection))
document.querySelector('.start').addEventListener('click', startGame)