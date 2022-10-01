/**
 * Get Spigot
 */

/**
 * Get Spigot Builds From Jenkins
 * 
 */
export default function getSpigotMetadata() {
    return axios.get(
        "https://hub.spigotmc.org/jenkins/job/BuildTools/api/json"
    ).then((res) => {
        return Promise.resolve(res.data)
    }).catch(err => {
        return Promise.reject(err)
    })
}

export function getBungeeCordBuildMetadata(){
    return axios.get(
        "https://ci.md-5.net/job/BungeeCord/api/json"
    ).then((res) => {
        return Promise.resolve(res.data)
    }).catch(err => {
        return Promise.reject(err)
    })
}