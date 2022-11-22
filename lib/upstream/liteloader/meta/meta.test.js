"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
//import qs = require("qs");
var meta_1 = require("./meta");
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
describe("Liteloader Webpage Regex", function () {
    test("Test Liteloader Webpage Regex", function () {
        return (0, meta_1.getLiteloaderWebpage)()
            .then(function (resp) {
            var e_1, _a, e_2, _b;
            var LiteloaderDlRegex = /(https?:\/\/jenkins\.liteloader\.com\/job\/.{0,}?|https?:\/\/dl\.liteloader\.com\/redist\/.{0,}?)liteloader-installer-(\d\.\d{0,2}\.?\d{0,2})-(\d{2})-?(\w{0,})?(\.jar|\.exe)/gi;
            // const data: string = resp.data;
            // console.log(data)
            console.log("Get Liteloader Download Webpage : 200 Success");
            var links = resp.data.matchAll(LiteloaderDlRegex);
            console.log("Download Links RegExp Match Results:");
            try {
                for (var links_1 = __values(links), links_1_1 = links_1.next(); !links_1_1.done; links_1_1 = links_1.next()) {
                    var linkArray = links_1_1.value;
                    try {
                        for (var _c = (e_2 = void 0, __values(linkArray.values())), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var link = _d.value;
                            console.log(link);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    // for (const link of linkArray) {
                    //   console.log(link);
                    // }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (links_1_1 && !links_1_1.done && (_a = links_1.return)) _a.call(links_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        })
            .catch(function (err) {
            console.log("Unable to get liteloader download links");
            console.log(err);
        });
    }, 300000);
});
