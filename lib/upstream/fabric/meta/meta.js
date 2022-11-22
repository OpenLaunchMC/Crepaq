"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFabricGameVersionsMetadata = exports.getFabricAPIMetadataFromGithub = exports.getFabricLoaderMetadataFromMaven = exports.getFabricInstallerMetadataFromMaven = exports.getFabricAPIMetadataFromMaven = exports.getFabricLoaderMetadata = exports.getFabricInstallerMetadata = void 0;
var axios_1 = require("axios");
function getFabricMetadata() {
    return axios_1.default
        .get("https://meta.fabricmc.net/v2/versions")
        .then(function (res) {
        console.log("Fetch Fabric Metadata Success");
        return Promise.resolve(res.data);
    })
        .catch(function (err) {
        console.log("Fetch Fabric Metadata Failed");
        return Promise.reject(err);
    });
}
exports.default = getFabricMetadata;
function getFabricInstallerMetadata() {
    return axios_1.default
        .get("https://meta.fabricmc.net/v2/versions/installer")
        .then(function (res) {
        console.log("Fetch Fabric Installer Metadata Success");
        return Promise.resolve(res.data);
    })
        .catch(function (err) {
        console.log("Fetch Fabric Installer Metadata Failed");
        return Promise.reject(err);
    });
}
exports.getFabricInstallerMetadata = getFabricInstallerMetadata;
function getFabricLoaderMetadata() {
    return axios_1.default
        .get("https://meta.fabricmc.net/v2/versions/loader")
        .then(function (res) {
        console.log("Fetch Fabric Loader Metadata Success");
        return Promise.resolve(res.data);
    })
        .catch(function (err) {
        console.log("Fetch Fabric Loader Metadata Failed");
        return Promise.reject(err);
    });
}
exports.getFabricLoaderMetadata = getFabricLoaderMetadata;
function getFabricAPIMetadataFromMaven() {
    return axios_1.default
        .get("https://maven.fabricmc.net/net/fabricmc/fabric-api/fabric-api/maven-metadata.xml")
        .then(function (res) {
        console.log("Fetch Fabric API Metadata Success");
        return Promise.resolve(res.data);
    })
        .catch(function (err) {
        console.log("Fetch Fabric API Metadata Failed");
        return Promise.reject(err);
    });
}
exports.getFabricAPIMetadataFromMaven = getFabricAPIMetadataFromMaven;
function getFabricInstallerMetadataFromMaven() {
    return axios_1.default
        .get("https://maven.fabricmc.net/net/fabricmc/fabric-installer/maven-metadata.xml")
        .then(function (res) {
        console.log("Fetch Fabric API Metadata Success");
        return Promise.resolve(res.data);
    })
        .catch(function (err) {
        console.log("Fetch Fabric API Metadata Failed");
        return Promise.reject(err);
    });
}
exports.getFabricInstallerMetadataFromMaven = getFabricInstallerMetadataFromMaven;
function getFabricLoaderMetadataFromMaven() {
    return axios_1.default
        .get("https://maven.fabricmc.net/net/fabricmc/fabric-loader/maven-metadata.xml")
        .then(function (res) {
        console.log("Fetch Fabric Loader Metadata Success");
        return Promise.resolve(res.data);
    })
        .catch(function (err) {
        console.log("Fetch Fabric Loader Metadata Failed");
        return Promise.reject(err);
    });
}
exports.getFabricLoaderMetadataFromMaven = getFabricLoaderMetadataFromMaven;
function getFabricAPIMetadataFromGithub() {
    return axios_1.default
        .get("https://api.github.com/repo/FabricMC/fabric/releases")
        .then(function (res) {
        console.log("Fetch Fabric API Metadata Success");
        return Promise.resolve(res.data);
    })
        .catch(function (err) {
        console.log("Fetch Fabric API Metadata Failed");
        return Promise.reject(err);
    });
}
exports.getFabricAPIMetadataFromGithub = getFabricAPIMetadataFromGithub;
function getFabricGameVersionsMetadata() {
    return axios_1.default
        .get("https://meta.fabricmc.net/v2/versions/game")
        .then(function (res) {
        console.log("Fetch Fabric Game Versions Metadata Success");
        return Promise.resolve(res.data);
    })
        .catch(function (err) {
        console.log("Fetch Fabric Game Versions Metadata Failed");
        return Promise.reject(err);
    });
}
exports.getFabricGameVersionsMetadata = getFabricGameVersionsMetadata;
