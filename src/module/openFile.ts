import {exec} from "child_process";
import {jsonPath, jsonCheck} from "./util";
import fs from "fs";

const openFile = () => {
  jsonCheck(false);
  console.log(`----- OPEN DIR (${jsonPath}) -----`)
  if (process.platform === "win32") {
    exec(`start ${jsonPath}`)
  } else {
    exec(`open ${jsonPath}`)
  }
}

export default openFile;