let wort = ""
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    wort = "" + wort + "."
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    radio.sendString(wort)
    basic.pause(500)
    wort = ""
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    wort = "" + wort + "-"
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    for (let zeichen of receivedString) {
        if (zeichen == "-") {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
            basic.pause(500)
            basic.clearScreen()
        }
        if (zeichen == ".") {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
            basic.pause(500)
            basic.clearScreen()
        }
    }
})
basic.forever(function () {
    radio.setGroup(17)
})
