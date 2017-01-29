'use strict';

// Create an array made of the html ids of each box on the grid.  I be used to determine the index of each move.
// let gameSpaces = ["c0", "c1", "c2", "c3", "c42", "c5", "c6", "c7", "c8"];

// let newGame = ('#reset');


const Game = function () {
  this.board = ['','','','','','','','',''];
  this.currentPlayer = 'X';
  this.currentGameMoves = 0;
  this.activeGame = true;
  this.gameOver = false;
  this.possibleWins = [
                [0,1,2],[3,4,5],[6,7,8], // Row
                [0,3,6],[1,4,7],[2,5,8], // col
                [0,4,8],[2,4,6] // diag
              ];
};
//prototype the methods the of the game

// Need to determine if the board is full.
// full board function
Game.prototype.fullBoard = function() {
  for(let i = 0; i < 9; i++) {
    if (this.board[i] === '') {
      return false;
  }
  this.gameOver = true;
  console.log('The game is a draw');// need to change something here. Printing the game is a draw after every change turn
  return true;
}
};

//establishes who moves.
Game.prototype.setMove = function (i) {
//is a condition that means is the game space is empty and it allows the rest of the funtion to run.
  if (this.board[i]===''){
    this.board[i] = this.currentPlayer;
    this.winner();
    this.fullBoard();
    this.changePlayer();
  }
};
// gameover should res
Game.prototype.resetGameBoard = function () {

};

// this function should change the player after a move has been made by the opposite player

Game.prototype.changePlayer = function (){
  if (this.currentPlayer === 'X'){
      this.currentPlayer = 'O';
  } else {
      this.currentPlayer = 'X';
  }
  return this.currentPlayer;
};

//set a check win function that

//make a postiion store to push to a playe?r
/* this function should: check for a winner if a player has 3 matching indexes in a row that
match any of the wins array */

Game.prototype.winner = function () {
  if
     ((this.board[0]=== this.currentPlayer && this.board[1] === this.currentPlayer && this.board[2]=== this.currentPlayer) ||
      (this.board[3]=== this.currentPlayer && this.board[4] === this.currentPlayer && this.board[5]=== this.currentPlayer) ||
      (this.board[6]=== this.currentPlayer && this.board[7] === this.currentPlayer && this.board[8]=== this.currentPlayer) ||
      (this.board[0]=== this.currentPlayer && this.board[3] === this.currentPlayer && this.board[6]=== this.currentPlayer) ||
      (this.board[1]=== this.currentPlayer && this.board[4] === this.currentPlayer && this.board[7]=== this.currentPlayer) ||
      (this.board[2]=== this.currentPlayer && this.board[5] === this.currentPlayer && this.board[8]=== this.currentPlayer) ||
      (this.board[0]=== this.currentPlayer && this.board[4] === this.currentPlayer && this.board[8]=== this.currentPlayer) ||
      (this.board[2]=== this.currentPlayer && this.board[4] === this.currentPlayer && this.board[6]=== this.currentPlayer)){
        console.log(this.currentPlayer + ' is the WINNER!');
        this.gameOver = true;
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

Game.prototype.getIndexes = function () {
  console.log(this.wins);
  let indexes = [];
  for (let i = 0; i < this.board.length; i++) {
    if (this.board[i] === this.currentPlayer) {
      indexes.push(i);
    }
  }
// this should push to the array .
  return indexes;
};


// Game.prototype.winning = function (indx, callback) {
//   const indexes = this.getIndexes();
//   let winner = null;
//
//   if (this.boardFull()) {
//     winner = 'tie';
//   }
//
//   for (let i = 0; i < this.winningStates.length; i++) {
//     const isWinner = this.compareArrays(indexes, this.winningStates[i]);
//
//     if (isWinner) {
//       winner = this.currentPlayer;
//       this.gameOver = true;
//       break;
//     }
//   }
//
//   callback(winner, indx);
// };

//this resets the gameboard.
  //needs to be tested in node


//

//clear the board
//function that resets the board. Can this be turned into a method?


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


module.exports = {
Game,
newGame,
};
