'use strict';
console.log('file running');

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const gameUi = require('./game/game-ui');
const input = require('./game/input');
const gameCliks= require('./game/game-clicks');
const authEvents = require('./auth/events.js');



$(() => {
  setAPIOrigin(location, config);
});


$(() => {
  authEvents.addHandlers();
});
