'use strict';


// const success = () => {
//   $('#prompt').text('Action Successful');
// };

const createSuccess = () => {
  $('#prompt').text(' ');
};

const onPatchSuccess = () => {
  $('#prompt').text('Battle Updated');
};

const failure = () => {
  $('#prompt').text("Uh-Oh Something's not right!");
};

module.exports = {
  failure,
  // success,
  createSuccess,
  onPatchSuccess,
};
