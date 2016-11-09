console.log("hi");

var config = {
    apiKey: "AIzaSyBQbmpOIb8U8GnLvgjbkUAQ2Qpne7LLdIw",
    authDomain: "rpg-game-6bba7.firebaseapp.com",
    databaseURL: "https://rpg-game-6bba7.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "1087777672759"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var rock = 'rock';
  var paper = 'paper';
  var siccors = 'siccors';
  var clicks = 0;
  var player1 = '';
  var player2 = '';

  function setPlayer(){
  	var buttonValue = $('#button').val().trim();
  	player1 = buttonValue;
  	if (player1 === buttonValue){
  		player2 = "computer"
  	};
  	console.log(player1, player2);
  }

  $('#setPlayer').on('click', function(){
  	setPlayer();

  })


  function reset(){
  	if (clicks > 2){
  		$('#battle').empty();
  		clicks = 0;
  	}
  };

  $('#rock').on('click', function(){
  	$('#battle').append('<p class="rock">rock</p>')
  	clicks++;
  	console.log(clicks);
  	reset();

  	database.ref().push({
  		player1: rock
  	})
  	return false
  })

$('#paper').on('click', function(){
  	$('#battle').append('<p class="paper">paper</p>')
  	clicks++;
  	reset();

  	database.ref().push({
  		player1: paper
  	})
  	return false
  })

$('#siccors').on('click', function(){
  	$('#battle').append('<p class="siccors">siccors</p>')
  	clicks++;
  	reset();

  	database.ref().push({
  		player1: siccors
  	})
  	return false
  })



var hasRock = $('#battle').find('.rock').length;
var hasPaper = $('#battle').find('.rock').length;
var hasSiccors = $('#battle').find('.rock').length;



// database.ref().on('value', function(snapshot){
// 	if(snapshot ){

// 	}
// })




