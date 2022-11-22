"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLWJGLLegacyMetadata = void 0;
/**
 * Metadata Request for LWJGL
 */
var axios_1 = require("axios");
/**
 * Get LWJGL3
 *
 * Metadata is fetch from Github Releases
 *      https://api.github.com/repos/LWJGL/lwjgl3/releases
 *
 * @name : getLWJGLMetadata
 * @description : Get LWJGL3 Metadata
 * @return : LWJGL3 Metadata Encoded as JSON
 */
function getLWJGLMetadata() {
    return axios_1.default
        .get("https://api.github.com/repos/LWJGL/lwjgl3/releases")
        .then(function (res) {
        console.log("Get LWJGL3 Metadata Success");
        return Promise.resolve(res.data);
    });
}
exports.default = getLWJGLMetadata;
/**
 * Get LWJGL2
 *
 * Metadata is fetch from Github Releases
 *      https://api.github.com/repos/LWJGL/lwjgl/releases
 *
 * @name : getLWJGLLegacyMetadata
 * @description : Get LWJGL2 Metadata
 * @return : LWJGL2 Metadata Encoded as JSON
 */
function getLWJGLLegacyMetadata() {
    return axios_1.default
        .get("https://api.github.com/repos/LWJGL/lwjgl/releases")
        .then(function (res) {
        console.log("Fetch LWJGL2 Metadata Success");
        return Promise.resolve(res.data);
    })
        .catch(function (err) {
        console.log("Fetch LWJGL2 Metadata Failed");
        return Promise.reject(err);
    });
}
exports.getLWJGLLegacyMetadata = getLWJGLLegacyMetadata;
