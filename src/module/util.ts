import path from "path";
import fs from "fs";

type objectInterface = {[key: string]: any}
export const ObjectFilter = (object: objectInterface, filter:string) => {
  let tempObject = {};
  const removeVersionObj = eliminateKey(object, "version");
  Object.keys(removeVersionObj).forEach((key: string) => {
    if (key.includes(filter) && !object[key].deleted) {
      tempObject = Object.assign(tempObject, {[key]: object[key]})
    }
  })
  return tempObject;
}

export const userHome = process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"] as string;

export const jsonPath = path.join(userHome, "/.itkyk_accounts.json")
export const packageJson = require(path.join(__dirname, "../../package.json"));

const updateNotification = () => {
  console.log("----- Please Update -----");
  console.log("account --update");
  process.exit(0);
}

export const writeJson = (path: string, data: object) => {
  fs.writeFileSync(path, JSON.stringify(data, null, 2), "utf-8");
}

export const jsonCheck = (exit: boolean = true) => {
  // check account data json
  if (!fs.existsSync(jsonPath)) {
    const vanillaData = {
      version: packageJson.version
    }
    writeJson(jsonPath, vanillaData)
  } else {
    const json = require(jsonPath);
    // check version key in json
    if ("version" in json) {
      // when different each version.
      if (json.version !== packageJson.version && exit) {
        updateNotification();
      }
    } else if (exit) {
      updateNotification();
    }
  }
}

export const eliminateKey = (object: objectInterface, eliminateTag: string | [string]) => {
  let tempObj = {};
  Object.keys(object).forEach((key: string)=> {
    if ((typeof eliminateTag === "string" && eliminateTag !== key) || (typeof eliminateTag === "object" && !eliminateTag.includes(key))) {
      tempObj = Object.assign(tempObj, {[key]: object[key]});
    }
  })
  return tempObj;
}