import DownloadCurseforge from "./curseforge"


describe (
    "Test Curseforge Proxy",
    () => {
        test(
            "Test Curseforge proxy",
            () => {
                DownloadCurseforge("https://www.curseforge.com/minecraft/mc-mods/jei/download")
                DownloadCurseforge("https://www.curseforge.com/kerbal/ksp-mods/mechjeb/download")
            }
        )
    }
)