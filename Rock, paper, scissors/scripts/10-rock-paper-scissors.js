let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}

updateScoreElement();
/*
longer version
if (score === null) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  }
}
*/

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}


function playgame(playerMove) {
  const computerMove = doComputerMove()
    doComputerMove();

    let result = '';

    if (playerMove === 'scissors') {
      if (computerMove === 'Rock') {
        result = 'lost'
        score.losses ++
      } else if (computerMove === 'Paper') {
        result = 'won'
        score.wins ++
      } else if (computerMove === 'Scissors') {
        result = 'tied'
        score.ties ++
      }

      localStorage.setItem('score', JSON.stringify(score));

      updateScoreElement();
      document.querySelector('.js-result')
        .innerHTML = `You ${result}`;

      document.querySelector('.js-move')
        .innerHTML = `You
    <img src="images/scissors-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`;
      
    }

    if (playerMove === 'paper') {
        const computerMove = doComputerMove()
      doComputerMove();

      let result = '';

      if (computerMove === 'Rock') {
        result = 'won'
        score.wins ++
      } else if (computerMove === 'Paper') {
        result = 'tied'
        score.ties ++
      } else if (computerMove === 'Scissors') {
        result = 'lost'
        score.losses ++
      }

      localStorage.setItem('score', JSON.stringify(score));

      updateScoreElement();
      document.querySelector('.js-result')
        .innerHTML = `You ${result}`;

      document.querySelector('.js-move')
        .innerHTML = `You
    <img src="images/paper-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`;
    }

    if (playerMove === 'rock') {
        const computerMove = doComputerMove()
      doComputerMove();
      
      let result = '';

      if (computerMove === 'Rock') {
        result = 'tied'
        score.ties ++
      } else if (computerMove === 'Paper') {
        result = 'lost'
        score.losses ++
      } else if (computerMove === 'Scissors') {
        result = 'won'
        score.wins ++
      }

      localStorage.setItem('score', JSON.stringify(score));

      updateScoreElement();
      document.querySelector('.js-result')
        .innerHTML = `You ${result}`;

      document.querySelector('.js-move')
        .innerHTML = `You
    <img src="images/rock-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`;
    }
  
}


function doComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'Rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3)
      computerMove = 'Paper';
    else if (randomNumber >= 2 / 3 && randomNumber < 3 / 3)
        computerMove = 'Scissors';

          return computerMove;
}
