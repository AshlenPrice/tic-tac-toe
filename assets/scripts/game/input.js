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
  if (isValid === true) {
    $(this).text(currentMove);
  }

});
$('#new-battle').on('click', function (){
console.log("stuff");
game.resetGameBoard();

});

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
