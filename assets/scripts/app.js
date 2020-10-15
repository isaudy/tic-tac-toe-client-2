'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const userEvents = require('./users/events');
const gameEvents = require('./games/events');

$(() => {
  $('#other-auth-buttons').hide()
  $('main').hide()
  $('#sign-up-form').on('submit', userEvents.onSignUp);
  $('#sign-in-form').on('submit', userEvents.onSignIn);
  $('#change-password-form').on('submit', userEvents.onChangePassword)
  $('#sign-out-form').on('submit', userEvents.onSignOut);
})
