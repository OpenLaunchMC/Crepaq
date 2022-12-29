/**
 *
 *
 *
 * https://www.azul.com/wp-admin/admin-ajax.php?action=bundles&endpoint=community&use_stage=false&include_fields=java_version,openjdk_build_number,release_status,support_term,os,arch,hw_bitness,abi,bundle_type,javafx,latest,ext,name,sha256_hash,url,cpu_gen,features
 */
import axios from "axios";

/**
 *
 * @name : getZuluMetadata
 * @returns : A Metadata Encoded as JSON
 */
export default async function getZuluMetadata() {
  return axios
    .get(
      "https://www.azul.com/wp-admin/admin-ajax.php?action=bundles&endpoint=community&use_stage=false",
      {
        headers: {
          Accept: "application/json",
        },
      }
    )
    .then((res) => {
      console.log("Get Zulu Metadata Success");
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      console.error("Get Zulu Metadata Failed");
      return Promise.reject(err);
    });
}
