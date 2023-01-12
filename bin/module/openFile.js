"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var util_1 = require("./util");
var openFile = function () {
    (0, util_1.jsonCheck)(false);
    console.log("----- OPEN DIR (".concat(util_1.jsonPath, ") -----"));
    if (process.platform === "win32") {
        (0, child_process_1.exec)("start ".concat(util_1.jsonPath));
    }
    else {
        (0, child_process_1.exec)("open ".concat(util_1.jsonPath));
    }
};
exports.default = openFile;
