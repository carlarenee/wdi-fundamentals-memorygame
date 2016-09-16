var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*
if (cardTwo === cardOne) {

	alert('You found a match!');

} else {

	alert('Sorry, try again.');
}
*/

var gameBoard = document.getElementById('game-board');

var createBoard = function() {
	for(var i = 0; i<4; i++) {
		var newCards= document.createElement("div");
		newCards.className="card";
		document.getElementsByClassName('board')[0].appendChild(newCards);
	}
}

createBoard();

