'use strict';

// 选择元素
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.querySelector('#current--0');
const current1EL = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// 条件开始
let scores, currentScore, activePlayer, playing;
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0EL.textContent = 0;
  score1EL.textContent = 0;
  current0EL.textContent = 0;
  current0EL.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// 点击掷色子功能
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1.随机掷色子
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2.显示色子
    console.log(dice);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3.检查点数是否为 1 ，是则切换到下一个玩家
    if (dice !== 1) {
      // 添加色子到分数
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // 切换到下一个玩家
      switchPlayer();
    }
  }
});

// 点击提交分数功能
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. 首先将当前的分数添加到 当前玩家的总分数
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2.检查分数是否 >=100 如果是则结束比赛
    if (scores[activePlayer] >= 100) {
      // 结束游戏
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }
    // 否则切换以一个玩家
    switchPlayer();
  }
});

// 重置游戏功能
btnNew.addEventListener('click', init);
