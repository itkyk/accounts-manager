import {jsonPath, jsonCheck, packageJson, writeJson} from "./util";

const updateJsonFormat = () => {
  jsonCheck(false);
  const json = require(jsonPath);
  json.version = packageJson.version;
  writeJson(jsonPath, json);
}

export default updateJsonFormat;