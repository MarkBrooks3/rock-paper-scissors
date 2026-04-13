function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    let x = Math.random();
    if (x < 0.3333333333) {
      return 'rock';
    } else if (x < 0.6666666666) {
      return 'paper';
    } else {
      return 'scissors';
    }
  }

  function getHumanChoice() {
    return prompt('Rock, Paper, Scissors shoot...');
  }

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (computerChoice == 'rock') {
      if (humanChoice == 'rock') {
        console.log("It's a tie no points");
      } else if (humanChoice == 'paper') {
        playerScore++;
        console.log('Paper beats rock , you win!');
      } else {
        computerScore++;
        console.log('Rock beats scissors, you lose');
      }
    } else if (computerChoice == 'paper') {
      if (humanChoice == 'rock') {
        computerScore++;
        console.log('Paper beats rock, you lose');
      } else if (humanChoice == 'paper') {
        console.log("It's a tie no points");
      } else {
        playerScore++;
        console.log('Scissors beats paper, you win!');
      }
    } else {
      if (humanChoice == 'rock') {
        playerScore++;
        console.log('Rock beats scissors, you win!');
      } else if (humanChoice == 'paper') {
        computerScore++;
        console.log('Scissors beats paper, you lose');
      } else {
        console.log("It's a tie no points");
      }
    }
  }

  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  console.log(`player score:${playerScore}`);
  console.log(`computer score:${computerScore}`);
}

playGame();
