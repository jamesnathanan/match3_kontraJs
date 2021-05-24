import Grid from './Grid.js'
import Board from './Board.js'

const { init, GameLoop, Sprite, initPointer, track } = kontra

export default class Game {
    constructor(width, height) {
        this.width = width
        this.height = height

        this.numberOfRows = 8
        this.numberOfCols = 8
        this.blockSize = 35


        this.init()

    }

    init() {
        // initialize kontra
        console.log('initializing our game')
        const { canvas, context } = init()
        // reference to canvas and context
        this.canvas = canvas
        this.context = context
        initPointer() // initialize pointer

        // create our game loop
        this.gameLoop = GameLoop({
            update: this.update.bind(this), // bind scope for this class
            render: this.render.bind(this),
        })

        // create our grid
        this.createGrid()

        //creat board
        this.createBoard()


        // load our assets
        this.load()
    }

    render() {
        // render sprite with kontra
        this.grid.render()
    }

    update() {
        // update our sprite with kontra

    }

    load() {
        // load our game assets
        console.log("loading assets for our game")

        // start our game
        this.start()
    }

    start() {
        // start our game loop
        console.log('starting our game')
        this.gameLoop.start()  
    }

    createGrid() {
        this.grid = new Grid({
            numberOfRows: this.numberOfRows,
            numberOfCols: this.numberOfCols,
            cellSize: this.blockSize,
            x: 25,
            y: 180,
            color: 'lavender',

        })
    }

    createBoard() {
        this.board = new Board(
            this.numberOfRows,
            this.numberOfCols,
            6,
            true
        )
        window.board = this.board
    }
}