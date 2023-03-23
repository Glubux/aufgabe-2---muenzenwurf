input.onGesture(Gesture.Shake, function () {
    random = randint(0, 1)
    count += 1
    if (random == 0) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
        music.playTone(523, music.beat(BeatFraction.Eighth))
        music.playTone(659, music.beat(BeatFraction.Eighth))
        music.playTone(784, music.beat(BeatFraction.Half))
    } else {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        music.playTone(622, music.beat(BeatFraction.Eighth))
        music.playTone(784, music.beat(BeatFraction.Eighth))
        music.playTone(932, music.beat(BeatFraction.Half))
    }
})
let random = 0
let count = 0
basic.forever(function () {
    if (input.lightLevel() < 50) {
        basic.showString("" + (count))
    }
})
