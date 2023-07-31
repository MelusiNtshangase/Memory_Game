"use strict";

const cardArr = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },

  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

cardArr.sort(() => 0.5 - Math.random()); // A trick of sorting an ARRAY randomly!!! (SHUFFLING)

const gridDisplay = document.querySelector("#grid");
let cardsChosen = [];
let cardsChosenID = [];
const cardsWon = [];

const createBoard = function () {
  for (let i = 0; i < cardArr.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
  }
};
createBoard();

const checkMatch = function () {
  const cards = document.querySelectorAll("img");
  const resultDisplay = document.querySelector("#result");
  const optionOneID = cardsChosenID[0];
  const optionTwoID = cardsChosenID[1];
  console.log(cards);

  console.log("check 4 match!!!");

  if (optionOneID === optionTwoID) {
    alert("You clicked the same image! 😂");

    cards[optionOneID].setAttribute("src", "images/blank.png");
    cards[optionTwoID].setAttribute("src", "images/blank.png");
  }

  if (cardsChosen[0] === cardsChosen[1]) {
    alert("It's a MATCH!!! 🎉🎉🎉");
    cards[optionOneID].setAttribute("src", "images/white.png");
    cards[optionTwoID].setAttribute("src", "images/white.png");
    cards[optionOneID].removeEventListener("click", flipCard);
    cards[optionTwoID].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    alert("SORRY 💥, Try again!");
    cards[optionOneID].setAttribute("src", "images/blank.png");
    cards[optionTwoID].setAttribute("src", "images/blank.png");
  }

  resultDisplay.innerHTML = cardsWon.length;

  cardsChosen = [];
  cardsChosenID = [];

  if (cardsWon.length === cardArr.length / 2) {
    resultDisplay.innerHTML = "Congratulations, You found them all!!! 🎉🎉🎉";
  }
};

function flipCard() {
  const cardID = this.getAttribute("data-id");
  cardsChosen.push(cardArr[cardID].name);
  cardsChosenID.push(cardID);
  console.log(cardsChosen);
  console.log(cardsChosenID);
  this.setAttribute("src", cardArr[cardID].img);

  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
