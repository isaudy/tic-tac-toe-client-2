const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
const utility = require('./../utility')

const onNewGame = e => {
    api.ajaxNewGame()
        .then(ui.onNewGameSuccess)
        .catch(ui.onError)
}

const onSpaceClicked = e => {
    $(e.target).off('click')
    const updateGameData = store.updateData.game
    store.player = store.player === 'x' ? 'o' : 'x'
    updateGameData.cell.index = $(e.target).data('cell-index')
    updateGameData.cell.value = store.player
    store.game.cells[updateGameData.cell.index] = store.player
    utility.checkGame(store.player)

    api.ajaxUpdateGame()
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onError)
}

const onGetGames = () => {
    api.ajaxGetGames()
        .then(ui.onGetGamesSuccess)
        .catch(ui.onError)
}

const onDeleteGame = e => {
    api.ajaxDeleteGame($(e.target).data('id'))
        .then(ui.onDeleteGameSuccess)
        .catch(ui.onError)
}

const onResize = () => {
    utility.updateHeight()
}

export {
    onNewGame,
    onSpaceClicked,
    onGetGames,
    onDeleteGame,
    onResize
}