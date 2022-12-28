import axios from "axios";

export default function getCurseforgeApi(ApiURL: string, ApiKey: string) {
  if (!ApiURL.includes("api.curseforge.com")) {
    ApiURL = "api.curseforge.com" + ApiURL;
  }
  return axios.get(ApiURL, {
    headers: {
      Accept: "application/json",
      "x-api-key": ApiKey,
    },
  });
}
