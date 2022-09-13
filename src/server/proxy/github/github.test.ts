import DownloadGithub from "./github"

describe (
    "Test Github Proxy",
    () => {
        test(
            "Test Github proxy",
            () => {
                DownloadGithub("https://github.com/github/gitignore/archive/refs/heads/main.zip")
                DownloadGithub("https://github.com/adoptium/temurin8-binaries/releases/download/jdk8u345-b01/OpenJDK8U-debugimage_aarch64_linux_hotspot_8u345b01.tar.gz")
            }
        )
    }
)