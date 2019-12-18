// TO DO
// - user's name
// - only 3 rounds 
// - redo scoreboard



// My Variables
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let userScore = 0;
let computerScore = 0;
let name = prompt('What\'s your name?');

// My Functions
// const getUserChoice = userInput => {
//     userInput = userInput.toLowerCase();
//    if (userInput==='rock' || 'paper' || 'scissors' || 'bomb'){
//      return userInput;
//  } else {
//    console.log('ERROR')
//  }
//  }

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  let winner = '';

  //  if (userChoice==='bomb') {
  //    winner= 'YOU WON!!!!!!!!!'
  //  } else {
  if (userChoice === computerChoice) {
    winner = 'It\'s a tie!'
  } else {
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        winner = 'Computer won';
      } else {
        winner = 'User won';
      }
    }

    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        winner = 'Computer won';
      } else {
        winner = 'User won';
      }
    }

    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        winner = 'Computer won';
      } else {
        winner = 'User won';
      }
    }
  }

  if (winner === 'User won') {
    userScore++;
  } if (winner === 'Computer won') {
    computerScore++;

  }
  return winner;
}

let playGame = (userChoice) => {
  let computerChoice = getComputerChoice();
  let winner = determineWinner(userChoice, computerChoice);
  console.log(userChoice);
  console.log(computerChoice);
  console.log(winner);
  console.log(computerScore);
  console.log(userScore);
  document.getElementById('userChoice').innerHTML = 'You chose ' + userChoice;
  document.getElementById('computerChoice').innerHTML = 'Computer chose ' + computerChoice;
  document.getElementById('winner').innerHTML = winner;
  document.getElementById('userScore').innerHTML = userScore;
  document.getElementById('computerScore').innerHTML = computerScore;
  document.getElementById('welcome').innerHTML = name;
}

// Event Listeners 

rock.addEventListener('click', function () {
  playGame('rock')
})

paper.addEventListener('click', function () {
  playGame('paper')
})

scissors.addEventListener('click', function () {
  playGame('scissors')
})


//  let myPlayButton = 
//  document.getElementById('playButton');
//  myPlayButton.addEventListener('click', determineWinner(userChoice, computerChoice))

