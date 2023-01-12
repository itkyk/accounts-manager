import inquirer from "inquirer";
import {jsonPath, jsonCheck, writeJson} from "./util";

const write= async() => {
  jsonCheck();
  const json = require(jsonPath);
  const result = await inquirer.prompt([
    {
      name: "key",
      "message": "Input Project Name",
    },
    {
      name: "url",
      "message": "Input Project Login URL",
      default: null
    },
    {
      name: "id",
      message: "Input Project Login User ID",
    },
    {
      type: "password",
      name: "password",
      message: "Input Project Login Password"
    }
  ]);
  const keyName = String(result.key);
  json[keyName] = {};
  delete result.key;
  Object.keys(result).forEach(key => {
    if (result[key]) {
      json[keyName][key] = result[key]
    }
  })
  json[keyName]["deleted"] = false
  writeJson(jsonPath, json);
  console.log("----- ADDED DATA -----");
  console.table({[keyName]: json[keyName]})
}

export default write;