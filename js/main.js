var cards = [
    {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
    },
    {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
    },
    {
    rank: "king", 
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
    },
    {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
    },
    {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
    },
    {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
    },
    {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
    },
    {
    rank: "king", 
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
    },]
var cardsInPlay = [];

//randomizes cards
var randomize = cards[Math.floor(Math.random() * cards.length)];



//checks to see if cards match and alerts user
var checkForMatch = function() {
    if(cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
     }
    else {
         alert("Sorry, try again.");
     }
     updateScore()
};

var checkForMatch2 = function() {
    if(cardsInPlay[2] === cardsInPlay[3]) {
        alert("You found a match!");
     }
    else {
        alert("Sorry, try again.");
    }
    updateScore()
}

var checkForMatch3 = function() {
    if(cardsInPlay[4] === cardsInPlay[5]) {
        alert("You found a match!");
     }
    else {
        alert("Sorry, try again.");
    }
    updateScore()
}

var checkForMatch4 = function() {
    if(cardsInPlay[6] === cardsInPlay[7]) {
        alert("You found a match!");
     }
    else {
        alert("Sorry, try again.");
    }
    updateScore()
}

var flipCard = function() {
    var cardId = this.getAttribute("data-id", cards[0].rank)
    this.setAttribute("src", cards[cardId].cardImage)
    if(cardsInPlay.length === 2) {
        checkForMatch(); 
    };
    if(cardsInPlay.length === 4) {
        checkForMatch2(); 
    };
    if(cardsInPlay.length === 6) {
        checkForMatch3(); 
    };
    if(cardsInPlay.length === 8) {
        checkForMatch4(); 
    };
    console.log("User flipped " + cards[cardId].rank)
    console.log(cards[cardId].cardImage)
    console.log(cards[cardId].suit)
    cardsInPlay.push(cards[cardId].rank)
};

//if all cards have been played flip cards back over

//displays back of card to html and then flips over to front of the card when clicked
var createBoard = function() {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement("img")
            cardElement.setAttribute("src", "images/back.png")
            cardElement.setAttribute("data-id", [i]) 
            cardElement.addEventListener("click", flipCard)
            document.getElementById("game-board").appendChild(cardElement)
    }
};

//updates score every time user finds a match
var num = 0

var updateScore = function() {
    var points = document.createElement("h2");
    var newScore = document.getElementById("score").textContent = "Score: " + (num += 1);
    console.log(newScore)
    document.getElementById("score").appendChild(points);
};


//randomize order of cards
//var switchCards = document.getElementById("change-quote").onclick = randomize;
//can make a for loop that incriments by 1 when user gets matches

createBoard();

