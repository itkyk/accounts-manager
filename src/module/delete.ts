import {ObjectFilter, jsonPath, jsonCheck, writeJson} from "./util";

const deleteAccount = async(filter: string) => {
  const inquirer = require("inquirer")
  jsonCheck();
  const json = require(jsonPath);
  const filterJson = ObjectFilter(json, filter)
  if (Object.keys(filterJson).length !== 0) {
    const result = await inquirer.prompt([
      {
        type: "list",
        name: "key",
        message: "select delete Project name",
        choices: Object.keys(filterJson)
      }
    ]);
  json[result.key]["deleted"] = true
    writeJson(jsonPath, json)
    console.log(`----- Deleted Data ${result.key} -----`)
  } else {
    console.log(`----- Cannot Find Data (filter: ${filter}) -----`)
  }
}

export default deleteAccount;