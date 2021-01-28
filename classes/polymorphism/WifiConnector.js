"use strict";
exports.__esModule = true;
exports.WifiConnector = void 0;
var WifiConnector = /** @class */ (function () {
    function WifiConnector() {
    }
    WifiConnector.prototype.doConnect = function () {
        console.log("Connecting via wifi");
        console.log("Get password");
        console.log("Lease an IP for 24 hours");
        console.log("Connected");
        return true;
    };
    return WifiConnector;
}());
exports.WifiConnector = WifiConnector;
