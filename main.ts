input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(59)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(93)
})
servos.P0.setAngle(94)
basic.forever(function () {
    serial.writeValue("d", sonar.ping(
    DigitalPin.P2,
    DigitalPin.P1,
    PingUnit.Centimeters
    ))
    if (sonar.ping(
    DigitalPin.P2,
    DigitalPin.P1,
    PingUnit.Centimeters
    ) <= 5) {
        servos.P0.setAngle(59)
        basic.pause(500)
        servos.P0.setAngle(93)
        basic.pause(2000)
    } else {
        servos.P0.setAngle(93)
    }
})
