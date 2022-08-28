import ancientsData from "./data/ancients.js";
const difficulty = document.querySelector(".difficalty-item");
const azathoth = document.querySelector(".ancient-one");
const stageContainer = document.querySelector(".stage-container");
const deckContainer = document.querySelector(".deck");
const goDeck = document.querySelector(".go-deck ");
const stageOne = document.querySelector(".stage-one");
const stageTwo = document.querySelector(".stage-two");
const stageThree = document.querySelector(".stage-three");
// const cthulhu = document.querySelector(".ancient-two");
// const iogSothoth = document.querySelector(".anciet-three");
// const shubNiggurath = document.querySelector(".ancient-four");

// const ancientCards = document.querySelectorAll(".ancient-card ");
// for (let i = 0; i < ancientCards.length; i++) {
//   ancientCards[i].addEventListener("click", () => {
//     if (ancientCards[i].contains("active")) {
//       ancientCards[i].classList.remove("active");
//     }
//     ancientCards[i].classList.toggle("active");
//   });
// }
azathoth.addEventListener("click", () => {
  azathoth.classList.add("active-ancient");
  difficulty.classList.remove("hidden");
});

difficulty.addEventListener("click", () => {
  difficulty.classList.add("active");
  goDeck.classList.remove("hidden");
});

goDeck.addEventListener("click", () => {
  stageContainer.classList.remove("hidden");
  deckContainer.classList.remove("hidden");
  goDeck.classList.add("hidden");
});

let allBlue = 12;
let allGreen = 18;
let allBrown = 21;
let blueDeck = [];
let greenDeck = [];
let brownDeck = [];
let firstStageCards = [];
let secondStageCards = [];
let thirdStageCards = [];

let firstStageCounterGreen = 0;
let firstStageCounterBlue = 0;
let firstStageCounterBrown = 0;
let secondStageCounterGreen = 0;
let secondStageCounterBlue = 0;
let secondStageCounterBrown = 0;
let thirdStageCounterGreen = 0;
let thirdStageCounterBlue = 0;
let thirdStageCounterBrown = 0;

const allBlueArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const allGreenArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
];
const allBrownArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
];
let randomNum;
let deckCardsArray = [];
function getRandomNum(num) {
  randomNum = Math.ceil(Math.random() * num - 1);
}

const blueCardsCounter =
  ancientsData[0].firstStage.blueCards +
  ancientsData[0].secondStage.blueCards +
  ancientsData[0].thirdStage.blueCards;
const greenCardsCounter =
  ancientsData[0].firstStage.greenCards +
  ancientsData[0].secondStage.greenCards +
  ancientsData[0].thirdStage.greenCards;
const brownCardsCounter =
  ancientsData[0].firstStage.brownCards +
  ancientsData[0].secondStage.brownCards +
  ancientsData[0].thirdStage.brownCards;

const allCardsCounter =
  blueCardsCounter + greenCardsCounter + brownCardsCounter;
console.log("all cards =", allCardsCounter);
const deck = document.querySelector(".current-card");

// function addBlueCards() {
//   const img = new Image();
//   getRandomNum(allBlue);
//   img.src = `./assets/MythicCards/blue/blue${randomNum}.png`;
//   img.onload = () => {
//     deck.style.backgroundImage = `url(./assets/MythicCards/blue/blue${randomNum}.png)`;
//   };
// }

// const goDeck = document.querySelector(".go-deck");
// goDeck.addEventListener("click", () => {
//   addBlueCards();
//   console.log(randomNum);
// });

for (let i = 0; i < greenCardsCounter; i++) {
  let index;
  let currentElement;
  getRandomNum(allGreen);
  allGreen = allGreen - 1;
  currentElement = allGreenArray[randomNum];
  index = allGreenArray.indexOf(currentElement);
  greenDeck.push(`./assets/MythicCards/green/green${currentElement}.png`);
  allGreenArray.splice(index, 1);
}
for (let i = 0; i < blueCardsCounter; i++) {
  let index;
  let currentElement;
  getRandomNum(allBlue);
  allBlue = allBlue - 1;
  currentElement = allBlueArray[randomNum];
  index = allBlueArray.indexOf(currentElement);
  blueDeck.push(`./assets/MythicCards/blue/blue${currentElement}.png`);
  allBlueArray.splice(index, 1);
}

for (let i = 0; i < brownCardsCounter; i++) {
  let index;
  let currentElement;
  getRandomNum(allBrown);
  allBrown = allBrown - 1;
  currentElement = allBrownArray[randomNum];
  index = allBrownArray.indexOf(currentElement);
  brownDeck.push(`./assets/MythicCards/brown/brown${currentElement}.png`);
  allBrownArray.splice(index, 1);
}
console.log(greenDeck);
// if (ancientsData[0].firstStage.blueCards === 0) {
//   if (ancientsData[0].firstStage.blueCards === 0) {
//     thirdStageCards.green.push({
//       url: `url(./assets/MythicCards/green/green${currentElement}.png)`,
//       class: "green",
//       number: i + 1,
//     });
//   }
//   secondStageCards.green.push({
//     url: `url(./assets/MythicCards/green/green${currentElement}.png)`,
//     class: "green",
//     number: i + 1,
//   });
//   ancientsData[0].secnodStage.blueCards =
//     ancientsData[0].secondStage.greenCards;
// }
// firstStageCards.green.push({
//   url: `url(./assets/MythicCards/green/green${currentElement}.png)`,
//   class: "green",
//   number: i + 1,
// });
// ancientsData[0].firstStage.greenCards =
//   ancientsData[0].firstStage.greenCards - 1;
// allGreenArray.splice(index, 1);
for (let i = 0; greenDeck.length > i; i++) {
  if (ancientsData[0].firstStage.greenCards >= 1) {
    firstStageCards.push(greenDeck[0]);
    greenDeck.shift();
    ancientsData[0].firstStage.greenCards =
      ancientsData[0].firstStage.greenCards - 1;
    firstStageCounterGreen = firstStageCounterGreen + 1;
  }
  if (ancientsData[0].secondStage.greenCards >= 1) {
    secondStageCards.push(greenDeck[0]);
    greenDeck.shift();
    ancientsData[0].secondStage.greenCards =
      ancientsData[0].secondStage.greenCards - 1;
    secondStageCounterGreen = secondStageCounterGreen + 1;
  }
  if (ancientsData[0].thirdStage.greenCards >= 1) {
    thirdStageCards.push(greenDeck[0]);
    greenDeck.shift();
    ancientsData[0].thirdStage.greenCards =
      ancientsData[0].thirdStage.greenCards - 1;
    thirdStageCounterGreen = thirdStageCounterGreen + 1;
  }
}
for (let i = 0; blueDeck.length >= i; i++) {
  if (ancientsData[0].firstStage.blueCards >= 1) {
    firstStageCards.push(blueDeck[0]);
    blueDeck.shift();
    ancientsData[0].firstStage.blueCards =
      ancientsData[0].firstStage.blueCards - 1;
    firstStageCounterBlue = firstStageCounterBlue + 1;
  }
  if (ancientsData[0].secondStage.blueCards >= 1) {
    secondStageCards.push(blueDeck[0]);
    blueDeck.shift();
    ancientsData[0].secondStage.blueCards =
      ancientsData[0].secondStage.blueCards - 1;
    secondStageCounterBlue = secondStageCounterBlue + 1;
  }
  if (ancientsData[0].thirdStage.blueCards >= 1) {
    thirdStageCards.push(blueDeck[0]);
    blueDeck.shift();
    ancientsData[0].thirdStage.blueCards =
      ancientsData[0].thirdStage.blueCards - 1;
    thirdStageCounterGreen = thirdStageCounterGreen + 1;
  }
}
console.log("start deck", brownDeck.length);
for (let i = 0; brownDeck.length > i; i++) {
  if (ancientsData[0].firstStage.brownCards >= 1) {
    firstStageCards.push(brownDeck[0]);
    brownDeck.shift();
    ancientsData[0].firstStage.brownCards =
      ancientsData[0].firstStage.brownCards - 1;
    firstStageCounterBrown = firstStageCounterBrown + 1;
  }

  if (ancientsData[0].secondStage.brownCards >= 1) {
    secondStageCards.push(brownDeck[0]);
    brownDeck.shift();
    ancientsData[0].secondStage.brownCards =
      ancientsData[0].secondStage.brownCards - 1;
    secondStageCounterBrown = secondStageCounterBrown + 1;
  }
  if (ancientsData[0].thirdStage.brownCards > 0) {
    thirdStageCards.push(brownDeck[0]);
    brownDeck.shift();
    ancientsData[0].thirdStage.brownCards =
      ancientsData[0].thirdStage.brownCards - 1;
    thirdStageCounterBrown = thirdStageCounterBrown + 1;
  }
}
// Костыль
thirdStageCards.push(brownDeck[0]);
brownDeck.shift();
thirdStageCounterBrown = thirdStageCounterBrown + 1;

// Cards Counter

const countFirstGreen = document.querySelector(".first-stage-green");
countFirstGreen.textContent = firstStageCounterGreen;
const countFirstBlue = document.querySelector(".first-stage-blue");
countFirstBlue.textContent = firstStageCounterBlue;
const countFirstBrown = document.querySelector(".first-stage-brown");
countFirstBrown.textContent = firstStageCounterBrown;
const countSecondGreen = document.querySelector(".second-stage-green");
countSecondGreen.textContent = secondStageCounterGreen;
const countSecondBlue = document.querySelector(".second-stage-blue");
countSecondBlue.textContent = secondStageCounterBlue;
const countSecondBrown = document.querySelector(".second-stage-brown");
countSecondBrown.textContent = secondStageCounterBrown;
const countThirdGreen = document.querySelector(".third-stage-green");
countThirdGreen.textContent = thirdStageCounterGreen;
const countThirdBlue = document.querySelector(".third-stage-blue");
countThirdBlue.textContent = thirdStageCounterBlue;
const countThirdBrown = document.querySelector(".third-stage-brown");
countThirdBrown.textContent = thirdStageCounterBrown;
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

shuffle(firstStageCards);
shuffle(secondStageCards);
shuffle(thirdStageCards);
let numFirst = 0;
let numSecond = 0;
let numThird = 0;

function showFirstStageCards(num) {
  const img = new Image();
  img.src = firstStageCards[num];
  img.onload = () => {
    deck.style.backgroundImage = `url(${firstStageCards[num]}`;
  };
}
function showSecondStageCards(num) {
  const img = new Image();
  img.src = secondStageCards[num];
  img.onload = () => {
    deck.style.backgroundImage = `url(${secondStageCards[num]}`;
  };
}
function showThirdStageCards(num) {
  const img = new Image();
  img.src = thirdStageCards[num];
  img.onload = () => {
    deck.style.backgroundImage = `url(${thirdStageCards[num]}`;
  };
}

function compareFirstColor() {
  if (firstStageCards[numFirst].slice(0, 26) === "./assets/MythicCards/green") {
    firstStageCounterGreen = firstStageCounterGreen - 1;
    countFirstGreen.textContent = firstStageCounterGreen;
  }
  if (firstStageCards[numFirst].slice(0, 26) === "./assets/MythicCards/brown") {
    firstStageCounterBrown = firstStageCounterBrown - 1;
    countFirstBrown.textContent = firstStageCounterBrown;
  }
  if (firstStageCards[numFirst].slice(0, 26) === "./assets/MythicCards/blue/") {
    firstStageCounterBlue = firstStageCounterBlue - 1;
    countFirstBlue.textContent = firstStageCounterBlue;
  }
  if (firstStageCards[numFirst] === "undefined") {
    console.log("Nasral");
  }
}
function compareSecondColor() {
  if (
    secondStageCards[numSecond].slice(0, 26) === "./assets/MythicCards/green"
  ) {
    secondStageCounterGreen = secondStageCounterGreen - 1;
    countSecondGreen.textContent = secondStageCounterGreen;
  }
  if (
    secondStageCards[numSecond].slice(0, 26) === "./assets/MythicCards/brown"
  ) {
    secondStageCounterBrown = secondStageCounterBrown - 1;
    countSecondBrown.textContent = secondStageCounterBrown;
  }
  if (
    secondStageCards[numSecond].slice(0, 26) === "./assets/MythicCards/blue/"
  ) {
    secondStageCounterBlue = secondStageCounterBlue - 1;
    countSecondBlue.textContent = secondStageCounterBlue;
  }
}
function compareThirdColor() {
  if (thirdStageCards[numThird].slice(0, 26) === "./assets/MythicCards/green") {
    thirdStageCounterGreen = thirdStageCounterGreen - 1;
    countThirdGreen.textContent = thirdStageCounterGreen;
  }
  if (thirdStageCards[numThird].slice(0, 26) === "./assets/MythicCards/brown") {
    thirdStageCounterBrown = thirdStageCounterBrown - 1;
    countThirdBrown.textContent = thirdStageCounterBrown;
  }
  if (thirdStageCards[numThird].slice(0, 26) === "./assets/MythicCards/blue/") {
    thirdStageCounterBlue = thirdStageCounterBlue - 1;
    countThirdBlue.textContent = thirdStageCounterBlue;
  }
}

function goFirstStage() {
  showFirstStageCards(numFirst);
  compareFirstColor();
  numFirst = numFirst + 1;
  console.log("FIRST next card", firstStageCards[numFirst]);
}

function goSecondStage() {
  showSecondStageCards(numSecond);
  compareSecondColor();
  numSecond = numSecond + 1;
  console.log("SECOND next card", secondStageCards[numSecond]);
}

function goThirdStage() {
  showThirdStageCards(numThird);
  compareThirdColor();
  numThird = numThird + 1;
  console.log("Third next card", secondStageCards[numSecond]);
}
console.log(secondStageCards);

const deckClick = document.querySelector(".deck-img");
deckClick.addEventListener("click", () => {
  if (numFirst === firstStageCards.length - 1) {
    stageOne.classList.add("active");
  }
  if (numSecond === secondStageCards.length - 1) {
    stageTwo.classList.add("active");
  }
  if (numThird === thirdStageCards.length - 1) {
    stageThree.classList.add("active");
  }

  if (
    secondStageCards[numSecond] === undefined &&
    numThird === thirdStageCards.length - 1
  ) {
    deckClick.classList.add("hidden");
    console.log("END!!!");
  }
  if (
    secondStageCards[numSecond] === undefined &&
    thirdStageCards[numThird] !== undefined
  ) {
    goThirdStage();
  }
  if (
    firstStageCards[numFirst] === undefined &&
    secondStageCards[numSecond] !== undefined
  ) {
    goSecondStage();
  }
  if (firstStageCards[numFirst] !== undefined) {
    goFirstStage();
  }
});

if (deck.style.backgroundImage === "undefined") {
  console.log("END URL");
}
// console.log((deck.style.backgroundImage = firstStageCards[0].green[0].url));
// console.log(firstStageCards[0].green[0].url);
