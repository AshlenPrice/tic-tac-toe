'use strict';

const success = () => {
  $('#status-box').text('Action Successful');
};

const signUpSuccess = () => {
  $('#sign-up-prompt').text('Account Created');
  $('#signUpModal').modal('hide');
};

const signUpFail = () => {
  $('#sign-up-prompt').text
  ('Something is not right. Please Try Again!');
};

const signInFail = () => {
  $('#sign-in-prompt').text
  ('Try again! The information does not match!');
};

const changePwSuccess = () => {
  $('#message-box').text
  ('Password Changed Successfully!');
  $('#changePwModal').modal('hide');
};

const changePwFail = () => {
  $('#change-pw-prompt').text
  ('Please fill out the fields.');
};

const failure = () => {
  $('#message-box').text
  ('Theres seems to have been an error');
};


module.exports = {
  failure,
  success,
  signUpSuccess,
  signUpFail,
  signInFail,
  changePwFail,
  changePwSuccess,
};
