$(function(){
//app's state
var unshuffled
var shuffled1
var shuffled2
var play1
var play2
var stack1
var stack2
var score1
var score2
var winner

//string of 2 = value 2, string of j = value 11
//this is an object with key value pairs of 2: 2 etc

//cached element references


//event listeners
$('button').on('click', deal)
//deal
//war deal
//menu
//fight again


//cards
// var cardElement = document.
// cardElement.setAttribute

//functions
function init() {
  unshuffled = []
  shuffled1 = []
  shuffled2 = []
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
  var ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A']
  var suits = ['h', 'd', 'c', 's']
  var lookup = {'02': 2, '03': 3, '04': 4, '05': 5, '06': 6, '07': 7, '08': 8, '09': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14}
  suits.forEach(function(suit) {
		ranks.forEach(function(rank) {
      var card = {
        css: suit + rank,
        value: lookup[rank]
      }; unshuffled.push(card);
    });
  });
}

function shuffle() {
  while (unshuffled.length) {
    shuffled1.push(unshuffled.splice(Math.floor(Math.random() * unshuffled.length), 1) [0])
  } shuffled2 = shuffled1.splice(0, 26)
}

function deal() {
  if ($('.play1').hasClass('card')) {$('.play1').removeClass(play1.css)}
  play1 = shuffled1.shift()
  $('.play1').addClass('card').addClass(play1.css)
  
  if ($('.play2').hasClass('card')) {$('.play2').removeClass(play2.css)}
  play2 = shuffled2.shift()
  $('.play2').addClass('card').addClass(play2.css)
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

// Win game
// if a player’s deck is empty, he loses

//give every card a number value
//score is the length of each array