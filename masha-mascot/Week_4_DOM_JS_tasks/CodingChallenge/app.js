/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var arrayScores, roundScore, activePlayer, gamePlaying;
function init() {
  arrayScores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.getElementById("first_dice").style.display = "none";
  document.getElementById("second_dice").style.display = "none";

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
init();

function nextPlayer() {
  !!activePlayer ? (activePlayer = 0) : (activePlayer = 1);
  roundScore = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.getElementById("first_dice").style.display = "none";
  document.getElementById("second_dice").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

/**CODING CHALLENGE 6
 *
 * PART 1
var previous_dice;
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";
    switch (true) {
      case dice == 1:
        nextPlayer();
        break;
      case dice == 6 && dice == previous_dice:
        document.querySelector("#score-" + activePlayer).textContent = 0;
        nextPlayer();
        break;
      default:
        roundScore += dice;
        document.querySelector(
          "#current-" + activePlayer
        ).textContent = roundScore;
        previous_dice = dice;
        break;
    }
  }
}); */

/** PART 2
 */
var winningScore;

document.querySelector(".winning-score").addEventListener("click", function () {
  if (gamePlaying) {
    winningScore = document.getElementById("input-winning-score").value;
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {
    arrayScores[activePlayer] += roundScore;

    document.querySelector("#score-" + activePlayer).textContent =  arrayScores[activePlayer];

    if (arrayScores[activePlayer] >= winningScore) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document.querySelector("#score-" + activePlayer).textContent = arrayScores[activePlayer];

      document.getElementById("first_dice").style.display = "none";
      document.getElementById("second_dice").style.display = "none";

      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

/** PART 3
 */

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    var diceFirst = Math.floor(Math.random() * 6) + 1;
    var diceSecond = Math.floor(Math.random() * 6) + 1;

    var diceFirstDOM = document.getElementById("first_dice");
    diceFirstDOM.style.display = "block";
    diceFirstDOM.src = "dice-" + diceFirst + ".png";

    var diceSecondDOM = document.getElementById("second_dice");
    diceSecondDOM.style.display = "block";
    diceSecondDOM.src = "dice-" + diceSecond + ".png";

    switch (true) {
      case diceFirst == 1 || diceSecond == 1:
        nextPlayer();
        break;

      case diceFirst == 6 && diceFirst == diceSecond:
        document.querySelector("#score-" + activePlayer).textContent = 0;
        nextPlayer();
        break;

      default:
        roundScore += (diceFirst + diceSecond);
        document.querySelector(
          "#current-" + activePlayer
        ).textContent = roundScore;
        break;
    }

    console.log(diceFirst, diceSecond);
  }
});