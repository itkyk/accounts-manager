module.exports = () => {
  const path = require("path");
  const fs = require("fs");
  const {exec} = require("child_process");
  const userHome = process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"];
  let dataPath = path.join(userHome, "/.itkyk_accounts.json")
  if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, "{}", "utf-8");
  }
  console.log(`----- OPEN DIR (${dataPath}) -----`)
  if (process.platform === "win32") {
    exec(`start ${dataPath}`)
  } else {
    exec(`open ${dataPath}`)
  }
}