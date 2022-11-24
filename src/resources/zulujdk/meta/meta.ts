/**
 *
 *
 *
 * https://www.azul.com/wp-admin/admin-ajax.php?action=bundles&endpoint=community&use_stage=false&include_fields=java_version,openjdk_build_number,release_status,support_term,os,arch,hw_bitness,abi,bundle_type,javafx,latest,ext,name,sha256_hash,url,cpu_gen,features
 */
import axios from "axios";

export default function getZuluJDKMetadata() {
  axios
    .get(
      "https://www.azul.com/wp-admin/admin-ajax.php?action=bundles&endpoint=community&use_stage=false",
      {
        headers: {
          Accept: "application/json",
        },
      }
    )
    .then(function (resp) {});
}
