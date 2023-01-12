"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var versionCheck = function () {
    var version = util_1.packageJson.version;
    var name = util_1.packageJson.name;
    console.log("".concat(name, " | v").concat(version));
};
exports.default = versionCheck;
