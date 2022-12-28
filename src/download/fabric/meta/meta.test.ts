import getFabricMetadata, {
  getFabricAPIMetadataFromGithub,
  getFabricAPIMetadataFromMaven,
  getFabricGameVersionsMetadata,
  getFabricInstallerMetadata,
  getFabricInstallerMetadataFromMaven,
  getFabricLoaderMetadata,
  getFabricLoaderMetadataFromMaven,
} from "./meta";

describe("Get Fabric Metadata", () => {
  test("Get Fabric Metadata", async () => {
    await getFabricMetadata();
  }, 300000);
  test("Get Fabric Installer Metadata", async () => {
    await getFabricInstallerMetadata();
  }, 300000);
  test("Get Fabric Loader Metadata", async () => {
    await getFabricLoaderMetadata();
  }, 300000);
  test("Get Fabric API Metadata From Maven", async () => {
    await getFabricAPIMetadataFromMaven();
  }, 300000);
  test("Get Fabric Installer Metadata From Maven", async () => {
    await getFabricInstallerMetadataFromMaven();
  }, 300000);
  test("Get Fabric Loader Metadata From Maven", async () => {
    await getFabricLoaderMetadataFromMaven();
  }, 300000);
  test("Get Fabric API Metadata From Github", async () => {
    await getFabricAPIMetadataFromGithub();
  }, 300000);
  test("Get Fabric Game Version Metadata", async () => {
    await getFabricGameVersionsMetadata();
  }, 300000);
});
