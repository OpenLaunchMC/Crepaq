import axios from "axios";

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
export default async function getAuthlibMetadata() {
  return axios
    .get("https://api.github.com/repos/yushijinhun/authlib-injector/releases")
    .then((res) => {
      console.log("Fetch Authlib-Injector Metadata Success");
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      console.error("Fetch Authlib-Injector Metadata Failed");
      return Promise.reject(err);
    });
}
