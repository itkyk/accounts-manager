type objectInterface = {[key: string]: any}

const ObjectFilter = (object: objectInterface, filter:string) => {
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
  const fs = require("fs");
  const inquirer = require("inquirer")
  const userHome = process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"];
  let jsonPath = path.join(userHome, "/.itkyk_accounts.json")
  if (!fs.existsSync(jsonPath)) {
    fs.writeFileSync(jsonPath, "{}", "utf-8");
  }
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
    console.table({[result.key]: json[result.key]})
  } else {
    console.log(`----- Cannot Find Data (filter: ${filter}) -----`)
  }
}

module.exports.ObjectFilter = ObjectFilter;