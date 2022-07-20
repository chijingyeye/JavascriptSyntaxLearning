'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '123';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
document.querySelector('.guess').value = 11;
*/

// 随机生成一个0--20数字
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  // 输入框输入的内容转换为string
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    // 没有输入内容时
    displayMessage('No Number !');
  } else if (guess === secretNumber) {
    // 赢得游戏时
    displayMessage('🌈 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // 获得最高分时
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    // 输入内容错误时
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high !' : 'Too Low !');
      score--;
      displayScore(score);
    } else {
      displayMessage('You Lost the game!');
      displayScore(0);
    }
  }
});

// 重新开始游戏
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayScore(score);
  document.querySelector('.guess').value = '';
});
