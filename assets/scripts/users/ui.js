const api = require('./api')
const store = require('./../store')

const closeModalAndClearForms = () => {
    $('form').trigger('reset')
    $('.modal-close').trigger('click')
}

const changeDisplay = msg => {
    $('h3', '#display').text(msg)
}

const onSignUpSuccess = formData => {
    api.ajaxSignIn(formData)
        .then(onSignInSuccess)
        .catch(onError)
}

const onSignInSuccess = res => {
    store.user = res.user
    closeModalAndClearForms()
    changeDisplay(`${store.user.email} signed in.`)
    $('#gameboard').show()
    $('#auth-buttons').hide()
    $('#other-auth-buttons').show()
}

const onChangePasswordSuccess = () => {
    changeDisplay(`Password for ${store.user.email} changed.`)
    closeModalAndClearForms()
}

const onSignOutSuccess = () => {
    changeDisplay(`${store.user.email} signed out. Sign in or sign up to play.`)
    closeModalAndClearForms()
    $('#gameboard').hide()
    $('#auth-buttons').hide()
    $('#other-auth-buttons').show()
    store.user = null
}

const onError = err => {
    changeDisplay(`Error: ${err.statusText}. Please try again.`)
}

export {
    onSignUpSuccess,
    onSignInSuccess,
    onChangePasswordSuccess,
    onSignOutSuccess,
    onError
}