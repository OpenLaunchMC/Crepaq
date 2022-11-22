"use strict";
// /**
//  *
//  *
//  *
//  *  Method 0:
//  *      http://dl.liteloader.com/versions/versions.json
//  *      Warning : The links of Liteloaders whose version below mc 1.8 is inaccurate.
//  *
//  *  Method 1:
//  *      Mumfrey's Maven Repo at repo.mumfrey.com
//  *      https://repo.mumfrey.com/content/repositories/snapshots/com/mumfrey/maven-metadata.xml
//  *      https://repo.mumfrey.com/content/repositories/public/com/mumfrey/liteloader/maven-metadata.xml
//  *      Like Jenkins repo , this only contains > 1.8
//  *
//  *  Method 2:
//  *      Liteloader's jenkins repo only contains jars after mc 1.8 version
//  *      This program will scan liteloader's webpage and generate metadata
//  *
//  *      The versions <= mc 1.5.1 are in http://dl.liteloader.com/redist/legacy/
//  *      hese legacy versions are stored as zip files.
//  *
//  *      The versions >= 1.8 are in jenkins.liteloader.com
//  *      The versions from 1.5.2 to 1.7.10 are in dl.liteloader.com/redist/:version
//  *
//  *      The program will scan liteloader.com/download
//  *      and try to match this regex
//  *              /(https?:\/\/jenkins\.liteloader\.com\/job\/.{0,}?|https?:\/\/dl\.liteloader\.com\/redist\/.{0,}?)liteloader-installer-(\d\.\d{0,2}(\.\d{0,2})?)-\d{2}-?(\w{0,})?(\.jar|\.exe)/gi
//  *      Then it will scan dl.liteloader.com/redist/legacy/ with
//  *              \/redist\/legacy\/liteloader_(\d\.\d(\.\d{0,2})?)_(\d{0,2})\.zip
//  */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLiteloaderLegacyMetadataFromWebpage = exports.getLiteloaderMetadataFromWebpage = exports.getLiteloaderMetadataFromMaven = exports.getLiteloaderMetadata = void 0;
var axios_1 = require("axios");
var qs_1 = require("qs");
var LiteloaderDlRegex = /(https?:\/\/jenkins\.liteloader\.com\/job\/.{0,}?|https?:\/\/dl\.liteloader\.com\/redist\/.{0,}?)liteloader-installer-(\d\.\d{0,2}\.?\d{0,2})-(\d{2})-?(\w{0,})?(\.jar|\.exe)/gi;
var LiteloaderLegacyDlRegex = /\/redist\/legacy\/liteloader_(\d\.\d(\.\d{0,2})?)_(\d{0,2})\.zip/gi;
// interface LiteloaderWebpageMetadata {
//     BaseURL   : string | undefined ,
//     MCVersion : string | undefined ,
//     Patch     : string | undefined ,
//     // If regex is undefined it will be release , all the versions >= 1.7.2 are legacy.
//     BuildType : string | undefined , //SNAPSHOT , RELEASE or LEGACY
//     InstType  : string | undefined , //JAR or EXE
//     FullURL   : string | undefined ,
// }
/**
 *
 */
function getLiteloaderMetadata() {
    console.log("Start Request Liteloader Manifest File");
    axios_1.default
        .get("http://dl.liteloader.com/versions/versions.json")
        .then(function (resp) { })
        .catch(function (err) { });
}
exports.getLiteloaderMetadata = getLiteloaderMetadata;
/**
 *
 */
function getLiteloaderMetadataFromMaven() { }
exports.getLiteloaderMetadataFromMaven = getLiteloaderMetadataFromMaven;
/**
 *
 *
 */
function getLiteloaderMetadataFromWebpage() {
    console.log("Start Request Liteloader Download Links");
    return axios_1.default
        .get("http://www.liteloader.com/download", {
        headers: {
            "User-Agent": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50",
        },
    })
        .then(function (resp) {
        var LinksIter = resp.data.matchAll(LiteloaderDlRegex);
    })
        .catch(function (err) {
        console.log("Unable to get liteloader download links");
        console.log(err);
    });
}
exports.getLiteloaderMetadataFromWebpage = getLiteloaderMetadataFromWebpage;
/**
 *
 *
 */
function getLiteloaderLegacyMetadataFromWebpage() {
    console.log("Start Request Liteloader Legacy Download Links");
    return axios_1.default
        .get("http://dl.liteloader.com/redist/legacy", {
        headers: {
            "User-Agent": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50",
        },
    })
        .then(function (resp) {
        var data = (0, qs_1.stringify)(resp.data);
        console.log("Get Liteloader Legacy Download Webpage : 200 Success");
        var LinksIter = data.matchAll(LiteloaderLegacyDlRegex);
    })
        .catch(function (err) {
        console.log("Unable to get liteloader download links");
        console.log(err);
    });
}
exports.getLiteloaderLegacyMetadataFromWebpage = getLiteloaderLegacyMetadataFromWebpage;
