import Board from './Board.mjs'
import { NEW_GAME_BOARD_CONFIG } from './const/board.mjs'

export class Game {
    constructor (config = NEW_GAME_BOARD_CONFIG) {
        if (typeof config === 'object') {
            this.board = new Board().createFromJson(config).recalculate()
        } else if (typeof config === 'string') {
            this.board = new Board().createFromFEN(config).recalculate()
        } else {
            throw new Error(`Unknown configuration type ${typeof config}.`)
        }
    }

    move (from, to) {
        from = from.toUpperCase()
        to = to.toUpperCase()
        if (!this.board.playingPlayer.moves[from] || !this.board.playingPlayer.moves[from].includes(to)) {
            throw new Error(`Invalid move from ${from} to ${to} for ${this.board.playingPlayer.color}`)
        }
        this.board.move(from, to)
    }

    moves (from = null) {
        return (from ? this.board.playingPlayer.moves[from.toUpperCase()] : this.board.playingPlayer.moves) || []
    }

    aiMove (level = 2) {
        const move = this.board.calculateAiMove(level)
        return this.move(move.from, move.to)
    }

    printToConsole () {
        this.board.print()
    }

    exportJson () {
        return this.board.exportJson()
    }

    exportFEN () {
        return this.board.exportFEN()
    }
}

export function moves (config) {
    const game = new Game(config)
    return game.moves()
}

export function status (config) {
    const game = new Game(config)
    return game.exportJson()
}

export function getFen (config) {
    const game = new Game(config)
    return game.exportFEN()
}

export function move (config, from, to) {
    const game = new Game(config)
    game.move(from, to)
    if (typeof config === 'object') {
        return game.exportJson()
    } else {
        return game.exportFEN()
    }
}

export function aiMove (config, level = 2) {
    const game = new Game(config)
    const move = game.board.calculateAiMove(level)
    return { [move.from]: move.to }
}
