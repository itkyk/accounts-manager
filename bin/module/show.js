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
const ObjectFilter = (object, filter) => {
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
    const fs = require("fs");
    const inquirer = require("inquirer");
    const userHome = process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"];
    let jsonPath = path.join(userHome, "/.itkyk_accounts.json");
    if (!fs.existsSync(jsonPath)) {
        fs.writeFileSync(jsonPath, "{}", "utf-8");
    }
    const json = require(jsonPath);
    const filterJson = ObjectFilter(json, filter);
    if (Object.keys(filterJson).length !== 0) {
        const result = yield inquirer.prompt([
            {
                type: "list",
                name: "key",
                message: "select name",
                choices: Object.keys(filterJson)
            }
        ]);
        console.table({ [result.key]: json[result.key] });
    }
    else {
        console.log(`----- Cannot Find Data (filter: ${filter}) -----`);
    }
});
module.exports.ObjectFilter = ObjectFilter;
