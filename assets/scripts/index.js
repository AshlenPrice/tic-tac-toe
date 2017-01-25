'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');

$(() => {
  setAPIOrigin(location, config);
});

// when form is submitted then console log the input
const authEvents = require('./auth/events.js');

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');
$(() => {
  authEvents.addHandlers();
});
