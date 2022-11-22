"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpongeForgeReleaseMetadata = exports.getSpongeVanillaReleaseMetadata = exports.getSpongeForgeSnapshotsMetadata = exports.getSpongeVanillaSnapshotsMetadata = void 0;
var axios_1 = require("axios");
function getSpongeVanillaSnapshotsMetadata() {
    return axios_1.default.get("https://repo.spongepowered.com/maven-snapshots/org");
}
exports.getSpongeVanillaSnapshotsMetadata = getSpongeVanillaSnapshotsMetadata;
function getSpongeForgeSnapshotsMetadata() {
    return axios_1.default.get("https://repo.spongepowered.com/maven-snapshots/org");
}
exports.getSpongeForgeSnapshotsMetadata = getSpongeForgeSnapshotsMetadata;
function getSpongeVanillaReleaseMetadata() {
    return axios_1.default.get("https://repo.spongepowered.com/maven-releases/org");
}
exports.getSpongeVanillaReleaseMetadata = getSpongeVanillaReleaseMetadata;
function getSpongeForgeReleaseMetadata() {
    return axios_1.default.get("https://repo.spongepowered.com/maven-releases/org");
}
exports.getSpongeForgeReleaseMetadata = getSpongeForgeReleaseMetadata;
