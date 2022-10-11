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
    basic.showString(receivedString)
})
basic.forever(function () {
    radio.setGroup(17)
})
