function calc () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # # # # #
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    love = randint(0, 100)
    basic.showString("" + (`Love.${love}%`))
}
input.onButtonPressed(Button.A, function () {
    pressed.a = true;
})
input.onButtonPressed(Button.B, function () {
    pressed.b = true;
})
input.onGesture(Gesture.Shake, function () {
	pressed.a = true;
    pressed.b = true;
})
function start () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
}
function reset () {
    pressed = {
        a: false,
        b: false
    }
}
let love = 0
let pressed = {
    a: false,
    b: false
}
start()
basic.forever(function () {
    if (pressed.a == true && pressed.b == true) {
        calc()
        reset()
        start()
    }
})
