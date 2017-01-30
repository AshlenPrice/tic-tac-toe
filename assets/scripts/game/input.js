'use strict';
console.log('file running');

const engine = require('./engine');
const api = require('../auth/api');
const ui = require('./game-ui');
const store = require('../store');

const game = new engine.Game();


//when clicking new game, this runs resetGameBoard function
//   newGame.on('click', function(){
//     resetGameBoard();
//   });


$('.box').on('click', function(){
  let move = $(this).attr('id'); // c3
  let boardIndex = game.gameSpaces.indexOf(move); //3
  let currentMove = game.currentPlayer;
  let isValid = game.setMove(boardIndex);
  if (isValid === true && !game.gameOver) {
    $(this).text(currentMove);
  }

});
$('#new-battle').on('click', function (){
console.log("stuff");
game.resetGameBoard()

});


// const validMove = function (cell) {
//   if (cell.html() === '') {
//     return true;
//   }
//
//   return false;
// };
//
// const boardReady = function () {
//   if (!store.user) {
//     ui.promptSignIn();
//     return false;
//   } else if (game.gameOver) {
//     return false;
//   }
//
//   return true;
// };
//
// // create and update game server funtion
// const updateGameServer = function (indx, currentGame) {
//   api.updateGame(indx, currentGame)
//     .then((response) => {
//       console.log(response.game);
//     });
// };
//
// const handleWinner = function (gameWinner, indx) {
//
//   updateGameServer(indx, game);
//
//   if (gameWinner) {
//     switch (gameWinner) {
//       case 'x':
//         ui.gameWon(gameWinner);
//         break;
//       case 'o':
//         ui.gameWon(gameWinner);
//         break;
//       case 'tie':
//         ui.gameTied();
//         break;
//       default:
//     }
//   } else {
//     game.switchPlayer();
//   }
//
// };
//
// const makeMove = function (event) {
//   event.preventDefault();
//
//   const $cell = $('#' + this.id);
//   const indx = parseInt($cell.attr('id').slice(1));
//   const ready = boardReady();
//   const valid = validMove($cell);
//
//   if (ready && valid) {
//     game.setMove(indx);
//     ui.drawMove($cell, game.currentPlayer);
//   } else if (!valid) {
//     ui.invalidMove();
//     console.log($cell.html());
//     return;
//   } else {
//     return;
//   }
//
//   game.checkWinner(indx, handleWinner);
//
//   return game;
// };
//
// const newGame = function (event) {
//   event.preventDefault();
//   game.reset();
//   ui.newGameUi();
//   api.createGame()
//     .then((response) => {
//       store.game = response.game;
//       console.log('create game:', store.game);
//     });
// };
//
// const getGames = function () {
//   api.gamesIndex()
//     .then((response) => {
//       ui.displayGames(response.games);
//     });
// };
// /*
// TODO
// - create new game
// */
// // in the inputs.js setup game handles
// // setup event listeners : what happens when i clicks in index.js
//
// //
// // $('#previous-games').on('click', onShowGames);
//
//
//
module.exports = {
  // newGame,
};
