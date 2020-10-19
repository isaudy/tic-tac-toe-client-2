const api = require('./api')
const store = require('./../store')
const utility = require('./../utility')

const closeModalAndClearForms = () => {
    $('form').trigger('reset')
    $('.modal-close').trigger('click')
}

const onSignUpSuccess = formData => {
    api.ajaxSignIn(formData)
        .then(onSignInSuccess)
        .catch(onError)
}

const onSignInSuccess = res => {
    store.user = res.user
    closeModalAndClearForms()
    utility.changeDisplay(`${store.user.email} signed in. Please start game.`)
    $('#auth-buttons').hide()
    $('#other-auth-buttons').show()
    $('#new-game').show()
}

const onChangePasswordSuccess = () => {
    utility.changeDisplay(`Password for ${store.user.email} changed.`)
    closeModalAndClearForms()
}

const onSignOutSuccess = () => {
    utility.changeDisplay(`${store.user.email} signed out. Sign in or sign up to play.`)
    closeModalAndClearForms()
    $('#game-board').hide(500, 'swing')
    $('#auth-buttons').show()
    $('#other-auth-buttons').hide()
    $('#new-game').hide()
}

const onError = err => {
    utility.changeDisplay(`Error: ${err.statusText}. Please try again.`)
}

export {
    onSignUpSuccess,
    onSignInSuccess,
    onChangePasswordSuccess,
    onSignOutSuccess,
    onError
}