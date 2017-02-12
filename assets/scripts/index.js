'use strict';
console.log('file running');

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');

const gameAPI = require('./game/api');
const gameEvents = require('./game/events');
const gameEngine = require('./game/engine')
// auth events
const gameCliks= require('./game/game-clicks');
const authEvents = require('./auth/events.js');



$(() => {
  setAPIOrigin(location, config);
});

// On document ready
$(() => {
  authEvents.addHandlers();
  gameEvents.addAjaxHandlers();
  $('#new-battle').on('click', gameEngine.Game.resetGameBoard );

});
