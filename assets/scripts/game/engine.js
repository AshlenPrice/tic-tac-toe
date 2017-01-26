'use strict';
const newBoard = ["","","","","","","","","",""];
//create the gameboard as an array object


//
const Game = function (board) {
  this.board = board;
  this.currentPlayer = 'x';
  this.currentGameMoves = 0;
  this.wins = [
        [0,1,2],[3,4,5],[6,7,8], // Row
        [0,3,6],[1,4,7],[2,5,8], // col
        [0,4,8],[2,4,6]]; // diag

};

//establish a turn counter
//establish player wining or losing
/*Game states/statuses
  not started
  inProgress
  winner=X O
  gameTied
*/


//establishes moves.
Game.prototype.setMove = function (i){
  this.board[i] = this.currentPlayer;
};
// make a method on the Game object that changes the player
Game.prototype.changePlayer =

//


//full board function
isFull;: function() {
  for(var i = 0; i < 9; i++) {
    if (this.board[i] === this.EMPTY) {
      return false;
    }
  }
  return true;
},

// make functions for the things that need to happen in the game
// prototype the methods it will need
// setup event listeners : what happens when i clicks in index.js

// in the events.js setup game handles
















module.exports = {
newBoard,
Game,

};
