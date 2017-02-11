'use strict';
console.log('file running');
const getFormFields = require('../../../lib/get-form-fields');
// const engine = require('./engine');
const gameApi = require('./game-api');
const gameUi = require('./game-ui');
const store = require('../store');


//when clicking new game, this runs resetGameBoard function
const onIndex = function (event) {
  event.preventDefault();
  gameApi.getIndex()
    .then(gameUi.success)
    .catch(gameUi.failure);
};

const onCreate = function (event) {
  event.preventDefault();
  gameApi.create()
    .then((response) => {
      gameStore.game = response.game;
      return gameStore.game;
    })
    .then(gameUi.createSuccess)
    .catch(gameUi.failure);
};

const onShow = function (event) {
  event.preventDefault();
  let id = parseInt($('#game-id').val());
  gameApi.show(id)
    .then(gameUi.success)
    .catch(gameUi.failure);
};

const totalGamesPlayed = function (event) {
  event.preventDefault();
  gameApi.getIndex()
    .then((response) => {
      gameStore.games = response.games;
      $('#show-total-games').text('You have played ' + gameStore.games.length + ' games.');
      return gameStore.games.length;
    })
    .then(gameUi.success)
    .catch(gameUi.failure);
};

const addAjaxHandlers = () => {
  $('#get-index').on('submit', onIndex);
  $('.create-board-button').on('click', onCreate);
  $('#showGameById').on('submit', onShow);
  $('#total-games-played').on('click', totalGamesPlayed);
};

module.exports = {
  addAjaxHandlers,
  onIndex,
  onShow,
};
