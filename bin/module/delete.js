"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const ObjectFilter2 = (object, filter) => {
    let tempObject = {};
    Object.keys(object).forEach((key) => {
        if (key.includes(filter) && !object[key].deleted) {
            tempObject = Object.assign(tempObject, { [key]: object[key] });
        }
    });
    return tempObject;
};
module.exports = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    const path = require("path");
    const inquirer = require("inquirer");
    const fs = require("fs");
    const userHome = process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"];
    let jsonPath = path.join(userHome, "/.itkyk_accounts.json");
    if (!fs.existsSync(jsonPath)) {
        fs.writeFileSync(jsonPath, "{}", "utf-8");
    }
    const json = require(jsonPath);
    const filterJson = ObjectFilter2(json, filter);
    if (Object.keys(filterJson).length !== 0) {
        const result = yield inquirer.prompt([
            {
                type: "list",
                name: "key",
                message: "select delete Project name",
                choices: Object.keys(filterJson)
            }
        ]);
        json[result.key]["deleted"] = true;
        fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2), "utf-8");
        console.log(`----- Deleted Data ${result.key} -----`);
    }
    else {
        console.log(`----- Cannot Find Data (filter: ${filter}) -----`);
    }
});
