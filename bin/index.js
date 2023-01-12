#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var show_1 = __importDefault(require("./module/show"));
var write_1 = __importDefault(require("./module/write"));
var delete_1 = __importDefault(require("./module/delete"));
var openFile_1 = __importDefault(require("./module/openFile"));
var checkVersion_1 = __importDefault(require("./module/checkVersion"));
var updateJsonFormat_1 = __importDefault(require("./module/updateJsonFormat"));
var program = new commander_1.Command();
program
    .option("-w, --write", "add mode", false)
    .option("-f,--filter <value>", "when show mode, filter value", "")
    .option("-d, --delete", "delete mode", false)
    .option("-o, --open", "open json file", false)
    .option("-v, --version", "check version", false)
    .option("-u, --update", "update data format", false);
program.parse();
var opts = program.opts();
if (opts.write) {
    (0, write_1.default)().then();
}
else if (opts.delete) {
    (0, delete_1.default)(opts.filter).then();
}
else if (opts.open) {
    (0, openFile_1.default)();
}
else if (opts.version) {
    (0, checkVersion_1.default)();
}
else if (opts.update) {
    (0, updateJsonFormat_1.default)();
}
else {
    (0, show_1.default)(opts.filter).then();
}
