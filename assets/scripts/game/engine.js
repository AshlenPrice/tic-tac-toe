'use strict';

// Create an array made of the html ids of each box on the grid.  I be used to determine the index of each move.
// let gameSpaces = ["c0", "c1", "c2", "c3", "c42", "c5", "c6", "c7", "c8"];

// let newGame = ('#reset');


const Game = function () {
  this.board = ['','','','','','','','',''];
  this.currentPlayer = 'x';
  this.currentGameMoves = 0;
  this.gameActive = true;
  this.possibleWins = [
                [0,1,2],[3,4,5],[6,7,8], // Row
                [0,3,6],[1,4,7],[2,5,8], // col
                [0,4,8],[2,4,6] // diag
              ];
};




// Game.prototype.newGame = function () {
//   for (let i = 0; this.board.length; i++){
//     this.board[i] = '';
//   }
// };


// Need to determine if the board is full.
// full board function
Game.prototype.fullBoard = function() {
  for(let i = 0; i < 9; i++) {
    if (this.board[i] === this.EMPTY) {
      return false;
    }
  }
  return true;
};
//establish a turn counter-- DO I EVEN NEED A TURN COUNTER?

// create a gameState prototype???


//establishes who moves.
Game.prototype.setMove = function (i) {
//is a condition that means is the game space is empty and it allows the rest of the funtion to run.
  if (this.board[i]===''){
    this.board[i] = this.currentPlayer;

 }

};


// this function should change the player after a move has been made by the opposite player

Game.prototype.changePlayer = function (){
  if (this.currentPlayer === 'x'){
      this.currentPlayer = 'o';
  } else {
      this.currentPlayer = 'x';
  }
  return this.currentPlayer;
};

//set a check win function that

//make a postiion store to push to a playe?r
/* this function should: check for a winner if a player has 3 matching indexes in a row that
match any of the wins array */

Game.prototype.winner = function () {
  console.log(this.possibleWins);
  for (let winIndex= 0; winIndex < this.possibleWins.length; winIndex++){
  console.log(this.possibleWins[winIndex]);
      // if (this.board[winIndex]==='x'){
      //   console.log("winner:x");
      // } else if (this.wins[winIndex][j]==='o'){
      //   console.log("winner:o");
      // }
    }
};
  if ((board[0]=== 'x' && board[1] === 'x' && board[2]=== 'x') ||
      (board[3]=== 'x' && board[4] === 'x' && board[5]=== 'x') ||
      (board[6]=== 'x' && board[7] === 'x' && board[8]=== 'x') ||
      (board[0]=== 'x' && board[3] === 'x' && board[6]=== 'x') ||
      (board[1]=== 'x' && board[4] === 'x' && board[7]=== 'x') ||
      (board[2]=== 'x' && board[5] === 'x' && board[8]=== 'x') ||
      (board[0]=== 'x' && board[4] === 'x' && board[8]=== 'x') ||
      (board[2]=== 'x' && board[4] === 'x' && board[6]=== 'x')){
        alert("X wins!");
}  else if
    ((board[0] === 'o' && board[1] === 'o' && board[2] === 'o') ||
      (board[3] === 'o' && board[4] === 'o' && board[5] === 'o') ||
      (board[6] === 'o' && board[7] === 'o' && board[8] === 'o') ||
      (board[0] === 'o' && board[3] === 'o' && board[6] === 'o') ||
      (board[1] === 'o' && board[4] === 'o' && board[7] === 'o') ||
      (board[2] === 'o' && board[5] === 'o' && board[8] === 'o') ||
      (board[0] === 'o' && board[4] === 'o' && board[8] === 'o') ||
      (board[2] === 'o' && board[4] === 'o' && board[6] === 'o')) {
   alert("O wins!");
 }

  }
};
};


// Winning function has to check if there is a winner before it switches turn in the input.js file

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

//




// prototype the methods it will need
// setup event listeners : what happens when i clicks in index.js
// in the events.js setup game handles


// this creates the new game
function newGame() {
let newGame = new Game();
console.log(newGame);
}



/*
TODO





*/






module.exports = {
Game,
newGame,
};
