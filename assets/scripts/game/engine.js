'use strict';

// Create an array made of the html ids of each box on the grid.  I be used to determine the index of each move.

// let newGame = ('#reset');
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
//prototype the methods the of the game

// Need to determine if the board is full.
// full board function

Game.prototype.fullBoard = function() {
  if (!this.gameOver) {
    for (let i = 0; i < 9; i++) {
      if (this.board[i] === '') {
        return false;
      }
    }
    this.gameOver = true;
    console.log('The game is a draw'); // need to change something here. Printing the game is a draw after every change turn
    this.resetGameBoard();
    return true;
  }
};

// Game.prototype.fullBoard = function() {
//   return !this.board.includes('');
// };


//establishes who moves.
Game.prototype.setMove = function(i) {
  //is a condition that means is the game space is empty and it allows the rest of the funtion to run.
  if (this.board[i] === '' && !this.gameOver) {
    this.board[i] = this.currentPlayer;
    this.winner();
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
    console.log(this.currentPlayer + ' is the WINNER!');
    this.gameOver = true;
    this.resetGameBoard();
    return this.currentPlayer + 'is the WINNER!';
  }
};

/*
  POSSIBLE WAYS TO MAKE THIS WORK
  - a loop of some sort (forEach,array method findIndex, or find.)
      if currentPlayer has an []in board === the i of the [] inside the wins[]
      then console.log(currentPlayer wins );
  let the winning array
*/
Game.prototype.resetGameBoard = function() {
  this.board = ['', '', '', '', '', '', '', '', ''];
$ (".box").empty();
this.gameOver = false;
};


// Game.prototype.reset = function () {
//   this.currentPlayer = 'x';
//   this.gameOver = false;
//   this.board = this.newBoard.slice();
//   return this.board;
// };

// this creates the new game
/*
MAY NOT NEED THIS
function newGame() {
let newGame = new Game();
 return newGame;
}
*/

function newGame() {
  let newGame = new Game();
  return newGame;
}
console.log('engine-works');

module.exports = {
  Game,
  newGame,
};
