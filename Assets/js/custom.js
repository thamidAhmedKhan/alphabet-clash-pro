/* Utility functions  */
function hideElementById(hElementId) {
  let element = document.getElementById(hElementId);
  element.classList.add("hidden");
}

function showElementById(sElementId) {
  let element = document.getElementById(sElementId);
  element.classList.remove("hidden");
}

function addBG(bgElementId) {
  let element = document.getElementById(bgElementId);
  element.classList.add("bg-orange-500");
}

function removeBG(bgElementId) {
  let element = document.getElementById(bgElementId);
  element.classList.remove("bg-orange-500");
}

function displayRendomLatter() {
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
  let randomIndex = Math.floor(Math.random() * 36);
  let randomLetter = alphabetAndNumbers[randomIndex];

  const display = document.getElementById("letter_display");
  display.innerHTML = randomLetter;

  addBG(randomLetter);
}

/* main functions */
function play() {
  hideElementById("home_sec");
  showElementById("game_sec");
  displayRendomLatter();
}

function handleKeyboardButtonPress(event) {
  const pressedKey = event.key;
  const currentLetter = document.getElementById("letter_display");

  if (currentLetter) {
    const displayedLetter = currentLetter.textContent;

    if(displayedLetter === pressedKey ){
      removeBG(displayedLetter);

      const currentScoreElement = (document.getElementById('current_Score'));
      const currentScore = parseInt(currentScoreElement.textContent);
      console.log(currentScore);
      const newScore = currentScore + 1;
      currentScoreElement.textContent = newScore;

      displayRendomLatter();
    }
    else{      
      const currentLifesElement = (document.getElementById('current_lifes'));
      const currentLifes = parseInt(currentLifesElement.textContent);
      console.log(currentLifes);
      const newLifes = currentLifes - 1;
      currentLifesElement.textContent = newLifes;
    }

  } else {
    console.error('Element with ID "letter_display" not found');
  }
  
}

document.addEventListener("keyup", handleKeyboardButtonPress);
