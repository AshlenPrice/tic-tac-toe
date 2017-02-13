'use strict';


const success = () => {
  console.log('success fire');
  $('#prompt').text('Action Successful');
};

const createSuccess = () => {
  console.log('create success fire');
  $('#prompt').text('Battle Intiated');
};

const onPatchSuccess = () => {
  $('#prompt').text('Battle Updated');
};

const failure = () => {
  $('#prompt').text("Uh-Oh Something's not right!");
};

module.exports = {
  failure,
  success,
  createSuccess,
  onPatchSuccess,
};
