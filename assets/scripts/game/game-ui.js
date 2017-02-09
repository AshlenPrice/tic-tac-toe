'use strict';
console.log('file running');
// in this file enter all messages that display to the user
const onSuccess = function (data) {
  if (data.game) {
    console.log(data.game);
  } else {
    console.log(data.games);
  }
};

const onIndexSuccess = function (data) {
  if (data.games) {
    console.log(data.games);
    for (let i = 0; i < data.games.length; i++) {
      $('#search-result').text('You played this game ' + data.games.length + ' times! ');
      // $('#search-result').append(' You won this game ' + data.games[i].over[true].length + ' times!');
      $('#search-result').append("Most recent game: " + data.games[i].id + ": " + data.games[i].cells);
    }
  }
};

const onGetSuccess = function (data) {
  if (data.game) {
    console.log(data.game);
    $('#search-result').text(data.game.cells);
  }
};

const onError = function (response) {
  console.error(response);
};

const onPostSuccess = function (data) {
  console.log(data);
};

const onPatchSuccess = function (data) {
  console.log(data.game);
};

module.exports = {
  onSuccess,
  onError,
  onPostSuccess,
  onPatchSuccess,
  onGetSuccess,
  onIndexSuccess,
};
