const utility = require('./../utility')
const store = require('./../store')
const gameEvents = require('./events')

async function onNewGameSuccess (res) {
    utility.changeDisplay(`New game started. Click on square to start. X goes first.`)

    await utility.updateHeight()

    await $('#game-board').show(500, 'swing')

    $('.game-space').on('click', gameEvents.onSpaceClicked)

    store.game = res.game
}

const onUpdateGame = (res, target) => {
    const cells = res.game.cells
    for(let i = 0; i < cells.length; i++) {
        $(`#box${i}`).html(`<h2 class="game-space-display">${cells[i]}</h2>`);
    }
    if(res.game.over) {
        $('.game-space').off('click')
        const player = gameEvents.player === 'x' ? 'o' : 'x'
        utility.changeDisplay(`Player ${player} won!`)
    } else {
        store.game = res.game
        utility.changeDisplay(`Player ${gameEvents.player}'s turn.`)
    }
}

const onError = err => {
    utility.changeDisplay(`Error: ${err.statusText}. Something went wrong.`)
}

export {
    onNewGameSuccess,
    onUpdateGame,
    onError
}