'use strict'

const store = {
  player: null,
  user: {},
  game: {},
  updateData: {
      game: {
          cell: {
            index: null,
            value: null
          },
          over: false
        }
  }
}

module.exports = store
