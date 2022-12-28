import axios from "axios";

export function getSpongeVanillaSnapshotsMetadata() {
  return axios.get("https://repo.spongepowered.com/maven-snapshots/org");
}

export function getSpongeForgeSnapshotsMetadata() {
  return axios.get("https://repo.spongepowered.com/maven-snapshots/org");
}

export function getSpongeVanillaReleaseMetadata() {
  return axios.get("https://repo.spongepowered.com/maven-releases/org");
}

export function getSpongeForgeReleaseMetadata() {
  return axios.get("https://repo.spongepowered.com/maven-releases/org");
}
