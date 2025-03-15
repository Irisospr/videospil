window.addEventListener("load", start);
let rndNum;
let mine_point;
let timer;
let timeLeft = 30; // Countdown in seconds
let mine_liv = 3; // Player starts with 3 lives
const timerElement = document.getElementById("timer_display");
const livesElement = document.getElementById("liv"); // Div for displaying lives

const countdown = setInterval(() => {
  timeLeft--;
  timerElement.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(countdown);
    showEndScreen();
    checkGameStatus();
  }
}, 1000);

console.log("Mine Point: " + mine_point);

const foodContainers = {
  sveppur: document.querySelector("#sveppur_container"),
  olifur: document.querySelector("#olifur_container"),
  bacon: document.querySelector("#bacon_container"),
  pepperoni: document.querySelector("#pepperoni_container"),
};

const foodSprites = {
  sveppur: document.querySelector("#sveppur_sprite"),
  olifur: document.querySelector("#olifur_sprite"),
  bacon: document.querySelector("#bacon_sprite"),
  pepperoni: document.querySelector("#pepperoni_sprite"),
};

const timeboard = document.querySelector("#timeboard");

function start() {
  hideAllScreens();
  document.querySelector("#start").classList.remove("hide");
  document.querySelector("#start").addEventListener("click", startGame);
}

function startGame() {
  console.log("startGame");
  hideAllScreens();

  mine_point = 0;
  mine_liv = 3;

  document.querySelector("#point").textContent = mine_point;
  document.querySelector("#liv").textContent = mine_liv;

  document.querySelector("#heart1").classList.remove("hide");
  document.querySelector("#heart2").classList.remove("hide");
  document.querySelector("#heart3").classList.remove("hide");

  function setRandomPositionAndSpeed(food) {
    const rndPos = `faldpos${generateRandomNumber(6)}`;
    const rndSpeed = `speed${generateRandomNumber(3)}`;
    foodContainers[food].classList.add(rndPos, rndSpeed);
  }

  sveppur_container.classList.add("fald");
  olifur_container.classList.add("fald");
  bacon_container.classList.add("fald");
  pepperoni_container.classList.add("fald");

  sveppur_container.addEventListener("mousedown", clickSveppur);
  olifur_container.addEventListener("mousedown", clickOlifur);

  bacon_container.addEventListener("mousedown", clickBacon);
  pepperoni_container.addEventListener("mousedown", clickPepperoni);

  sveppur_container.addEventListener("animationiteration", resetSveppur);
  olifur_container.addEventListener("animationiteration", resetOlifur);
  bacon_container.addEventListener("animationiteration", resetBacon);
  pepperoni_container.addEventListener("animationiteration", resetPepperoni);
}

function clickSveppur() {
  console.log("clickSveppur");

  this.removeEventListener("mousedown", clickSveppur);

  mine_point = mine_point + 1;

  document.querySelector("#point").textContent = mine_point;

  this.classList.add("frys");

  this.firstElementChild.classList.add("forsvind");

  this.addEventListener("animationend", resetSveppur);
}

function clickOlifur() {
  console.log("clickOlifur");

  this.removeEventListener("mousedown", clickOlifur);

  mine_point = mine_point + 1;

  document.querySelector("#point").textContent = mine_point;

  this.classList.add("frys");

  this.firstElementChild.classList.add("forsvind");

  this.addEventListener("animationend", resetOlifur);
}

function clickBacon() {
  console.log("clickBacon");

  bacon_container.removeEventListener("mousedown", clickBacon);

  bacon_container.classList.add("frys");

  bacon_sprite.classList.add("forsvind");

  let my_heart = "#heart" + mine_liv;
  document.querySelector(my_heart).classList.add("hide");

  mine_liv = mine_liv - 1;

  document.querySelector("#liv").textContent = mine_liv;

  // console.log(mine_liv);

  if (mine_liv === 0) {
    endGame();
  } else {
    // hvis der er liv tilbage, så lytter vi efter animationen på fluesvampen,
    // når animationen er færdig, så kaldes funktionen resetFlueSvamp
    bacon_container.addEventListener("animationend", resetBacon);
  }
}

function clickPepperoni() {
  console.log("clickPepperoni");

  pepperoni_container.removeEventListener("mousedown", clickPepperoni);

  pepperoni_container.classList.add("frys");

  pepperoni_sprite.classList.add("forsvind");

  let my_heart = "#heart" + mine_liv;
  document.querySelector(my_heart).classList.add("hide");

  mine_liv = mine_liv - 1;

  document.querySelector("#liv").textContent = mine_liv;

  // console.log(mine_liv);

  if (mine_liv === 0) {
    endGame();
  } else {
    // hvis der er liv tilbage, så lytter vi efter animationen på fluesvampen,
    // når animationen er færdig, så kaldes funktionen resetFlueSvamp
    pepperoni_container.addEventListener("animationend", resetPepperoni);
  }
}

function resetSveppur() {
  console.log("SveppurReset");

  this.classList = "";

  this.firstElementChild.classList = "";

  rndNum = generateRandomNumber(5);
  let rndFaldPos = "faldpos" + rndNum;
  console.log("carl" + rndFaldPos);

  this.classList.add(rndFaldPos);

  rndNum = generateRandomNumber(2);
  let rndSpeed = "speed" + rndNum;
  this.classList.add(rndSpeed);

  this.offsetHeight;
  this.classList.add("fald");

  this.addEventListener("mousedown", clickSveppur);
}

function resetOlifur() {
  console.log("SveppurReset");

  this.classList = "";

  this.firstElementChild.classList = "";

  rndNum = generateRandomNumber(5);
  let rndFaldPos = "faldpos" + rndNum;
  console.log("carl" + rndFaldPos);

  this.classList.add(rndFaldPos);

  rndNum = generateRandomNumber(2);
  let rndSpeed = "speed" + rndNum;
  this.classList.add(rndSpeed);

  this.offsetHeight;
  this.classList.add("fald");

  this.addEventListener("mousedown", clickOlifur);
}

function resetBacon() {
  console.log("flueSvampReset");

  // rydder fluesvamp_container's classList (hop, frys og pos)
  bacon_container.classList = "";
  // rydder fluesvamp_sprite's classList
  bacon_sprite.classList = "";

  // ny random position
  rndNum = generateRandomNumber(5);
  let rndPos = "pos" + rndNum;
  console.log("flue" + rndPos);
  // giv positionen til fluesvamp
  bacon_container.classList.add(rndPos);

  // force reflow på fluesvamp og sæt hoppeanimation på igen
  bacon_container.offsetHeight;
  bacon_container.classList.add("fald");

  // lyt efter klik på fluesvamp, gå til funktionen clickFluesvamp når der klikkes
  bacon_container.addEventListener("mousedown", clickBacon);
}

function resetPepperoni() {
  console.log("flueSvampReset");

  // rydder fluesvamp_container's classList (hop, frys og pos)
  pepperoni_container.classList = "";
  // rydder fluesvamp_sprite's classList
  pepperoni_sprite.classList = "";

  // ny random position
  rndNum = generateRandomNumber(5);
  let rndPos = "pos" + rndNum;
  console.log("flue" + rndPos);
  // giv positionen til fluesvamp
  pepperoni_container.classList.add(rndPos);

  // force reflow på fluesvamp og sæt hoppeanimation på igen
  pepperoni_container.offsetHeight;
  pepperoni_container.classList.add("fald");

  // lyt efter klik på fluesvamp, gå til funktionen clickFluesvamp når der klikkes
  pepperoni_container.addEventListener("mousedown", clickPepperoni);
}

function endGame() {
  console.log("endGame");
  sveppur_container.classList = "";
  olifur_container.classList = "";
  bacon_container.classList = "";
  pepperoni_container.classList = "";

  time_board.classList = "";
  time_board.removeEventListener("animationend", endGame);

  if (mine_point < 4 || mine_liv === 0) {
    gameOver();
  } else {
    levelComplete();
  }
}

// Function to show Game Over or Level Complete screen
function showGameOverScreen() {
  if (playerHasEnoughPoints()) {
    document.getElementById("level_complete").style.display = "block"; // Show level complete screen
  } else {
    document.getElementById("game_over").style.display = "block"; // Show game over screen
  }
}
function checkGameStatus() {
  if (mine_point >= 4) {
    // Check if player has 4 or more points
    levelComplete(); // Show level complete screen
  } else if (mine_liv === 0) {
    // If no lives left
    gameOver(); // Show game over screen
  }
}

function gameOver() {
  document.getElementById("game_over").style.display = "block"; // Show the game over screen
}

function levelComplete() {
  document.getElementById("level_complete").style.display = "block"; // Show the level complete screen
}

function playerHasEnoughPoints() {
  const score = parseInt(document.getElementById("point").textContent);
  return score >= 4; // Winning condition is 4 or more points
}

function generateRandomNumber(antal) {
  let number = Math.floor(Math.random() * antal) + 1;
  return number;
}

function hideAllScreens() {
  //skjuler alle skærme ved at tilføje klassen hide
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");
  document.querySelector("#start").classList.add("hide");
}
