//import qs = require("qs");
import { getLiteloaderWebpage } from "./meta";

// describe("Liteloader Webpage Request", () => {
//   test("Test Liteloader Webpage Request", () => {
//     return getLiteloaderWebpage()
//       .then((data) => {
//         console.log(data);
//         expect(data).toBe(expect.anything);
//       })
//       .catch((err) => {
//         expect(err).not.toBe(expect.anything);
//       });
//   }, 300000);
// });

describe("Liteloader Webpage Regex", () => {
  test("Test Liteloader Webpage Regex", () => {
    return getLiteloaderWebpage()
      .then(function (resp) {
        const LiteloaderDlRegex =
        /(https?:\/\/jenkins\.liteloader\.com\/job\/.{0,}?|https?:\/\/dl\.liteloader\.com\/redist\/.{0,}?)liteloader-installer-(\d\.\d{0,2}\.?\d{0,2})-(\d{2})-?(\w{0,})?(\.jar|\.exe)/gi;
        // const data: string = resp.data;
        // console.log(data)
        console.log("Get Liteloader Download Webpage : 200 Success");
        const links: IterableIterator<RegExpMatchArray> = resp.data.matchAll(LiteloaderDlRegex);
        console.log("Download Links RegExp Match Results:");
        for (const linkArray of links) {
          for ( const link of linkArray.values()) {
            console.log(link)
          }
          // for (const link of linkArray) {
          //   console.log(link);
          // }
        }
      })
      .catch(function (err) {
        console.log("Unable to get liteloader download links");
        console.log(err);
      });
  }, 300000);
});
