input.onButtonPressed(Button.A, function () {
    bomba.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        bomba.change(LedSpriteProperty.Y, 1)
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    bomba.move(1)
})
let bomba: game.LedSprite = null
bomba = game.createSprite(2, 0)
basic.forever(function () {
    if (bomba.get(LedSpriteProperty.Y) == 4) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    }
})
