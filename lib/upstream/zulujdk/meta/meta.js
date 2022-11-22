"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 *
 *
 * https://www.azul.com/wp-admin/admin-ajax.php?action=bundles&endpoint=community&use_stage=false&include_fields=java_version,openjdk_build_number,release_status,support_term,os,arch,hw_bitness,abi,bundle_type,javafx,latest,ext,name,sha256_hash,url,cpu_gen,features
 */
var axios_1 = require("axios");
function getZuluJDKMetadata() {
    axios_1.default
        .get("https://www.azul.com/wp-admin/admin-ajax.php?action=bundles&endpoint=community&use_stage=false", {
        headers: {
            Accept: "application/json",
        },
    })
        .then(function (resp) { });
}
exports.default = getZuluJDKMetadata;
