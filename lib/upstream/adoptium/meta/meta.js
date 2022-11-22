"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
/**
 * Get Adoptium Metadata
 *
 * Metadata is fetch from:
 *      api.adoptium.net/v3/info/avaliable_releases
 *
 * @name getAdoptiumMetadata
 * @description Fetch Adoptium Metadata
 * @return Adoptium's Metadata Encoded as JSON
 */
function getAdoptiumMetadata() {
    return axios_1.default
        .get("api.adoptium.net/v3/info/available_releases", {
        headers: {
            Accept: "application/json",
        },
    })
        .then(function (res) {
        console.log("Fetch Adoptium Metadata Success");
        return Promise.resolve(res.data);
    })
        .catch(function (err) {
        console.log("Fetch Adoptium Metadata Failed");
        return Promise.reject(err);
    });
}
exports.default = getAdoptiumMetadata;
