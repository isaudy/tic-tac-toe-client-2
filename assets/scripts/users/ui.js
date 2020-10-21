const api = require('./api')
const store = require('../store')
const utility = require('../utility')

const onSignUpSuccess = formData => {
    utility.closeModalAndClearForms()
    api.ajaxSignIn(formData)
        .then(onSignInSuccess)
        .catch(onError)
}

const onSignInSuccess = res => {
    store.user = res.user
    utility.closeModalAndClearForms()
    utility.changeDisplay(`${store.user.email} signed in. Please start game.`)
    $('#auth-buttons').hide()
    $('#other-auth-buttons').show()
    $('#game-buttons').show()
}

const onChangePasswordSuccess = () => {
    utility.changeDisplay(`Password for ${store.user.email} changed.`)
    utility.closeModalAndClearForms()
}

const onSignOutSuccess = () => {
    utility.changeDisplay(`${store.user.email} signed out. Sign in or sign up to play.`)
    utility.closeModalAndClearForms()
    $('#game-board').hide(500, 'swing')
    $('#auth-buttons').show()
    $('#other-auth-buttons').hide()
    $('#game-buttons').hide()
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