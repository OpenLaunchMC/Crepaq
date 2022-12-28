import DownloadCurseforge from "./curseforge";

describe("Test Curseforge Proxy", () => {
  test("Test Curseforge proxy", () => {
    // I never used JEI , can this mod make a 32k?
    DownloadCurseforge(
      "https://www.curseforge.com/minecraft/mc-mods/jei/download"
    );
    // It's MechJeb!
    // Let's Blow Up Some Rockets!
    DownloadCurseforge(
      "https://www.curseforge.com/kerbal/ksp-mods/mechjeb/download"
    );
  });
});
