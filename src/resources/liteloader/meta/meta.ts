/**
 *
 *
 *
 *  Method 0:
 *      http://dl.liteloader.com/versions/versions.json
 *      Warning : The links of Liteloaders whose version below mc 1.8 is inaccurate.
 *
 *  Method 1:
 *      Mumfrey's Maven Repo at repo.mumfrey.com
 *      https://repo.mumfrey.com/content/repositories/snapshots/com/mumfrey/maven-metadata.xml
 *      https://repo.mumfrey.com/content/repositories/public/com/mumfrey/liteloader/maven-metadata.xml
 *      Like Jenkins repo , this only contains > 1.8
 *
 *  Method 2:
 *      Liteloader's jenkins repo only contains jars after mc 1.8 version
 *      This program will scan liteloader's webpage and generate metadata
 *
 *      The versions <= mc 1.5.1 are in http://dl.liteloader.com/redist/legacy/
 *      hese legacy versions are stored as zip files.
 *
 *      The versions >= 1.8 are in jenkins.liteloader.com
 *      The versions from 1.5.2 to 1.7.10 are in dl.liteloader.com/redist/:version
 *
 *      The program will scan liteloader.com/download
 *      and try to match this regex
 *              /(https?:\/\/jenkins\.liteloader\.com\/job\/.{0,}?|https?:\/\/dl\.liteloader\.com\/redist\/.{0,}?)liteloader-installer-(\d\.\d{0,2}(\.\d{0,2})?)-\d{2}-?(\w{0,})?(\.jar|\.exe)/gi
 *      Then it will scan dl.liteloader.com/redist/legacy/ with
 *              \/redist\/legacy\/liteloader_(\d\.\d(\.\d{0,2})?)_(\d{0,2})\.zip
 *      Method 4:
 *      Jenkins' REST API
 */

import axios from "axios";
import { stringify } from "qs";

const LiteloaderDlRegex =
  /(https?:\/\/jenkins\.liteloader\.com\/job\/.{0,}?|https?:\/\/dl\.liteloader\.com\/redist\/.{0,}?)liteloader-installer-(\d\.\d{0,2}\.?\d{0,2})-(\d{2})-?(\w{0,})?(\.jar|\.exe)/gi;
const LiteloaderLegacyDlRegex =
  /\/redist\/legacy\/liteloader_(\d\.\d(\.\d{0,2})?)_(\d{0,2})\.zip/gi;

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
export function getLiteloaderMetadata() {
  console.log("Start Request Liteloader Manifest File");
  axios
    .get("http://dl.liteloader.com/versions/versions.json")
    .then(function (resp) {

    })
    .catch(function (err) {
      
    });
}

/**
 *
 */
export function getLiteloaderMetadataFromMaven() {}

/**
 *
 *
 */
export function getLiteloaderMetadataFromWebpage() {
  console.log("Start Request Liteloader Download Links");
  return axios
    .get("http://www.liteloader.com/download", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50",
      },
    })
    .then(function (resp) {
      const LinksIter: IterableIterator<RegExpMatchArray> =
        resp.data.matchAll(LiteloaderDlRegex);
    })
    .catch(function (err) {
      console.log("Unable to get liteloader download links");
      console.log(err);
    });
}

/**
 *
 *
 */
export function getLiteloaderLegacyMetadataFromWebpage() {
  console.log("Start Request Liteloader Legacy Download Links");
  return axios
    .get("http://dl.liteloader.com/redist/legacy", {
      headers: {
        "User-Agent":
          "Crebit/1.0 (ProjectOpenLaunch/Crebit ; dev)",
      },
    })
    .then(function (resp) {
      const data: string = stringify(resp.data);
      console.log("Get Liteloader Legacy Download Webpage : 200 Success");
      const LinksIter: IterableIterator<RegExpMatchArray> = data.matchAll(
        LiteloaderLegacyDlRegex
      );
    })
    .catch(function (err) {
      console.log("Unable to get liteloader download links");
      console.log(err);
    });
}

function getLiteloaderMetadataFromJenkins() {
  axios.get(
    "https://jenkins.liteloader.com/api/json"
  )
}