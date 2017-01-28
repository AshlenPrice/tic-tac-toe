'use strict';

// Create an array made of the html ids of each box on the grid.  I be used to determine the index of each move.
// let gameSpaces = ["c0", "c1", "c2", "c3", "c42", "c5", "c6", "c7", "c8"];
//

//setting global variables
// let activePlayer = "X";
// let player1 = "X";
// let player2 = "O";
// let newGame = ('#reset');


const Game = function () {
  this.board = ['','','','','','','','',''];
  this.currentPlayer = 'x';
  this.currentGameMoves = 0;
  this.gameActive = true;
  this.wins = [
        [0,1,2],[3,4,5],[6,7,8], // Row
        [0,3,6],[1,4,7],[2,5,8], // col
        [0,4,8],[2,4,6]]; // diag

};

//establish a turn counter-- DO I EVEN NEED A TURN COUNTER?

/*Game states/statuses
  not started
  inProgress
  winner= X O
  gameTied
*/
// create a gameState prototype???


//establishes who moves.
Game.prototype.setMove = function (i) {
//is a condition that means is the game space is empty and it allows the rest of the funtion to run.
  if (this.board[i]){
    this.board[i] = this.currentPlayer; // this function should change the player after a move has been made by the opposite player
}
};


Game.prototype.changePlayer = function (){
  if (this.currentPlayer === 'x'){
      this.currentPlayer = 'o';
  } else {
      this.currentPlayer = 'x';
  }
  return this.currentPlayer
};

//set a check win function that

//make a postiion store to push to a playe?r
/* this function should: check for a winner if a player has 3 matching indexes in a row that
match any of the wins array */

Game.prototype.winner = function (wins,){
  for (let i = 0; this.wins.length; i++){
    for(let j = 0; this.wins[i].length; j++){
      if (this.wins[i][j]==='x'){
        console.log("winner:x");
      } else if (this.wins[i][j]==='o'){
        console.log("winner:o");
      }
    }
  }
};

// Winning function has to check if there is a winner before it switches turn in the input.js file
Game.prototype.winningMove= function winner(wins,) {
  if this.currentPlayer = this.board[];
    for (let i = 0; i < winLines[lastMove].length; i++) {
        let  = winLines[currentmove][i];
        if(player === board[line[0]] && player === board[line[1]]) {
            return true;
        }
    }
    return false;
}
/*
  POSSIBLE WAYS TO MAKE THIS WORK
  - a loop of some sort (forEach,array method findIndex, or find.)
      if currentPlayer has an []in board === the i of the [] inside the wins[]
      then console.log(currentPlayer wins );
  let the winning array
*/


// full board function
// isFull;: function() {
//   for(let i = 0; i < 9; i++) {
//     if (this.board[i] === this.EMPTY) {
//       return false;
//     }
//   }
//   return true;
// },

//this resets the gameboard.
  //needs to be tested in node

// Game.prototype.resetGameBoard = function () {
//   for (let i = 0; this.board.length; i++){
//     this.board[i] = '';
//   }
// }
// once this works consider adding conditional statement that will check if the board is full return a draw,

// function isMatch(cards) {
//   // alert winning message
//   if (cards[0] === cards[1]) {
//     alert("You found a match!");
//   } else {
//     alert("Sorry, try again.");
//
//   }
// }

// alternate changePlayer function
// currentPlayer, place X on board. If there is X on board then player2 turn and place O on board
// let switchTurn = function (index) {
//   if (board[index]===''){
//     board[index] = currentPlayer;
//     wins();
//     if(currentPlayer === "x"){
//       currentPlayer = "o"
//   }else{
//     currentPlayer = "x"
//     }
//   }
// };







//clear the board
//function that resets the board. Can this be turned into a method?

//




// prototype the methods it will need
// setup event listeners : what happens when i clicks in index.js
// in the events.js setup game handles








module.exports = {

Game

};
