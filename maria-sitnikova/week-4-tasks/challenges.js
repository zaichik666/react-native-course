/*
YOUR 3 CHALLENGES
Change the game to follow these rules:
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

let scores;
let roundScore;
let activePlayer;
let gamePlaying;
let lastDice1;
let lastDice2;
let finalScore;
let initFinalScore = 20;
let dice1DOM = document.getElementById("dice-1");
let dice2DOM = document.getElementById("dice-2");
let inputDOM = document.querySelector(".final-score");

init();

inputDOM.onkeyup = function () {
  let x = event.target.value;
  if (isNaN(+x) || +x === 0) {
    inputDOM.value = "";
    inputDOM.placeholder = "Enter a number";
    finalScore = initFinalScore;
  } else if (!isNaN(+x)) {
    inputDOM.value = x;
    finalScore = x;
  }
};

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    dice1DOM.style.display = "block";
    dice2DOM.style.display = "block";

    dice1DOM.src = `dice-${dice1}.png`;
    dice2DOM.src = `dice-${dice2}.png`;

    if (dice1 === 6 && dice2 === 6) {
      scores[activePlayer] = 0;
        document.querySelector(`#score-${activePlayer}`).textContent = "0";
        nextPlayer();
    } else if (dice1 === 1 || dice2 === 1) {
       nextPlayer();
    } else {
      roundScore += dice1 + dice2;
        document.querySelector(
          `#current-${activePlayer}`
        ).textContent = roundScore;
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {
    scores[activePlayer] += roundScore;
    document.querySelector(`#score-${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= finalScore) {
      document.querySelector(`#name-${activePlayer}`).textContent = "Winner!";
      dice1DOM.style.display = "none";
      dice2DOM.style.display = "none";

      let activePlayerPannelDOM = document.querySelector(
        `.player-${activePlayer}-panel`
      );
      activePlayerPannelDOM.classList.add("winner");
      activePlayerPannelDOM.classList.remove(".active");
      gamePlaying = false;
    } else {
      nextPlayer();
      dice1DOM.style.display = "none";
      dice2DOM.style.display = "none";

    }
  }
});

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  lastDice1 = 0;
  lastDice2 = 0;
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  lastDice1 = 0;
  lastDice2 = 0;
  finalScore = initFinalScore;

  dice1DOM.style.display = "none";
  dice2DOM.style.display = "none";

  inputDOM.value = "";
  inputDOM.placeholder = "Final score";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}
