input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(60)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(96)
})
servos.P0.setAngle(60)
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
    ) <= 6) {
        servos.P0.setAngle(96)
        basic.pause(500)
        servos.P0.setAngle(60)
        basic.pause(1000)
    } else {
        servos.P0.setAngle(60)
    }
    basic.pause(1000)
})
