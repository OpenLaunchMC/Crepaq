import axios from "axios";

export default async function DownloadCurseforge(URL: string) {
  if (
    !URL.includes("https://curseforge.com") ||
    !URL.includes("https://www.curseforge.com")
  ) {
    console.error("Invalid Github Link");
    return;
  }
  return axios
    .get(URL)
    .then((res) => {
      console.log("Curseforge Proxy Request " + URL + " : Success");
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      console.log("Curseforge Proxy Request " + URL + " : Failed");
      return Promise.reject(err);
    });
}
