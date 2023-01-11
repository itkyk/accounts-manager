module.exports = async() => {
  const path = require("path");
  const fs = require("fs");
  const inquirer = require("inquirer")
  const userHome = process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"];
  let jsonPath = path.join(userHome, "/.itkyk_accounts.json")
  if (!fs.existsSync(jsonPath)) {
    fs.writeFileSync(jsonPath, "{}", "utf-8");
  }
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
  fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2), "utf-8")
  console.log("----- ADDED DATA -----");
  console.table({[keyName]: json[keyName]})
}