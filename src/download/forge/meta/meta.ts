/**
 * Forge's Metadata is not provided in their website or repo
 * You can download forge with the adfocus links in their website
 *
 * So This Program will scan their website and get forge's Manifest data
 * First it will get supported minecraft versions with this regex
 *      /<a.{0,}href=\"index_\d{0,1}\.\d{0,2}\.?\d{0,2}_?p?r?e?\d?\.html\">(\d{0,1}\.\d{0,2}\.?\d{0,2})<\/a>|<li class=\"elem-active\">(\d{0,1}\.\d{0,2}\.?\d{0,2}_?p?r?e?\d?)<\/li>/gi
 *
 * Then Request All the Index Webpages
 *      index_<:version>.html
 *
 * Then get the maven repo with this regex
 *      /https?:\/\/maven\.minecraftforge\.net\/net\/minecraftforge\/forge\/(\d\.\d{0,2}\.?\d{0,2}\w{0,})-(\d{0,}\.\d{0,}\.\d{0,}\.?\d{0,}-?\w{0,})\/forge-\d\.\d{0,2}\.?\d{0,2}\w{0,}\d{0,}-\d{0,}\.\d{0,}\.\d{0,}\.?\d{0,}-?\w{0,}-?\w{0,}\.(zip|jar)/gi
 * (The Longest Regex we've ever made...)
 * (It nearly caused a Catastrophic Backtracking when I test it on my own computer.)
 *
 *
 */
import axios from "axios";

const ForgeGameVersionRegex: RegExp =
  /<a.{0,}href=\"index_\d{0,1}\.\d{0,2}\.?\d{0,2}_?p?r?e?\d?\.html\">(\d{0,1}\.\d{0,2}\.?\d{0,2})<\/a>|<li class=\"elem-active\">(\d{0,1}\.\d{0,2}\.?\d{0,2}_?p?r?e?\d?)<\/li>/gi;
const ForgeMavenRepoRegex: RegExp =
  /https?:\/\/maven\.minecraftforge\.net\/net\/minecraftforge\/forge\/(\d\.\d{0,2}\.?\d{0,2}\w{0,})-(\d{0,}\.\d{0,}\.\d{0,}\.?\d{0,}-?\w{0,})\/forge-\d\.\d{0,2}\.?\d{0,2}\w{0,}\d{0,}-\d{0,}\.\d{0,}\.\d{0,}\.?\d{0,}-?\w{0,}-?\w{0,}\.(zip|jar)/gi;

type ForgeInstallerMetadata{
  Version: string;
  Installer: string[];
}

export function getForgeInstallerMetadata() {
  return new Promise((resolve, reject) => {
    axios
      .get("https://files.minecraftforge.net/")
      .then((res) => {
        const Versions: string[] = res.data.match(ForgeGameVersionRegex);
        const ForgeInstallerMetadata: [] = [];
        for (const Version of Versions) {
          axios
            .get(`https://files.minecraftforge.net/index_${Version}.html`)
            .then((res) => {
              const ForgeInstaller: ForgeInstallerMetadata[] = res.data.match(
                ForgeMavenRepoRegex
              );
              ForgeInstallerMetadata.push({
                Version,
                Installer: ForgeInstaller,
              });
            })
            .catch((err) => {
              console.error(err);
              reject(err);
            });
        }
        resolve(ForgeInstallerMetadata);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
}
