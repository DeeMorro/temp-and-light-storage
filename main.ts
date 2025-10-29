datalogger.setColumnTitles(
"Temperature",
"Light"
)
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
serial.redirectToUSB()
loops.everyInterval(1000, function () {
    datalogger.log(
    datalogger.createCV("Temperature", input.temperature()),
    datalogger.createCV("Light", input.lightLevel())
    )
})
