'use strict';
console.log('file running');

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');
const store = require('../store');
const gameEvents = require('../game/events');

// these functions will run the server requests in the api.js file

const onSignUp = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
    ;
    $('#sign-up')[0].reset();

};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
    .then((response)=> {
      store.user = response.user;
      // console.log('store.user', store.user);
      return store.user;
    })
    // .then(()=>{
    //   console.log('sigIn onCreate');
    //   gameEvents.onCreate();
    // })
    .then(ui.signInSuccess)
    .catch(ui.signInFail);
    $('#sign-in')[0].reset();


};

const onChangePassword = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.changePassword(data)
    .then(ui.changePwSuccess)
    .catch(ui.changePwFail);
    $('#change-password')[0].reset();
};

const onSignOut = function (event) {
  event.preventDefault();

  api.signOut()
    .then(() => {
      delete store.user;
      return store;
    })
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail);
};

const addHandlers = () => {
 $('#sign-up').on('submit', onSignUp);
 $('#sign-in').on('submit', onSignIn);
 $('#sign-out').on('click', onSignOut);
 $('#change-password').on('submit', onChangePassword);
};




module.exports = {
 addHandlers,
};
