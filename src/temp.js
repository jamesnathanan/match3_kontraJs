const { init, GameLoop, Sprite, initPointer, track } = kontra

const { canvas, context } = init()

console.log(canvas)
console.log(context)

initPointer()

let sprite = null

const blockImage = new Image()
blockImage.src = 'assets/images/bean_blue.png'
blockImage.onload = () => {
    sprite = Sprite({
        x: 200,
        y: 200,
        // dx: 2,
        image: blockImage,
        onDown: () => {
            console.log('onDown')
        },
        onUP: () => {
            console.log('onUp')
        },
        onOver: () => {
            console.log('onOver')
        }
    })
    console.log(sprite)
    track(sprite)
}



const loop = GameLoop( {
    update: () => {
        //console.log("update")
        if (sprite) {
            sprite.update()
    
            // if (sprite.x > canvas.width) {
            //     sprite.x = -sprite.width
            // }

        }
    },
    render: () => {
        if (sprite) {
            sprite.render()

        }
        //console.log("render")
    }
})

loop.start()