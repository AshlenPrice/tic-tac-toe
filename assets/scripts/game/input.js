'use strict';


const engine = require('./engine');
const api = require('../auth/api');
const ui = require('./game-ui');
const store = require('../store');


//when clicking new game, this runs resetGameBoard function
//   newGame.on('click', function(){
//     resetGameBoard();
//   });

/*
TODO
- create new game
*/
// in the inputs.js setup game handles
// setup event listeners : what happens when i clicks in index.js

const game = new engine.Game();




module.exports = {
  newGame,
};
