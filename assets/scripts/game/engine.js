'use strict';
const gameApi = require('./api');
const gameUi = require('./ui');

console.log('engine-works');

const Game = function() {
  this.board = ['', '', '', '', '', '', '', '', ''];
  this.gameSpaces = ["c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8"];
  this.currentPlayer = 'X';
  this.currentGameMoves = 0;
  this.activeGame = true;
  this.gameOver = false;
  this.possibleWins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Row
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // col
    [0, 4, 8],
    [2, 4, 6] // diag
  ];
};

// full board function
Game.prototype.fullBoard = function() {
  if (!this.gameOver) {
    for (let i = 0; i < 9; i++) {
      if (this.board[i] === '') {

        return false;
      }
    }
    this.gameOver = true;
    $('#message-box').text('This Match is Tie!');
    return true;
  }
};



//establishes who moves.
Game.prototype.setMove = function(i) {
  //is a condition that means is the game space is empty and it allows the rest of the funtion to run.
  if (this.board[i] === '' && !this.gameOver) {
    this.board[i] = this.currentPlayer;
    this.winner()
    this.fullBoard();
    this.changePlayer();
    return true;
  }
return false;
};

// this function should change the player after a move has been made by the opposite player

Game.prototype.changePlayer = function() {
  if (this.currentPlayer === 'X') {
    this.currentPlayer = 'O';
  } else {
    this.currentPlayer = 'X';
  }
  return this.currentPlayer;
};

/* this function should: check for a winner if a player has 3 matching indexes in a row that
match any of the wins array */

Game.prototype.winner = function() {
  if ((this.board[0] === this.currentPlayer && this.board[1] === this.currentPlayer && this.board[2] === this.currentPlayer) ||
    (this.board[3] === this.currentPlayer && this.board[4] === this.currentPlayer && this.board[5] === this.currentPlayer) ||
    (this.board[6] === this.currentPlayer && this.board[7] === this.currentPlayer && this.board[8] === this.currentPlayer) ||
    (this.board[0] === this.currentPlayer && this.board[3] === this.currentPlayer && this.board[6] === this.currentPlayer) ||
    (this.board[1] === this.currentPlayer && this.board[4] === this.currentPlayer && this.board[7] === this.currentPlayer) ||
    (this.board[2] === this.currentPlayer && this.board[5] === this.currentPlayer && this.board[8] === this.currentPlayer) ||
    (this.board[0] === this.currentPlayer && this.board[4] === this.currentPlayer && this.board[8] === this.currentPlayer) ||
    (this.board[2] === this.currentPlayer && this.board[4] === this.currentPlayer && this.board[6] === this.currentPlayer)) {
      //Not working - not sure why.
      $('#message-box').text(this.currentPlayer + ' is the WINNER');
    this.gameOver = true;
      }
      // gameApi.updateGameStatus(!this.gameOver);
};

//this resets the gameboard

Game.prototype.resetGameBoard = function() {
  this.board = ['', '', '', '', '', '', '', '', ''];
$('.box').empty();
this.gameOver = false;
this.currentPlayer = 'X';
};

//
// const newGame = new Game();
//
// $('#new-battle').on('click', function () {
// this.resetGameBoard();
// $('#message-box').text(' ');
// });



module.exports = {
  Game,
  // newGame
};
