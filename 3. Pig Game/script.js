'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

score0El.textContent = 0;
score1El.textContent = 0;
// faghat baraye tamrin. vagarna niazi be in kara nabod va mishod toye html az hamoon aval 0 gharar dad.

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const btnNew = document.querySelector('.btn--new');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

diceEl.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePleyer = 0;
let playing = true;

function changeActive() {
  currentScore = 0;
  document.getElementById(`current--${activePleyer}`).textContent = 0;
  activePleyer = activePleyer == 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

btnNew.addEventListener('click', function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;

  document
    .querySelector(`.player--${activePleyer}`)
    .classList.remove('player--active');
  player0El.classList.add('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  scores = [0, 0];
  currentScore = 0;
  activePleyer = 0;
  playing = true;
  diceEl.classList.add('hidden');
});

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice != 1) {
      currentScore += dice;
      document.getElementById(`current--${activePleyer}`).textContent =
        currentScore;
    } else {
      changeActive();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePleyer] += currentScore;
    document.getElementById(`score--${activePleyer}`).textContent =
      scores[activePleyer];
    if (scores[activePleyer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePleyer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePleyer}`)
        .classList.add('player--winner');
    } else {
      changeActive();
    }
  }
});
