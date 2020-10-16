const config = require('./../config')
const store = require('./../store')

const ajaxNewGame = () => {
    return $.ajax({
        method: "POST",
        url: `${config}/games`,
        headers: { Authorization: `Bearer ${store.user.token}` },
        data: {}
    })
}

const ajaxUpdateGame = () => {
    return $.ajax({
        method: "PATCH",
        url: `${config}/games/${store.game._id}`,
        headers: { Authorization: `Bearer ${store.user.token}` },
        data: store.updateData
    })
}


export {
    ajaxNewGame,
    ajaxUpdateGame
}