"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
/**
 * Get Authlib-Injector Metadata
 *
 * Fetch Authlib-Injector Metadata from:
 *    https://api.github.com/repos/yushijinhun/authlib-injector/releases
 *
 * @name : getAuthlibMetadata
 * @description : Get Authlib-Injector's Metadata
 * @return : Authlib-Injector's Metadata Encoded as JSON
 */
function getAuthlibMetadata() {
    return axios_1.default
        .get("https://api.github.com/repos/yushijinhun/authlib-injector/releases")
        .then(function (res) {
        console.log("Fetch Authlib-Injector Metadata Success");
        return Promise.resolve(res.data);
    })
        .catch(function (err) {
        console.log("Fetch Authlib-Injector Metadata Failed");
        return Promise.reject(err);
    });
}
exports.default = getAuthlibMetadata;
