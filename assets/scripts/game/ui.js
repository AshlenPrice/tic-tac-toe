'use strict';


const success = () => {
  $('#promt').text('Action Successful');
};

const createSuccess = () => {
  $('#promt').text('New Game Successfully Created');
};

const onPatchSuccess = () => {
  $('#promt').text('Game Updated');
};

const failure = () => {
  $('#promt').text('There seems to have been an error');
};

module.exports = {
  failure,
  success,
  createSuccess,
  onPatchSuccess,
};
