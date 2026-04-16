let playerScore = 0;
let computerScore = 0;
let resultsScreen = document.querySelector('#results');
let playerScoreboard = document.querySelector('#playerScore');
let computerScoreboard = document.querySelector('#computerScore');

function getComputerChoice() {
  let x = Math.floor(Math.random() * 3);
  switch (x) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function checkWinner() {
  if (playerScore == 5) {
    alert('You won :)');
    playerScore = 0;
    computerScore = 0;
    computerScoreboard.innerText = `Computer Score: ${computerScore}`;
    playerScoreboard.innerText = `Player Score: ${playerScore}`;
  } else if (computerScore == 5) {
    alert('You lost :(');
    playerScore = 0;
    computerScore = 0;
    computerScoreboard.innerText = `Computer Score: ${computerScore}`;
    playerScoreboard.innerText = `Player Score: ${playerScore}`;
  }
}

function playRound(humanChoice) {
  let computerChoice = getComputerChoice();
  humanChoice = humanChoice.toLowerCase();
  if (
    (computerChoice == 'rock' && humanChoice == 'rock') ||
    (computerChoice == 'paper' && humanChoice == 'paper') ||
    (computerChoice == 'scissors' && humanChoice == 'scissors')
  ) {
    resultsScreen.innerText = "It's a tie no points";
  } else if (
    (computerChoice == 'rock' && humanChoice == 'scissors') ||
    (computerChoice == 'paper' && humanChoice == 'rock') ||
    (computerChoice == 'scissors' && humanChoice == 'paper')
  ) {
    resultsScreen.innerText = 'you lose';
    computerScore++;
    computerScoreboard.innerText = `Computer Score: ${computerScore}`;
    checkWinner();
  } else {
    resultsScreen.innerText = 'you win';
    playerScore++;
    playerScoreboard.innerText = `Player Score: ${playerScore}`;
    checkWinner();
  }
}

let buttons = document.querySelectorAll('button');

buttons.forEach((button) =>
  button.addEventListener('click', (e) => playRound(e.target.innerText))
);
