'use strict';

const engine = require('./engine');
// const api = require('../auth/api');
// const store = require('../store');
// const ui = require('./ui');
// const gameEvents = require('./events');




const game = new engine.Game();


$('.box').on('click', function(){
  let move = $(this).attr('id'); // c3
  let boardIndex = game.gameSpaces.indexOf(move); //3
  let currentMove = game.currentPlayer;
  let isValid = game.setMove(boardIndex);
  if (isValid === true) {
    // $(this).text(currentMove);
    if(currentMove === 'X'){
    $(this).prepend('<img src="http://i.imgur.com/PAOIyPMm.jpg" class="game-tile" />');
  } else {
    $(this).prepend('<img src= "http://i.imgur.com/1msa2IOm.jpg" class= "game-tile"/>');
    }
  }
});

$('#new-battle').on('click', function (){
game.resetGameBoard();
$('#message-box').text(' ');
});






module.exports = {
  // addGameHandlers
};
