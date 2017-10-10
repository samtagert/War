$(function(){

//app's state
var deck
var stack1
var stack2
var play1
var play2
var score1
var score2
var winner

//cached element references


//event listeners
$('button').on('click', deal)
//deal
//war deal
//menu
//fight again

//functions
function init() {
  deck = []
  stack1 = []
  stack2 = []
  play1 = []
  play2 = []
  winner = null
  buildDeck()
  shuffle()
}

function render() {
  if (stack1.length === 0) {winner = 2}
  if (stack2.length === 0) {winner = 1}
  score1 = stack1.length
  score2 = stack2.length
  console.log(score1, score2)
}

function score() {

}

function win() {

}

function buildDeck() {
  var ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A']
  var suits = ['h', 's']
  var lookup = {'02': 2, '03': 3, '04': 4, '05': 5, '06': 6, '07': 7, '08': 8, '09': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14}
  suits.forEach(function(suit) {
		ranks.forEach(function(rank) {
      var card = {
        css: suit + rank,
        value: lookup[rank]
      }; deck.push(card);
    });
  });
}

function shuffle() {
  while (deck.length) {
    stack1.push(deck.splice(Math.floor(Math.random() * deck.length), 1) [0])
  } stack2 = stack1.splice(0, 13)
}

function deal() {
  $('#play1').removeClass()
  play1[0] = stack1.shift()
  $('#play1').addClass('card').addClass(play1[0].css)
  
  $('#play2').removeClass()
  play2[0] = stack2.shift()
  $('#play2').addClass('card').addClass(play2[0].css)
  compare()
}

function compare() {
  if (play1[0].value === play2[0].value) {
    war()
  } else if (play1[0].value > play2[0].value) {
      while (play1 != false) {
      stack1.push(play1.pop())
    }
      while (play2 != false) {
      stack1.push(play2.pop())
    }
  } else {
      while (play1 != false) {
      stack2.push(play1.pop())
    }
      while (play2 != false) {
      stack2.push(play2.pop())
    }
  } render()
}

function war() {
  if (stack1.length > 3) {
    for (var i = 0; i < 4; i++) {
    play1.unshift(stack1.shift())
  }
} else {
    while (stack1.length > 0) {
    play1.unshift(stack1.shift())
  }
} if (stack2.length > 3) {
    for (var i = 0; i < 4; i++) {
    play2.unshift(stack2.shift())
  }
} else {
    while (stack2.length > 0) {
    play2.unshift(stack2.shift())
  }
}
compare()
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