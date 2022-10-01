import axios from "axios";

export default function getFabricMetadata() {
  return axios
    .get("https://meta.fabricmc.net/v2/versions")
    .then((res) => {
      console.log("Fetch Fabric Metadata Success");
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      console.log("Fetch Fabric Metadata Failed");
      return Promise.reject(err);
    });
}

export function getFabricInstallerMetadata() {
  return axios
    .get("https://meta.fabricmc.net/v2/versions/installer")
    .then((res) => {
      console.log("Fetch Fabric Installer Metadata Success");
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      console.log("Fetch Fabric Installer Metadata Failed");
      return Promise.reject(err);
    });
}

export function getFabricLoaderMetadata() {
  return axios
    .get("https://meta.fabricmc.net/v2/versions/loader")
    .then((res) => {
      console.log("Fetch Fabric Loader Metadata Success");
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      console.log("Fetch Fabric Loader Metadata Failed");
      return Promise.reject(err);
    });
}

export function getFabricAPIMetadataFromMaven() {
  return axios
    .get("https://maven.fabricmc.net/net/fabricmc/fabric-api/fabric-api/maven-metadata.xml")
    .then((res) => {
      console.log("Fetch Fabric API Metadata Success");
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      console.log("Fetch Fabric API Metadata Failed");
      return Promise.reject(err);
    });
}

export function getFabricInstallerMetadataFromMaven() {
  return axios
    .get("https://maven.fabricmc.net/net/fabricmc/fabric-installer/maven-metadata.xml")
    .then((res) => {
      console.log("Fetch Fabric API Metadata Success");
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      console.log("Fetch Fabric API Metadata Failed");
      return Promise.reject(err);
    });
}

export function getFabricLoaderMetadataFromMaven() {
  return axios
    .get("https://maven.fabricmc.net/net/fabricmc/fabric-loader/maven-metadata.xml")
    .then((res) => {
      console.log("Fetch Fabric Loader Metadata Success");
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      console.log("Fetch Fabric Loader Metadata Failed");
      return Promise.reject(err);
    });
}

export function getFabricAPIMetadataFromGithub() {
  return axios
    .get("https://api.github.com/repo/FabricMC/fabric/releases")
    .then((res) => {
      console.log("Fetch Fabric API Metadata Success");
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      console.log("Fetch Fabric API Metadata Failed");
      return Promise.reject(err);
    });
}

export function getFabricGameVersionsMetadata() {
  return axios
    .get("https://meta.fabricmc.net/v2/versions/game")
    .then((res) => {
      console.log("Fetch Fabric Game Versions Metadata Success");
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      console.log("Fetch Fabric Game Versions Metadata Failed");
      return Promise.reject(err);
    });
}
