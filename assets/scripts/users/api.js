const store = require('./../store')
const apiUrl = require('./../config.js')

const ajaxSignUp = formData => {
    return $.ajax({
        method: "POST",
        url: `${apiUrl}/sign-up`,
        data: formData
    })
}

const ajaxSignIn = formData => {
    return $.ajax({
        method: "POST",
        url: `${apiUrl}/sign-in`,
        data: formData
    })
}

const ajaxChangePassword = formData => {
    return $.ajax({
        method: "PATCH",
        url: `${apiUrl}/change-password`,
        data: formData,
        headers: {
            Authorization: `Token token=${store.user.token}`
        }
    })
}

const ajaxSignOut = () => {
    return $.ajax({
        method: "DELETE",
        url: `${apiUrl}/sign-out`,
        headers: {
            Authorization: `Token token=${store.user.token}`
        }
    })
}

export {
    ajaxSignUp,
    ajaxSignIn,
    ajaxChangePassword,
    ajaxSignOut
}