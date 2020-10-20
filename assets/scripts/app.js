'use strict'

const gameEvents = require('./games/events');
const modals = require('./modals')

$(() => {
  $('#other-auth-buttons').hide()
  $('#game-board').hide();
  $('#new-game').hide()
  $('.game-space').hide()

  // Buttons for modals
  $('#sign-up-button').on('click', modals.signUpModal)
  $('#sign-in-button').on('click', modals.signInModal)  
  $('#change-password-button').on('click', modals.changePasswordModal)  
  $('#sign-out-button').on('click', modals.signOutModal)  
  $('#get-games').on('click', modals.gamesModal)

  // Game event handlers
  $('#new-game').on('click', gameEvents.onNewGame)

  // Game board css
  
  // $('.game-space').css('height', width)
  $(window).on('resize', gameEvents.onResize)
})
