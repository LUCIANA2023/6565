makerbit.onIrButton(IrButton.NUM8, IrButtonAction.Pressed, function () {
    basic.showNumber(8)
})
makerbit.onIrButton(IrButton.NUM6, IrButtonAction.Pressed, function () {
    basic.showNumber(6)
})
makerbit.onIrButton(IrButton.NUM3, IrButtonAction.Pressed, function () {
    basic.showNumber(3)
})
makerbit.onIrButton(IrButton.TLeft, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 150)
    basic.pause(200)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Light, IrButtonAction.Pressed, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.White)
})
makerbit.onIrButton(IrButton.NUM9, IrButtonAction.Pressed, function () {
    basic.showNumber(9)
})
makerbit.onIrButton(IrButton.NUM7, IrButtonAction.Pressed, function () {
    basic.showNumber(7)
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Right, 150)
    basic.pause(200)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Left, 150)
    basic.pause(200)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Minus, IrButtonAction.Pressed, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Blue)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 150)
    basic.pause(200)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.NUM4, IrButtonAction.Pressed, function () {
    basic.showNumber(4)
})
makerbit.onIrButton(IrButton.NUM2, IrButtonAction.Pressed, function () {
    basic.showNumber(2)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 150)
    basic.pause(200)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.NUM5, IrButtonAction.Pressed, function () {
    basic.showNumber(5)
})
makerbit.onIrButton(IrButton.Power, IrButtonAction.Pressed, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
    Tinybit.RGB_Car_Program().clear()
    Tinybit.RGB_Car_Program().show()
})
makerbit.onIrButton(IrButton.NUM1, IrButtonAction.Pressed, function () {
    basic.showNumber(1)
})
makerbit.onIrButton(IrButton.NUM0, IrButtonAction.Pressed, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
})
makerbit.onIrButton(IrButton.BEEP, IrButtonAction.Pressed, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.TRight, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 150)
    basic.pause(200)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Plus, IrButtonAction.Pressed, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
})
makerbit.connectIrReceiver(DigitalPin.P8)
basic.forever(function () {
    if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        for (let spped = 0; spped <= 80; spped++) {
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, spped)
        }
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.Black) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 70)
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.Black)) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 70)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Stop, 0)
    }
})
basic.forever(function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
    basic.pause(100)
    Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
    basic.pause(100)
    Tinybit.RGB_Car_Big(Tinybit.enColor.Blue)
    basic.pause(100)
    Tinybit.RGB_Car_Big(Tinybit.enColor.White)
    basic.pause(100)
    Tinybit.RGB_Car_Big(Tinybit.enColor.Cyan)
    basic.pause(100)
    Tinybit.RGB_Car_Big(Tinybit.enColor.Pinkish)
    basic.pause(100)
    Tinybit.RGB_Car_Big(Tinybit.enColor.Yellow)
    basic.pause(100)
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
