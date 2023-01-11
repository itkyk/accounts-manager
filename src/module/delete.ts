type objectInterface2 = {[key: string]: any}
const ObjectFilter2 = (object: objectInterface2, filter:string) => {
  let tempObject = {};
  Object.keys(object).forEach((key: string) => {
    if (key.includes(filter) && !object[key].deleted) {
      tempObject = Object.assign(tempObject, {[key]: object[key]})
    }
  })
  return tempObject;
}
module.exports = async(filter: string) => {
  const path = require("path");
  const inquirer = require("inquirer")
  const fs = require("fs");
  const userHome = process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"];
  let jsonPath = path.join(userHome, "/.itkyk_accounts.json")
  if (!fs.existsSync(jsonPath)) {
    fs.writeFileSync(jsonPath, "{}", "utf-8");
  }
  const json = require(jsonPath);
  const filterJson = ObjectFilter2(json, filter)
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
  fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2), "utf-8");
    console.log(`----- Deleted Data ${result.key} -----`)
  } else {
    console.log(`----- Cannot Find Data (filter: ${filter}) -----`)
  }
}