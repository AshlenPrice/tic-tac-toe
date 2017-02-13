'use strict';
console.log('gm_api file running');
const config = require('../config.js');
const store = require('../store.js');
const engine = require('./engine');

// These web requests get all the games, create a game on the server,
// get a specific game by its id, and update the server with every move made and if the game is over
const getIndex = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const create = function () {

  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const show = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const update = function (index, value) {
console.log('updated server', index);
console.log('updated server', value);
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data: {
        "game": {
          "cell": {
            "index": index,
            "value": value,
          },
        },
      },
  });
};

const updateGameStatus = function (over) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data: {
        "game": {
          "over": over,
        },
      },
  });
};

module.exports = {
  // getIndex,
  create,
  show,
  update,
  updateGameStatus,
};
