import DownloadGithub from "./github";

describe("Test Github Proxy", () => {
  test("Test Github proxy", () => {
    // Test Archive
    // Well, Drink Tea and Write Gitignore
    DownloadGithub(
      "https://github.com/github/gitignore/archive/refs/heads/main.zip"
    );
    // Test Release
    // R.I.P AdoptOpenJDK , there are only temurin in the future.
    DownloadGithub(
      "https://github.com/adoptium/temurin8-binaries/releases/download/jdk8u345-b01/OpenJDK8U-debugimage_aarch64_linux_hotspot_8u345b01.tar.gz"
    );
  });
});
