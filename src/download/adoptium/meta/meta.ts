import axios from "axios";

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
export default async function getAdoptiumMetadata() {
  return axios
    .get("api.adoptium.net/v3/info/available_releases", {
      headers: {
        Accept: "application/json",
      },
    })
    .then((res) => {
      console.log("Fetch Adoptium Metadata Success");
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      console.error("Fetch Adoptium Metadata Failed");
      return Promise.reject(err);
    });
}
