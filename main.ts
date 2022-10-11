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
    music.playMelody("C G E E C5 A E C5 ", 1111)
    music.playMelody("C G E E C5 A E C5 ", 1111)
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
            basic.pause(500)
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
            basic.pause(500)
        }
    }
})
basic.forever(function () {
    radio.setGroup(17)
})
