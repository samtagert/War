$(function(){
//app's state
var rank
var suit
var deck
var shuffled
var winner
var score
var lookup = {
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  'J': 11,
  'Q': 12,
  'K': 13,
  'A': 14,
}


//string of 2 = value 2, string of j = value 11
//this is an object with key value pairs of 2: 2 etc

//cached element references


//event listeners
//play
//deal
//war deal
//menu
//fight again

//functions
function init() {
  deck = []
  shuffled = []
  winner = null
  buildDeck()
  shuffle()
  render()
}

function render() {
//wait 1 second, determine which value is higher
//assign a value to the winner of round to make the next step easier?
//pop both cards, push both to winning deck (pop winner as well so that you can add it to the bottom of his deck)
//if tie, run war function?
//checks for winner aka if anyone has no items in their array, the opposite is the winner
}

function buildDeck() {
  ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
  suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
  suits.forEach(function(suit) {
		ranks.forEach(function(rank) {
      var card = {
        // css: rank + suit,
        value: lookup[rank]
      }; deck.push(card);
    });
  });
}

function shuffle() {
  while (deck.length) {
    shuffled.push(deck.splice(Math.floor(Math.random() * deck.length), 1) [0])
  }   console.log(shuffled)
}

function deal() {
//the play button basically, name TBD
//shifts each deck array
}

function war() {
//war stuff, focus on later
}

init();
});
// Page loads
// show name of game
// show rules underneath
// show start game button
//   start game runs game start (play button)

// PLAY (play button)(have an init that starts up everything including rules/start page)
// hides the start page and shows the play page
// shuffle the deck

// Player hits deal
// shows both player’s cards
// player draws the top card on their deck
// card shows for 1 second
// the player with a higher value card gets both cards added to the bottom of their deck
// if both cards are equal value, do war

// War (tie) round
// each player draws top 4 cards, and the final one is what’s played
// if the player does not have 4 cards, he loses

// Win game
// if a player’s deck is empty, he loses

//give every card a number value
//score is just player 1's score, player 2 is the opposite

//while deck.length shuffled.push(deck.splice(math.floor(math.random())*deck.length, 1)[0])