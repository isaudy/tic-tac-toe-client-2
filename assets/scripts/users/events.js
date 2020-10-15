const ui = require('./ui')
const api = require('./api')
const getFormFields = require('./../../../lib/get-form-fields')

const onSignUp = e => {
    e.preventDefault();

    const formData = getFormFields(e.target)

    api.ajaxSignUp(formData)
        .then(() => ui.onSignUpSuccess(formData))
        .catch(ui.onError)
}

const onSignIn = e => {
    e.preventDefault()

    const formData = getFormFields(e.target)

    api.ajaxSignIn(formData)
        .then(ui.onSignInSuccess)
        .catch(ui.onError)
}

const onChangePassword = e => {
    e.preventDefault()

    const formData = getFormFields(e.target);

    api.ajaxChangePassword(formData)
        .then(ui.onChangePasswordSuccess)
        .catch(ui.onError)
}

const onSignOut = e => {
    e.preventDefault()

    api.ajaxSignOut()
        .then(ui.onSignOutSuccess)
        .catch(ui.onError)
}

export {
    onSignUp,
    onSignIn,
    onChangePassword,
    onSignOut
}