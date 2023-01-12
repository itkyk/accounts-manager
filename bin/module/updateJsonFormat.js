"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var updateJsonFormat = function () {
    (0, util_1.jsonCheck)(false);
    var json = require(util_1.jsonPath);
    json.version = util_1.packageJson.version;
    (0, util_1.writeJson)(util_1.jsonPath, json);
};
exports.default = updateJsonFormat;
