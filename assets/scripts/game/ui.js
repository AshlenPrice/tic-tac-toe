'use strict';


const success = () => {
  $('#promt').text('Action Successful');
};

const createSuccess = () => {
  $('#promt').text('Battle Intiated');
};

const onPatchSuccess = () => {
  $('#promt').text('Battle Updated');
};

const failure = () => {
  $('#promt').text("Uh-Oh Something's not right!");
};

module.exports = {
  failure,
  success,
  createSuccess,
  onPatchSuccess,
};
