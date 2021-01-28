"use strict";
exports.__esModule = true;
exports.System = void 0;
var System = /** @class */ (function () {
    function System(connector) {
        this.connector = connector;
        connector.doConnect();
    }
    return System;
}());
exports.System = System;
