'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
// const authEvents = require('./auth/events');
// const gameEvents = require('./game/events');

$(() => {
  setAPIOrigin(location, config);
  $('.auth-form').on('submit', authEvents.onFormSubmit);
  $('#sign-out').on('click', authEvents.handleSignOut);
  $('#get-games').on('click', gameEvents.getGames);
  $('#new-game').on('click', gameEvents.newGame);
  $('.gameboard').on('click', '.cell', gameEvents.makeMove);
});

$(() => {
  setAPIOrigin(location, config);
  //
  // // when form is submitted then console log the input
  // $("form").on("submit", function(event){
  //   event.preventDefault();
  //   let input = $("#name").val();
  //   console.log(input);
  // });


});

// when form is submitted then console log the input
// const authEvents = require('./auth/events.js');

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');
// $(() => {
//   authEvents.addHandlers();
// });
