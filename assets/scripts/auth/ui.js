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
  ('Uh-Oh. Please Try Again!');
};

const signInFail = () => {
  $('#sign-in-prompt').text
  ('Uh-Oh! Please Try Again!');
};

const changePwSuccess = () => {
  console.log("success");
  $('#change-pw-prompt').text
  ('Password Changed Successfully!');
  $('#changePwModal').modal('hide');
};

const changePwFail = (data) => {
  console.log('fail', data);
  $('#change-pw-prompt').text
  ('Uh-Oh! Please Try Again!');
};

const failure = () => {
  $('#prompt').text
  ('Theres seems to have been an error');
};
// On sign in, un-hide game board elements

const signInSuccess = () => {
  $('#prompt').text('Ready For Battle!');
  $('#signUpButton').addClass('hidden');
  $('#signInButton').addClass('hidden');
  $('#changePwButton').removeClass('hidden');
  $('#sign-out').removeClass('hidden');
  $('#game-log').removeClass('hidden');//corresponds to game history button
  $('#signInModal').modal('hide');
};

// On sign out, hide game board elements

const signOutSuccess = () => {
  $('#prompt').text('Sign Out Successful!');
  $('.create-board-button').addClass('hidden');
  // $('#game-log').addClass('hidden');
  $('#signUpButton').removeClass('hidden');
  $('#signInButton').removeClass('hidden');
  $('#changePwButton').addClass('hidden');
  $('#signOutButton').addClass('hidden');
  $('#right-column').addClass('hidden');
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
