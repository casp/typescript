"use strict";
exports.__esModule = true;
var BluetoothConnector_1 = require("./BluetoothConnector");
var System_1 = require("./System");
var WifiConnector_1 = require("./WifiConnector");
var wifi = new WifiConnector_1.WifiConnector();
var system = new System_1.System(new WifiConnector_1.WifiConnector());
console.log("-------------------------");
var system1 = new System_1.System(new BluetoothConnector_1.BluetoothConnector());
