let Y = 0
input.onButtonPressed(Button.B, function () {
    Y = randint(1, 3)
    if (Y == 1) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    } else {
        if (Y == 2) {
            basic.showLeds(`
                . . . . .
                . # # # .
                # # # # #
                # # # # #
                . # # # .
                `)
        } else {
            basic.showLeds(`
                . # # # .
                . # # # .
                . # # # .
                . # # # .
                . # # # .
                `)
        }
    }
})
