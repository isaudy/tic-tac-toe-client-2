const changeDisplay = msg => {
    $('h3', '#display').text(msg)
}

const checkGame = playerValue => {
    return false;
}

const updateHeight = () => {
    $('.game-space').show(() => {
        $('.game-space').css('height', $('.game-space').innerWidth())
    });
}

export {
    changeDisplay,
    checkGame,
    updateHeight
}