'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const userEvents = require('./users/events');
const gameEvents = require('./games/events');

$(() => {
  $('#other-auth-buttons').hide()
  $('#game-board').hide();
  $('#new-game').hide()
  $('.game-space').hide()

  // Auth event handlers
  $('#sign-up-form').on('submit', userEvents.onSignUp);
  $('#sign-in-form').on('submit', userEvents.onSignIn);
  $('#change-password-form').on('submit', userEvents.onChangePassword)
  $('#sign-out-form').on('submit', userEvents.onSignOut);

  // Game event handlers
  $('#new-game').on('click', gameEvents.onNewGame)
  $('#get-games').on('click', gameEvents.onGetGames)

  // Game board css
  
  // $('.game-space').css('height', width)
  $(window).on('resize', gameEvents.onResize)
})
