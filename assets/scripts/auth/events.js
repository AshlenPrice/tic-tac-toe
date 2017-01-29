'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');
const store = require('../store');
// const engine = require('./engine');


const onSignUp = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.signUp(data)
    .then(ui.success)
    .catch(ui.fail)
    ;
};

const onSignIn = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.signIn(data)
    .then((response)=> {
      store.user = response.user;
      return store.user;
    })
    .then(ui.success)
    .catch(ui.fail)
    ;
};

const onChangePassword = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.changePassword(data)
    .then(ui.success)
    .catch(ui.failure)
    ;
};

const onSignOut = function (event) {
  event.preventDefault();

  api.signOut()
    .then(() => {
      delete store.user;
      return store;
    })
    .then(ui.success)
    .catch(ui.fail)
    ;
};



const onShowGames = function (event) {
 event.preventDefault();
 api.showGames()
.done(ui.success)
.fail(ui.fail);
};

// const onCreateGames = function (event) {
//  event.preventDefault();
//  api.createGames()
//    .done((response) => {
//      store.game = response.game;
//      return store.game;
//    })
// .done(ui.success)
// .fail(ui.fail);
// };

$('col-xs-4 box').on('click', (event) => {
 let currentCell = event.currentTarget.id;
 let moveSuccess = engine.changePlayer(currentCell);
  $(event.currentTarget).text(moveSuccess);
});

$('#play-again-button').on('click', () => {
 engine.resetGameBoard();
});

const addHandlers = () => {
 $('#sign-up').on('submit', onSignUp);
 $('#sign-in').on('submit', onSignIn);
 $('#sign-out').on('submit', onSignOut);
 $('#change-password').on('submit', onChangePassword);
 $('#previous-games').on('click', onShowGames);
 $('#play-again-button').on('click', onCreateGames);
};

module.exports = {
 addHandlers,
 onCreateGames,
};
