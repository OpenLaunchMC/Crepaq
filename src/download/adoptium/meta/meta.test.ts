import getAdoptiumMetadata from "./meta";

describe("Get Zulu Metadata", () => {
  test("Get Zulu Metadata", async () => {
    await getAdoptiumMetadata();
  }, 300000);
});
