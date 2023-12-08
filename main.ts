input.onButtonPressed(Button.A, function () {
    if (randomevent == 2) {
        basic.showIcon(IconNames.Sad)
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
        randomevent = 0
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (randomevent == 0) {
        images.createBigImage(`
            . . . . . . . . . .
            . . . . . . . . . #
            . . # . . . . # # .
            . . . # # # # . . .
            . . # # . # # . . .
            `).scrollImage(1, 200)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (randomevent == 3) {
        music.play(music.stringPlayable("C5 F E A F E E F ", 120), music.PlaybackMode.UntilDone)
        images.createBigImage(`
            # # # # . . . . . .
            . . # . . . . . . .
            . # . . . # # . # #
            # # # # . . . . . .
            . . . . . . # # # .
            `).showImage(0)
        randomevent = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (randomevent == 3) {
        music.play(music.stringPlayable("C5 F E A F E E F ", 120), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Happy)
        randomevent = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    if (randomevent == 0) {
        images.createBigImage(`
            . . . . . . . . . .
            . # . # . . # . # .
            # # # # # # # # # #
            . # # # . . # # # .
            . . # . . . . # . .
            `).scrollImage(1, 200)
        basic.showIcon(IconNames.Heart)
        music.play(music.stringPlayable("E D C D E F G A ", 120), music.PlaybackMode.UntilDone)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (randomevent == 0) {
        images.createBigImage(`
            . . . . . . . . . #
            . # . . . . # # # .
            . . # # # # . . . .
            . # # . . . # . . .
            # # . . . . . # . .
            `).scrollImage(1, 200)
        basic.showIcon(IconNames.Happy)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (randomevent == 1) {
        music.play(music.stringPlayable("B G F F G A B C5 ", 800), music.PlaybackMode.UntilDone)
        images.createBigImage(`
            # . # . # . . . . .
            # # # # # . # . # .
            . # # # . . . . . .
            . . # . . # . . . #
            . . . . . . # # # .
            `).scrollImage(1, 200)
        randomevent = 0
    }
})
let randomevent = 0
basic.showIcon(IconNames.Asleep)
loops.everyInterval(120000, function () {
    randomevent = 0
    if (randomevent == 1) {
        basic.showString("hungry")
        basic.pause(500)
        basic.showIcon(IconNames.Confused)
        music.play(music.tonePlayable(175, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (randomevent == 2) {
        basic.showString("poop on carpet!")
        basic.pause(500)
        basic.showLeds(`
            . # . # .
            . . . . #
            . # # # .
            # . . . #
            . # # # .
            `)
        music.play(music.stringPlayable("C5 B A G F E D C ", 500), music.PlaybackMode.UntilDone)
    } else if (randomevent == 3) {
        basic.showString("poops outside")
        basic.pause(500)
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            . # # # .
            `)
        music.play(music.stringPlayable("C5 - E F G A B C5 ", 500), music.PlaybackMode.UntilDone)
    } else if (randomevent == 4) {
        basic.showString("tired get bed")
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            . . . . .
            `)
    }
})
