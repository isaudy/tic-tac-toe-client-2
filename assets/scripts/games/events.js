const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
const utility = require('./../utility')

let player = 'x'

const onNewGame = e => {
    api.ajaxNewGame()
        .then(ui.onNewGameSuccess)
        .catch(ui.onError)
}

const onSpaceClicked = e => {
    $(e.target).off('click')
    store.updateData.game.cell.index = $(e.target).data('cellIndex')
    store.updateData.game.cell.value = player
    store.updateData.game.over = utility.checkGame(player)

    
    player = player === 'x' ? 'o' : 'x'
    
    api.ajaxUpdateGame()
    .then(res => ui.onUpdateGame(res, e.target))
    .catch(ui.onError)
}

const onResize = e => {
    utility.updateHeight()
}

export {
    onNewGame,
    onSpaceClicked,
    onResize,
    player
}