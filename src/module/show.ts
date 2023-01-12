import inquirer from "inquirer";
import {ObjectFilter} from "./util";
import {jsonPath, jsonCheck, eliminateKey} from "./util";

const show = async(filter: string) => {
  jsonCheck();
  const json = require(jsonPath);
  const filterJson = ObjectFilter(json, filter)
  if (Object.keys(filterJson).length !== 0) {
    const result = await inquirer.prompt([
      {
        type: "list",
        name: "key",
        message: "select name",
        choices: Object.keys(filterJson)
      }
    ]);
    let resultData = eliminateKey(json[result.key], ["deleted"]);
    console.table({[result.key]: resultData})
  } else {
    console.log(`----- Cannot Find Data (filter: ${filter}) -----`)
  }
}

export default show;