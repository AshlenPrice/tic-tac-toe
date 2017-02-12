'use strict';
console.log('file running');
const getFormFields = require('../../../lib/get-form-fields');
const engine = require('./engine');
const gameApi = require('./api');
const gameUi = require('./ui');
const store = require('../store');


//when clicking new game, this runs resetGameBoard function
const onCreate = function (event) {
  console.log('creating game');
  event.preventDefault();
  gameApi.create()
    .then((response) => {
      return store.game;
      store.game = response.game;
    })
    .then(gameUi.createSuccess)
    .catch(gameUi.failure);
     engine.Game.resetGameBoard();
};


const onIndex = function (event) {
  event.preventDefault();
  gameApi.getIndex()
    .then(gameUi.success)
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
      store.games = response.games;
      $('#battle-log').text('You have played ' + store.games.length + ' games.');
      return store.games.length;
    })
    .then(gameUi.success)
    .catch(gameUi.failure);
};

const addAjaxHandlers = () => {
  $('#get-index').on('submit', onIndex);
  $('#new-battle').on('click', onCreate);
  $('#log').on('submit', onShow);
  $('#total-games-played').on('click', totalGamesPlayed);
};

module.exports = {
  addAjaxHandlers,
  onIndex,
  onCreate,
  onShow,
};
