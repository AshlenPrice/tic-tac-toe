'use strict';
console.log('file running');
const config = require('../config.js');
const store = require('../store.js');
const engine = require('./engine');

const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
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

const update = function (id, gameIndex, player, gameOver) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data: {
      game: {
        cell: {
          index: gameIndex,
          value: player,
        },
        over: gameOver,
      },
    },
  });
};

module.exports = {
  index,
  show,
  create,
  update,
  game,
};
