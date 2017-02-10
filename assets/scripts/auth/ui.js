'use strict';

const success = () => {
  $('#prompt').text('Action Successful');
};

const signUpSuccess = () => {
  $('#sign-up-prompt').text('Alrigt! Account Created!');
  $('#signUpModal').modal('hide');
};

const signUpFail = () => {
  $('#sign-up-prompt').text
  ('Something is not right. Please Try Again!');
};

const signInFail = () => {
  $('#sign-in-prompt').text
  ('Uh-Oh! Please Try Again!');
};

const changePwSuccess = () => {
  $('#change-pw-prompt').text
  ('Password Changed Successfully!');
  $('#changePwModal').modal('hide');
};

const changePwFail = () => {
  $('#change-pw-prompt').text
  ('Uh-Oh! Please Try Again!');
};

const failure = () => {
  $('#prompt').text
  ('Theres seems to have been an error');
};
// On sign in, un-hide game board elements

const signInSuccess = () => {
  $('#sign-in-prompt').text('Sign In Successful');
  $('#signUpButton').addClass('hidden');
  $('#signInButton').addClass('hidden');
  $('#changePwButton').removeClass('hidden');
  $('#signOutButton').removeClass('hidden');
  $('#game-log').removeClass('hidden');//corresponds to game history button
};

// On sign out, hide game board elements

const signOutSuccess = () => {
  $('#prompt').text('Sign Out Successful.  Please Sign Up or Sign In to battle again.');
  $('.create-board-button').addClass('hidden');
  $('.gameboard').addClass('hidden');
  $('#game-log').addClass('hidden');
  $('#signUpButton').removeClass('hidden');
  $('#signInButton').removeClass('hidden');
  $('#changePwButton').addClass('hidden');
  $('#signOutButton').addClass('hidden');

};

module.exports = {
  failure,
  success,
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  changePwFail,
  changePwSuccess,
  signOutSuccess,
};
