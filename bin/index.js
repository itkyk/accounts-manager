#!/usr/bin/env node
"use strict";
const { Command } = require("commander");
const write = require("./module/write");
const show = require("./module/show");
const deleteData = require("./module/delete");
const openFile = require("./module/openFile");
const program = new Command();
program
    .option("-w, --write", "add mode", false)
    .option("-f,--filter <value>", "when show mode, filter value", "")
    .option("-d, --delete", "delete mode", false)
    .option("-o, --open", "open json file", false);
program.parse();
const opts = program.opts();
if (opts.write) {
    write().then();
}
else if (opts.delete) {
    deleteData(opts.filter).then();
}
else if (opts.open) {
    openFile();
}
else {
    show(opts.filter).then();
}
