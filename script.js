'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number👌';
// document.querySelector('.number').textContent = 23;
// document.querySelector('.score').textContent = 12;
// document.querySelector('.guess').value = 23;
let score = 20; //Number(document.querySelector('.score').textContent);
let guessed = false;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
const onClickCheckHandler = () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess || (guess > 20 && !guessed)) {
    document.querySelector('.message').textContent =
      'Please enter a value between 1 and 20';
    return;
  } else if (guess === secretNumber && !guessed) {
    document.querySelector('.message').textContent = 'Correct Number👌';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;
    guessed = true;
  } else if (!guessed) {
    if (score > 1) {
      document.querySelector('.message').textContent = `${
        guess < secretNumber
          ? 'Too Low!!! Try Again!'
          : 'Too High!!! Try Again!'
      }`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You Lost! Press the Again button to retry!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#c62d2d';
    }
  }
};

const onClickAgainHandler = () => {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  guessed = false;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};

document.querySelector('.check').addEventListener('click', onClickCheckHandler);
document.querySelector('.again').addEventListener('click', onClickAgainHandler);
