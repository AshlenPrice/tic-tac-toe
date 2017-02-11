'use strict';
console.log('game-clicks running');

const engine = require('./engine');
const api = require('../auth/api');
const store = require('../store');
const ui = require('./game-ui');
const input = require('./input');
// auth events



const game = new engine.Game();

// const addGameHandlers = () => {

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
$('#message-box').text(' ');
});








module.exports = {
  // addGameHandlers
};
