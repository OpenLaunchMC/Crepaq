import axios from "axios";

export default function getMinecraftMetadata() {
  return axios
    .get("https://launchermeta.mojang.com/mc/game/version_manifest.json")
    .then((res) => {
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}
