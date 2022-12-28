import axios from "axios";

export default async function getFabricMetadata() {
  try {
    const res = await axios.get("https://meta.fabricmc.net/v2/versions");
    console.log("Fetch Fabric Metadata Success");
    return await Promise.resolve(res.data);
  } catch (err) {
    console.error("Fetch Fabric Metadata Failed");
    return await Promise.reject(err);
  }
}

export async function getFabricInstallerMetadata() {
  try {
    const res = await axios.get(
      "https://meta.fabricmc.net/v2/versions/installer"
    );
    console.log("Fetch Fabric Installer Metadata Success");
    return await Promise.resolve(res.data);
  } catch (err) {
    console.error("Fetch Fabric Installer Metadata Failed");
    return await Promise.reject(err);
  }
}

export async function getFabricLoaderMetadata() {
  try {
    const res = await axios.get("https://meta.fabricmc.net/v2/versions/loader");
    console.log("Fetch Fabric Loader Metadata Success");
    return await Promise.resolve(res.data);
  } catch (err) {
    console.error("Fetch Fabric Loader Metadata Failed");
    return await Promise.reject(err);
  }
}

export async function getFabricAPIMetadataFromMaven() {
  try {
    const res = await axios.get(
      "https://maven.fabricmc.net/net/fabricmc/fabric-api/fabric-api/maven-metadata.xml"
    );
    console.log("Fetch Fabric API Metadata Success");
    return await Promise.resolve(res.data);
  } catch (err) {
    console.error("Fetch Fabric API Metadata Failed");
    return await Promise.reject(err);
  }
}

export async function getFabricInstallerMetadataFromMaven() {
  try {
    const res = await axios.get(
      "https://maven.fabricmc.net/net/fabricmc/fabric-installer/maven-metadata.xml"
    );
    console.log("Fetch Fabric API Metadata Success");
    return await Promise.resolve(res.data);
  } catch (err) {
    console.error("Fetch Fabric API Metadata Failed");
    return await Promise.reject(err);
  }
}

export async function getFabricLoaderMetadataFromMaven() {
  try {
    const res = await axios.get(
      "https://maven.fabricmc.net/net/fabricmc/fabric-loader/maven-metadata.xml"
    );
    console.log("Fetch Fabric Loader Metadata Success");
    return await Promise.resolve(res.data);
  } catch (err) {
    console.error("Fetch Fabric Loader Metadata Failed");
    return await Promise.reject(err);
  }
}

export async function getFabricAPIMetadataFromGithub() {
  try {
    const res = await axios.get(
      "https://api.github.com/repo/FabricMC/fabric/releases"
    );
    console.log("Fetch Fabric API Metadata Success");
    return await Promise.resolve(res.data);
  } catch (err) {
    console.error("Fetch Fabric API Metadata Failed");
    return await Promise.reject(err);
  }
}

export async function getFabricGameVersionsMetadata() {
  try {
    const res = await axios.get("https://meta.fabricmc.net/v2/versions/game");
    console.log("Fetch Fabric Game Versions Metadata Success");
    return await Promise.resolve(res.data);
  } catch (err) {
    console.error("Fetch Fabric Game Versions Metadata Failed");
    return await Promise.reject(err);
  }
}
