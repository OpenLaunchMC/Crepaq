export default function getRiftMetadata(){
     return axios
    .get("https://api.github.com/repos/Chocohead/Rift/releases")
    .then((res) => {
      console.log("Fetch LWJGL2 Metadata Success");
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      console.log("Fetch LWJGL2 Metadata Failed");
      return Promise.reject(err);
    });
}