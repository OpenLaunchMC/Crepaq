import getZuluJDKMetadata from "./meta";

describe("Get Zulu Metadata", () => {
  test("Get Zulu Metadata", async () => {
    await getZuluJDKMetadata();
  }, 300000);
});
