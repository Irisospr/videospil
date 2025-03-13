window.addEventListener("load", start);

let mine_point;
let mine_liv;
let rndNum;

const sveppur_container = document.querySelector("#sveppur_container");
const sveppur_sprite = document.querySelector("#sveppur_sprite");
const olifur_container = document.querySelector("#olifur_container");
const olifur_sprite = document.querySelector("#olifur_sprite");

const bacon_container = document.querySelector("#bacon_container");
const bacon_sprite = document.querySelector("#bacon_sprite");
const pepperoni_container = document.querySelector("#pepperoni_container");
const pepperoni_sprite = document.querySelector("#pepperoni_sprite");

const timeglas = document.querySelector("#timeglas");

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

  timeglas.classList.add("timer");
  timeglas.addEventListener("animationend", endGame);

  rndNum = generateRandomNumber(6);
  let rndFaldPos = "faldpos" + rndNum;
  sveppur_container.classList.add(rndFaldPos);

  rndNum = generateRandomNumber(6);
  rndFaldPos = "faldpos" + rndNum;
  olifur_container.classList.add(rndFaldPos);

  rndNum = generateRandomNumber(3);
  rndDelay = "delay" + rndNum;
  sveppur_container.classList.add(rndDelay);

  rndNum = generateRandomNumber(3);
  rndDelay = "delay" + rndNum;
  olifur_container.classList.add(rndDelay);

  rndNum = generateRandomNumber(3);
  let rndSpeed = "speed" + rndNum;
  sveppur_container.classList.add(rndSpeed);

  rndNum = generateRandomNumber(3);
  rndSpeed = "speed" + rndNum;
  olifur_container.classList.add(rndSpeed);

  rndNum = generateRandomNumber(6);
  rndFaldPos = "faldpos" + rndNum;
  bacon_container.classList.add(rndFaldPos);

  rndNum = generateRandomNumber(3);
  rndFaldPos = "faldpos" + rndNum;
  pepperoni_container.classList.add(rndFaldPos);

  rndNum = generateRandomNumber(3);
  rndDelay = "delay" + rndNum;
  bacon_container.classList.add(rndDelay);

  rndNum = generateRandomNumber(3);
  rndDelay = "delay" + rndNum;
  pepperoni_container.classList.add(rndDelay);

  rndNum = generateRandomNumber(2);
  rndSpeed = "speed" + rndNum;
  bacon_container.classList.add(rndSpeed);

  rndNum = generateRandomNumber(2);
  rndSpeed = "speed" + rndNum;
  pepperoni_container.classList.add(rndSpeed);

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
  timeglas.classList = "";
  timeglas.removeEventListener("animationend", endGame);

  if (mine_point < 4 || mine_liv === 0) {
    gameOver();
  } else {
    levelComplete();
  }
}

function gameOver() {
  console.log("gameOver");
  // vis game over skærm
  hideAllScreens();
  document.querySelector("#game_over").classList.remove("hide");
  // lyt efter om der bliver klikket på spil-igen-knappen
  document.querySelector("#spil_igen_1").addEventListener("click", startGame);
}

function levelComplete() {
  console.log("levelComplete");
  hideAllScreens();
  document.querySelector("#level_complete").classList.remove("hide");
  document.querySelector("#spil_igen_2").addEventListener("click", startGame);
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
