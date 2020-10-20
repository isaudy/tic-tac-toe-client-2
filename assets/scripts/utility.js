const store = require('./store')

const changeDisplay = msg => {
    $('h3', '#display').text(msg)
}

const checkGame = player => {
    console.log(store.game.cells)
    const cells = store.game.cells;
    if (
        (cells[0] === player && cells[1] === player && cells[2] === player) ||
        (cells[3] === player && cells[4] === player && cells[5] === player) ||
        (cells[6] === player && cells[7] === player && cells[8] === player) ||
        (cells[0] === player && cells[3] === player && cells[6] === player) ||
        (cells[1] === player && cells[4] === player && cells[7] === player) ||
        (cells[2] === player && cells[5] === player && cells[8] === player) ||
        (cells[0] === player && cells[4] === player && cells[8] === player) ||
        (cells[2] === player && cells[4] === player && cells[6] === player)
    ) {
        changeDisplay(`Player ${store.player} won!`)
        store.updateData.game.over = true
    } else if (cells.every(cell => cell)) {
        changeDisplay("It's a tie. Please start new game.")
        store.updateData.game.over = true;
    } else return
}

const updateHeight = () => {
    $('.game-space').show(() => {
        $('.game-space').css('height', $('.game-space').innerWidth())
    });
}
const closeModalAndClearForms = () => {
    $('form').trigger('reset')
    $('.modal-close').trigger('click')
}

const populateModalBody = content => {
    $('#modal-body').html(content)
}

export {
    changeDisplay,
    checkGame,
    updateHeight,
    closeModalAndClearForms,
    populateModalBody
}