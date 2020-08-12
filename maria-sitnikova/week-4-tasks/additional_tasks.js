
let scores;
let roundScore;
let activePlayer;
let gamePlaying;
let lastDice1;
let lastDice2;
let finalScore;
const initFinalScore = 20;
const dice1DOM = document.getElementById("dice-1");
const dice2DOM = document.getElementById("dice-2");
const inputDOM = document.querySelector(".final-score");

// Replace the broken images with an image telling visitors that they are not found

const images = document.querySelectorAll("img")
images.forEach.call(images, function(el){
  el.addEventListener('error', function(e) {
    e.target.src = './404.jpg'
  })
})



// Load a css file dynamically

function CSSLoad(file) {
  const link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  link.setAttribute("href", file);
  document.getElementsByTagName("head")[0].appendChild(link);
}

CSSLoad('./text-style.css');

// Create an element

const finalScoreText = document.createElement("div")
finalScoreText.setAttribute("class", "finalScoreText")
finalScoreText.innerHTML = `points to win<br><span class="span-text"></span>`;
document.getElementsByClassName("wrapper")[0].appendChild(finalScoreText);

init();

// Attach an event handler

inputDOM.onkeyup = function () {
  let x = event.target.value;
  if (isNaN(+x) || +x === 0) {
    inputDOM.value = "";
    inputDOM.placeholder = "Enter a number";
    finalScore = initFinalScore;
  } else if (!isNaN(+x)) {
    inputDOM.value = x;
    finalScore = x;
    document.querySelector(".span-text").textContent = finalScore;
  }
};



document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    dice1DOM.style.display = "block";
    dice2DOM.style.display = "block";

    dice1DOM.src = `dice-${dice1}.png`;
    dice1DOM.alt = `dice ${dice1}`
    dice2DOM.src = `dice-${dice2}.png`;
    dice2DOM.alt = `dice ${dice2}`;




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
  document.querySelector(".span-text").textContent = finalScore;

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
