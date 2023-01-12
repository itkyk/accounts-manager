import {packageJson} from "./util";
const versionCheck = () => {
  const version = packageJson.version;
  const name = packageJson.name;
  console.log(`${name} | v${version}`);
}

export default versionCheck;