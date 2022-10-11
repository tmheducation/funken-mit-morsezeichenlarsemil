input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    radio.sendString(".")
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
    radio.sendString("_")
    basic.setLedColor(0x00ff00)
    basic.pause(500)
    basic.turnRgbLedOff()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    radio.sendString("-")
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
    if (receivedString == "-") {
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
    if (receivedString == ".") {
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
    if (receivedString == "_") {
        basic.setLedColor(0x00ff00)
        basic.pause(500)
        basic.turnRgbLedOff()
    }
})
basic.forever(function () {
    radio.setGroup(17)
})
