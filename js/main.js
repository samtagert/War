$(function(){

//app's state
var deck
var stack1
var stack2
var play1
var play2
var score1
var score2

//cached element references


//event listeners
$('#play').on('click', playGame)
$('#deal').on('click', deal)
$('#war').on('click', war)
//menu in top left
//play again

//functions
function init() {
  $('#war').hide()
  $('.inPlay').hide()
  $('.inMenu').show()
  $('.gif').hide()
  $('h1').html("WAR")
  $('#deal').animate({borderSpacing: -720}, {
    step: function(now,fx) {
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
},'linear');
  $('#bomb').attr('src', "https://openclipart.org/image/2400px/svg_to_png/252171/bomb.png").css({"left": "15px", 'width':'100px'})
  $('#play1').removeClass().addClass("xlarge card back")
  $('#play2').removeClass().addClass("xlarge card back")  
  deck = []
  stack1 = []
  stack2 = []
  play1 = []
  play2 = []
  buildDeck()
  shuffle()
  score()
}

function playGame() {
  $('.inMenu').hide()
  $('.inPlay').show()
  $('#deal').animate({borderSpacing: 720}, {
    step: function(now,fx) {
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
  },'linear');
  $('#war').hide()
}

function render() {
  if (stack1.length === 0 || stack2.length === 0) {win()}
  score()
}

function score() {
  score1 = stack1.length
  score2 = stack2.length
  $('#score1').html(score1)
  $('#score2').html(score2)

}

function win() {
  stack2.length === 0 ? $('h1').html("P1 WINS") : $('h1').html("P2 WINS")
  var winner = stack2.length === 0 ? $('#gif1') : $('#gif2')
  var loser = stack1.length === 0 ? $('#gif1') : $('#gif2')
  $('.gif').show()
  $('h4').html('Good job!')
  $('#deal').attr("disabled", "")
  winGif()
  loseGif()
  $('#bomb').attr('src', 'https://media.giphy.com/media/oe33xf3B50fsc/giphy.gif').css({'width':'300px'})
  function winGif() {
    $(winner).attr('src', 'https://media.giphy.com/media/3oz8xHu6yNmd7T3QqI/giphy.gif')
  }
  function loseGif() {
    $(loser).attr('src', loseGifs[Math.floor(Math.random() * (loseGifs.length))])
  }
  setTimeout (function() {
    $('#deal').removeAttr("disabled", "")    
    init()
  }, 7000)
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
      }; deck.push(card);
    });
  });
}

function shuffle() {
  while (deck.length) {
    stack1.push(deck.splice(Math.floor(Math.random() * deck.length), 1) [0])
  } stack2 = stack1.splice(0, 26)
}

function changePicture(play) {
  $(play).removeClass()
  var currentPlayer = play === '#play1' ? play1 : play2
  var currentStack = play === '#play1' ? stack1 : stack2
  currentPlayer[0] = currentStack.shift()
  $(play).addClass('card').addClass('xlarge').addClass(currentPlayer[0].css)
}

function deal() {
  changePicture('#play1')
  changePicture('#play2')
  compare()
}

function compare() {
  if (play1[0].value === play2[0].value) {
    warGif()
    $('h1').hide()
    $('h4').hide()
    $('#deal').hide()
    $('#war').show()
    $('.gif').show()
    $('#war').attr("disabled", "")
    setTimeout(function() {
      $('#war').removeAttr("disabled", "")
    }, 1000);
    return
  } else if (play1[0].value > play2[0].value) {
      while (play1.length > 0) {
        stack1.push(play1.pop())
        $('#bomb').animate({ "left": "+=6px" }, 50)
    } 
      while (play2.length > 0) {
        stack1.push(play2.pop())
        $('#bomb').animate({ "left": "+=6px" }, 50)
    } 
    //have flavor text code here and animation of cards going to winner (has to be very quick)
  } else {
      while (play2.length > 0) {
        stack2.push(play2.pop())
        $('#bomb').animate({ "left": "-=6px" }, 50)
    } 
      while (play1.length > 0) {
        stack2.push(play1.pop())
        $('#bomb').animate({ "left": "-=6px" }, 50)
    } 
    //have flavor text code here and animation of cards going to winner (has to be very quick)
  }
  $('#war').hide()
  $('.gif').hide()  
  $('#deal').show()
  $('h1').show()
  $('h4.inPlay').show()
  render()
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
  $('#play1').removeClass()
  $('#play2').removeClass()  
  $('#play1').addClass('card').addClass('xlarge').addClass(play1[0].css)
  $('#play2').addClass('card').addClass('xlarge').addClass(play2[0].css)  
  compare()
}

var warGifs = ['https://media.giphy.com/media/3reGZ5XDFWPte/giphy.gif',
          'https://media.giphy.com/media/TKFPaEt0YWwyk/giphy.gif',
          'https://media.giphy.com/media/3og0IGYBSB8WykDt16/giphy.gif',
          'https://media.giphy.com/media/vlbVMxsUYSLQs/giphy.gif',
          'https://media.giphy.com/media/cAiQiBZEWWzAI/giphy.gif',
          'https://media.giphy.com/media/9umH7yTO8gLYY/giphy.gif',
          'https://media.giphy.com/media/DMvK89Svcx7t6/giphy.gif',
          'https://media.giphy.com/media/aoNxAPcc5hyQo/giphy.gif',
          'https://media.giphy.com/media/l1J3Tqz2fpsx60MDe/giphy.gif',
          'https://media.giphy.com/media/yyoHU6mOdu6UU/giphy.gif',
          'https://media.giphy.com/media/Pn1232jBLN0TC/giphy.gif',
          'https://media.giphy.com/media/scmqsNR8Zyf9m/giphy.gif']

var loseGifs = ['https://media.giphy.com/media/EizPK3InQbrNK/giphy.gif',
                'https://media.giphy.com/media/Z5R4RxA1xwVnq/giphy.gif',
                'https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif',
                'https://media.giphy.com/media/Hwq45iwTIUBGw/giphy.gif',
                'https://media.giphy.com/media/Ll5vSMprGdwe4/giphy.gif',
                'https://media.giphy.com/media/26BGqofNXjxluwX0k/giphy.gif',
                'https://media.giphy.com/media/ZeB4HcMpsyDo4/giphy.gif']




function warGif() {
  $('#gif1').attr('src', warGifs[Math.floor(Math.random() * (warGifs.length))])
  $('#gif2').attr('src', warGifs[Math.floor(Math.random() * (warGifs.length))])
  $('.gif').show()  
}

init();
});

//icebox
//have option in main menu for full deck or half deck game
//bootstrap collapse for rules
//jumbotron for top
//possible progress bar for bomb?

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