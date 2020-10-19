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

const ajaxGetGames = () => {
    return $.ajax({
        method: "GET",
        url: `${config}/games`,
        headers: { Authorization: `Bearer ${store.user.token}` }
    })
}

const ajaxDeleteGame = id => {
    return $.ajax({
        method: "DELETE",
        url: `${config}/games/${id}`,
        headers: { Authorization: `Bearer ${store.user.token}` }
    })
}

export {
    ajaxNewGame,
    ajaxUpdateGame,
    ajaxGetGames,
    ajaxDeleteGame
}