import axios from "axios";

export default async function DownloadGithub(URL: string) {
  if (
    !URL.includes("https://github.com") ||
    !URL.includes("https://codeload.github.com") ||
    !URL.includes("https://api.github.com") ||
    !URL.includes("https://raw.githubusercontent.com")
  ) {
    console.error("Invalid Github Link");
    return;
  }
  return axios
    .get(URL)
    .then((res) => {
      console.log("Github Proxy Request " + URL + " : Success");
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      console.log("Github Proxy Request " + URL + " : Failed");
      return Promise.reject(err);
    });
}
