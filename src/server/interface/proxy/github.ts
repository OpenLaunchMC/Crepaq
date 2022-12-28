import axios from "axios";

async function getGithubRelease(url : string) {
    axios.get( url )
}