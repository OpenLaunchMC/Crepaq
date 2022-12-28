/**
 * Metadata Request for LWJGL
 */
import axios from "axios";

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
export default function getLWJGLMetadata() {
  return axios
    .get("https://api.github.com/repos/LWJGL/lwjgl3/releases")
    .then((res) => {
      console.log("Get LWJGL3 Metadata Success");
      return Promise.resolve(res.data);
    });
}

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
export function getLWJGLLegacyMetadata(): any {
  return axios
    .get("https://api.github.com/repos/LWJGL/lwjgl/releases")
    .then((res) => {
      console.log("Fetch LWJGL2 Metadata Success");
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      console.error("Fetch LWJGL2 Metadata Failed");
      return Promise.reject(err);
    });
}
