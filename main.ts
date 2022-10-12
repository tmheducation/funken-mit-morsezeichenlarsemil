input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.setLedColor(0x0000ff)
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
    basic.setLedColor(0xff0000)
    music.playMelody("C G E E C5 A E C5 ", 1111)
    music.playMelody("C G E E C5 A E C5 ", 1111)
    music.playMelody("C G E E C5 A E C5 ", 1111)
    music.playMelody("C G E E C5 A E C5 ", 1111)
    music.playMelody("C G E E C5 A E C5 ", 1111)
    radio.sendString(wort)
    basic.pause(500)
    wort = ""
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.setLedColor(0xffff00)
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
    basic.setLedColor(0x00ff00)
    music.playMelody("C G E E C5 A E C5 ", 1111)
    music.playMelody("C G E E C5 A E C5 ", 1111)
    music.playMelody("C G E E C5 A E C5 ", 1111)
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
let wort = ""
for (let index = 0; index < 556754575566475460; index++) {
    if (input.pinIsPressed(TouchPin.P1)) {
        radio.setGroup(100 - 1)
    }
    if (input.pinIsPressed(TouchPin.P2)) {
        radio.setGroup(100 + 1)
    }
}
