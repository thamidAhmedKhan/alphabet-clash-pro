/* Utility functions  */
function hideElementById(hElementId) {
  const element = document.getElementById(hElementId);
  element.classList.add("hidden");
}

function showElementById(sElementId) {
  const element = document.getElementById(sElementId);
  element.classList.remove("hidden");
}

function addBG(bgElementId) {
  const element = document.getElementById(bgElementId);
  element.classList.add("bg-orange-500");
}

function removeBG(bgElementId) {
  const element = document.getElementById(bgElementId);
  element.classList.remove("bg-orange-500");
}

function getTextValue(textElementId) {
  const textElement = document.getElementById(textElementId);
  const value = parseInt(textElement.textContent);
  return value;
}

function setTextValue(textElementId, value) {
  const textElement = document.getElementById(textElementId);
  textElement.textContent = value;
}

function displayRandomLatter() {
  const alphabetAndNumbers = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  const randomIndex = Math.floor(Math.random() * alphabetAndNumbers.length);
  const randomLetter = alphabetAndNumbers[randomIndex];

  const display = document.getElementById("letter_display");
  display.textContent = randomLetter;

  console.log(randomLetter);
  addBG(randomLetter);
}

function gameOver() {
  hideElementById("game_sec");
  showElementById("score_sec");
  setTextValue("final_score", getTextValue("current_Score"));
  const currentLetter = document.getElementById("letter_display");
  const displayedLetter = currentLetter.textContent;
  removeBG(displayedLetter);
}

/* main functions */
function play() {
  hideElementById("home_sec");
  hideElementById("score_sec");
  showElementById("game_sec");
  setTextValue("current_Score", 0);
  setTextValue("current_lifes", 5);
  displayRandomLatter();
}

function handleKeyboardButtonPress(event) {
  event.stopPropagation(); // Stop event propagation

  const pressedKey = event.key;
  const currentLetter = document.getElementById("letter_display");

  if (currentLetter) {
    const displayedLetter = currentLetter.textContent;

    if (displayedLetter.toLowerCase() === pressedKey.toLowerCase()) {
      removeBG(displayedLetter);
      const currentScore = getTextValue("current_Score");
      const newScore = currentScore + 1;
      setTextValue("current_Score", newScore);
      displayRandomLatter();
    } else if (displayedLetter.toLowerCase() != pressedKey.toLowerCase()) {
      const currentLifes = getTextValue("current_lifes");
      const newLifes = currentLifes - 1;
      setTextValue("current_lifes", newLifes);

      if (newLifes === 0) {
        gameOver();
      }
    }
  } else {
    console.error('Element with ID "letter_display" not found');
  }
}
document.addEventListener("keyup", handleKeyboardButtonPress);

const playButton = document.getElementById("playButton");

playButton.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    play();
  }
});
