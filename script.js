'use strict';
let score = 20; //Number(document.querySelector('.score').textContent);
let guessed = false;
let secretNumber = randomNumber(1, 20);
let highScore = 0;
function randomNumber(min, max) {
  return Math.trunc(Math.random() * max) + min;
}

const messageChange = message =>
  (document.querySelector('.message').textContent = message);

const numberChange = number =>
  (document.querySelector('.number').textContent = number);

const scoreUpdate = score =>
  (document.querySelector('.score').textContent = score);

const bodyBgColorChange = color =>
  (document.querySelector('body').style.backgroundColor = color);

const numberElementWidthChange = width =>
  (document.querySelector('.number').style.width = width);

const onClickCheckHandler = () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess || (guess > 20 && !guessed)) {
    messageChange('Please enter a value between 1 and 20');
    return;
  } else if (guess === secretNumber && !guessed) {
    messageChange('Correct Number👌');
    numberChange(secretNumber);
    bodyBgColorChange('#60b347');
    numberElementWidthChange('30rem');
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;
    guessed = true;
  } else if (!guessed) {
    if (score > 1) {
      messageChange(
        guess < secretNumber
          ? 'Too Low!!! Try Again!'
          : 'Too High!!! Try Again!'
      );
      score--;
      scoreUpdate(score);
    } else {
      messageChange('You Lost! Press the Again button to retry!');
      scoreUpdate(0);
      bodyBgColorChange('#c62d2d');
    }
  }
};

const onClickAgainHandler = () => {
  messageChange('Start guessing...');
  document.querySelector('.guess').value = '';
  numberChange('?');
  scoreUpdate(20);
  numberElementWidthChange('15rem');
  bodyBgColorChange('#222');
  score = 20;
  guessed = false;
  secretNumber = randomNumber(1, 20);
};

document.querySelector('.check').addEventListener('click', onClickCheckHandler);
document.querySelector('.again').addEventListener('click', onClickAgainHandler);
