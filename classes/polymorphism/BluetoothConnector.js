"use strict";
exports.__esModule = true;
exports.BluetoothConnector = void 0;
var BluetoothConnector = /** @class */ (function () {
    function BluetoothConnector() {
    }
    BluetoothConnector.prototype.doConnect = function () {
        console.log("Connecting via Bluetooth");
        console.log("Pair with PIN");
        console.log("Connected");
        return true;
    };
    return BluetoothConnector;
}());
exports.BluetoothConnector = BluetoothConnector;
