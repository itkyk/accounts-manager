"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminateKey = exports.jsonCheck = exports.writeJson = exports.packageJson = exports.jsonPath = exports.userHome = exports.ObjectFilter = void 0;
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var ObjectFilter = function (object, filter) {
    var tempObject = {};
    var removeVersionObj = (0, exports.eliminateKey)(object, "version");
    Object.keys(removeVersionObj).forEach(function (key) {
        var _a;
        if (key.includes(filter) && !object[key].deleted) {
            tempObject = Object.assign(tempObject, (_a = {}, _a[key] = object[key], _a));
        }
    });
    return tempObject;
};
exports.ObjectFilter = ObjectFilter;
exports.userHome = process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"];
exports.jsonPath = path_1.default.join(exports.userHome, "/.itkyk_accounts.json");
exports.packageJson = require(path_1.default.join(__dirname, "../../package.json"));
var updateNotification = function () {
    console.log("----- Please Update -----");
    console.log("account --update");
    process.exit(0);
};
var writeJson = function (path, data) {
    fs_1.default.writeFileSync(path, JSON.stringify(data, null, 2), "utf-8");
};
exports.writeJson = writeJson;
var jsonCheck = function (exit) {
    if (exit === void 0) { exit = true; }
    // check account data json
    if (!fs_1.default.existsSync(exports.jsonPath)) {
        var vanillaData = {
            version: exports.packageJson.version
        };
        (0, exports.writeJson)(exports.jsonPath, vanillaData);
    }
    else {
        var json = require(exports.jsonPath);
        // check version key in json
        if ("version" in json) {
            // when different each version.
            if (json.version !== exports.packageJson.version && exit) {
                updateNotification();
            }
        }
        else if (exit) {
            updateNotification();
        }
    }
};
exports.jsonCheck = jsonCheck;
var eliminateKey = function (object, eliminateTag) {
    var tempObj = {};
    Object.keys(object).forEach(function (key) {
        var _a;
        if ((typeof eliminateTag === "string" && eliminateTag !== key) || (typeof eliminateTag === "object" && !eliminateTag.includes(key))) {
            tempObj = Object.assign(tempObj, (_a = {}, _a[key] = object[key], _a));
        }
    });
    return tempObj;
};
exports.eliminateKey = eliminateKey;
