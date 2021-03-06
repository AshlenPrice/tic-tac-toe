'use strict';
const getFormFields = require('../../../lib/get-form-fields');
const engine = require('./engine');
const gameApi = require('./api');
const gameUi = require('./ui');
const store = require('../store');


//when clicking new game, this runs resetGameBoard function
const onCreate = function (event) {
  if (!store.user){
    return;
  }
  gameApi.create()
    .then((response) => {
      store.game = response.game;
      return store.game;
    })
    .then(gameUi.createSuccess)
    .catch(gameUi.failure);
    //  engine.Game.resetGameBoard();
};


const onIndex = function (event) {
  event.preventDefault();
  gameApi.getIndex()
    .then(gameUi.success)
    .catch(gameUi.failure);
};


//
// const onShow = function (event) {
//   event.preventDefault();
//   let id = parseInt($('#game-id').val());
//   gameApi.show(id)
//     .then(gameUi.success)
//     .catch(gameUi.failure);
// };

const totalGamesPlayed = function (event) {
  event.preventDefault();
  gameApi.getIndex()
    .then((response) => {
      store.games = response.games;
      $('#prompt').text('You have had ' + store.games.length + ' battles.');
      return store.games.length;
    })
    .then(gameUi.success)
    .catch(gameUi.failure);
};

const addAjaxHandlers = () => {
  $('#get-index').on('submit', onIndex);
  $('#new-battle').on('click', onCreate);
  // $('#log').on('submit', onShow);
  $('#game-log').on('click', totalGamesPlayed);
};

module.exports = {
  addAjaxHandlers,
  onIndex,
  onCreate,
  // onShow,
};
