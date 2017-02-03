'use strict';

const success = () => {
  $('#status-box').text('Action Successful');
};

const signUpSuccess = () => {
  $('#status-box').text('Account Created');
  $('#signUpModal').modal('hide');
};

const signUpFail = () => {
  $('#sign-up-prompt').text('Information provided does not match. Please Try Again!');
};

const signInFail = () => {
  $('#sign-in-prompt').text('Try again! The information does not match!');
};

const changePassSuccess = () => {
  $('#message-box').text('Password Changed Successfully!');
  $('#changePwModal').modal('hide');
};

const changePassFail = () => {
  $('#change-pw-prompt').text('Please fill out the fields.');
};

const failure = () => {
  $('#message-box').text('Theres seems to have been an error');
};

// On sign in, un-hide game board elements
const signInSuccess = () => {
  $('#message-box').text('Sign In Successful');

  $('.create-board-button').removeClass('hidden');
  $('#get-index').removeClass('hidden');
  $('#showGameById').removeClass('hidden');
  $('#signUpButton').addClass('hidden');
  $('#signInButton').addClass('hidden');
  $('#changePassButton').removeClass('hidden');
  $('#sign-out').removeClass('hidden');
  $('#declare-winner').removeClass('hidden');
  $('#already-won').removeClass('hidden');
  $('#total-games-played').removeClass('hidden');
  $('#show-total-games').removeClass('hidden');
  $('#signInModal').modal('hide');
};

// On sign out, hide game board elements
const signOutSuccess = () => {
  $('#message-box').text('Sign Out Successful.  Please Sign Up or Sign In to play again.');

  $('.create-board-button').addClass('hidden');
  $('.container-grid').addClass('hidden');
  $('#get-index').addClass('hidden');
  $('#showGameById').addClass('hidden');
  $('#signUpButton').removeClass('hidden');
  $('#signInButton').removeClass('hidden');
  $('#changePassButton').addClass('hidden');
  $('#sign-out').addClass('hidden');
  $('#declare-winner').addClass('hidden');
  $('#declare-winner').text('');
  $('#already-won').addClass('hidden');
  $('#already-won').text('');
  $('#total-games-played').addClass('hidden');
  $('#show-total-games').addClass('hidden');
};

module.exports = {
  failure,
  success,
  signUpSuccess,
  signUpFail,
  signInFail,
  changePassFail,
  signInSuccess,
  changePassSuccess,
  signOutSuccess,
};
