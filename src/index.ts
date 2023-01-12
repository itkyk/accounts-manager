#!/usr/bin/env node
import {Command} from "commander"
import show from "./module/show";
import write from "./module/write";
import deleteAccount from "./module/delete"
import openFile from "./module/openFile";
import versionCheck from "./module/checkVersion"
import updateJsonFormat from "./module/updateJsonFormat";

const program = new Command();

interface ProgramInterface {
  write: boolean
  filter: string
  delete: boolean
  open: boolean
  version: boolean
  update: boolean
}

program
  .option("-w, --write", "add mode", false)
  .option("-f,--filter <value>", "when show mode, filter value", "")
  .option("-d, --delete", "delete mode", false)
  .option("-o, --open", "open json file", false)
  .option("-v, --version", "check version", false)
  .option("-u, --update", "update data format", false)
program.parse();
const opts = program.opts() as ProgramInterface;

if (opts.write) {
  write().then()
}else if (opts.delete) {
  deleteAccount(opts.filter).then()
} else if (opts.open) {
  openFile()
}else if (opts.version) {
  versionCheck()
}else if (opts.update) {
  updateJsonFormat();
} else {
  show(opts.filter).then()
}