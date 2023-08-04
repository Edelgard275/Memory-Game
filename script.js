const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want to research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color)
    newDiv.classList.add("face-down");

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  //create if, else if and else conditionals based on cardsFaceUp variable counter. Variable defined at bottom of code.
  if (cardsFaceUp == 0) {
    //remove face-down & add face-up classes when cards are clicked
    event.target.classList.remove("face-down")
    event.target.classList.add("face-up")
    //increase cardsFaceUp counter by 1
    cardsFaceUp = 1;
  } else if (cardsFaceUp == 1) {
    event.target.classList.remove("face-down")
    event.target.classList.add("face-up")
    //increase cardsFaceUp counter by 1 to 2 total
    cardsFaceUp = 2;
    //create a new function to compare cards at cardsFaceUp = 2 
    compareCards()
  } else {
    // do nothing if cardsFaceUp > 2
  }
}

function compareCards() {
  let faceUpCards = document.querySelectorAll(".face-up")
  if (faceUpCards[0].className === faceUpCards[1].className) {
    faceUpCards[0].classList.add("matched")
    faceUpCards[1].classList.add("matched")
    console.log("2 cards matched");
    //remove "face-up" class for next function & re-start cardsFaceUp counter to repeat conditional above
    faceUpCards[0].classList.remove("face-up")
    faceUpCards[1].classList.remove("face-up")
    cardsFaceUp = 0;
  } else {
    setTimeout(flipCardsFaceDown, 1000);
  }
  console.log("Reached end of compareCards()")
}

function flipCardsFaceDown() {
  console.log("flipCardsFaceDown()")
  let faceUpCards = document.querySelectorAll(".face-up")
  faceUpCards[0].classList.remove("face-up")
  faceUpCards[0].classList.add("face-down")
  faceUpCards[1].classList.remove("face-up")
  faceUpCards[1].classList.add("face-down")
  cardsFaceUp = 0;
}

let cardsFaceUp = 0;
// when the DOM loads
createDivsForColors(shuffledColors);

//create an eventListener to change the card's background color