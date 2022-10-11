input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.setLedColor(0x00ff00)
    basic.pause(1000)
    basic.turnRgbLedOff()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
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
        basic.pause(1000)
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
        basic.pause(1000)
        basic.clearScreen()
    }
    if (receivedString == "_") {
        basic.setLedColor(0x00ff00)
        basic.pause(1000)
        basic.turnRgbLedOff()
    }
})
basic.forever(function () {
    radio.setGroup(17)
})
