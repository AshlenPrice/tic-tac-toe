'use strict';
console.log('file running');
const getFormFields = require('../../../lib/get-form-fields');
// const engine = require('./engine');
const gameApi = require('./game-api');
const gameUi = require('./game-ui');
const store = require('../store');


//when clicking new game, this runs resetGameBoard function
  const onNewGame= function(event){
   event.preventDefault();
  let data = getFormFields(event.target);
  api.create(data)
    .then((response) => {
      store.game = response.game;
      return store.game;

    })
    .then(ui.onPostSuccess)
    .catch(ui.onError);
};

const onGetGames = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);

  if (data.game.id.length === 0) {
    api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onError);
  } else {
    api.show(data.game.id)
    .then(ui.onGetSuccess)
    .catch(ui.onError);
  }
};

const addHandlers = () => {
  $('#search-submit').on('submit', onGetGames);
};

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
  onNewGame,
  onGetGames,
  addHandlers,
};
