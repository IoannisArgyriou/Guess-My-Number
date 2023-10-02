"use strict";

let secretNum = Math.trunc(Math.random() * 20) + 1;
let scoreSet = 20;
let high = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("Please enter a valid number...");
  } else if (guess === secretNum) {
    displayMessage("You guessed the right number 🥳");

    if (high < scoreSet) {
      high = scoreSet;
      document.querySelector(".highscore").textContent = high;
    }

    console.log((document.querySelector(".number").textContent = secretNum));

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";
  } else if (guess !== secretNum) {
    if (scoreSet > 1) {
      displayMessage(guess > secretNum ? "📈Too high!" : "📉Too low!");
      scoreSet = scoreSet - 1;
      document.querySelector(".score").textContent = scoreSet;
    } else {
      displayMessage("You're out of guesses! 😫");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".number").textContent = "?";
  scoreSet = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = scoreSet;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
});
