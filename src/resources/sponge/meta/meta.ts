import axios from "axios"

export function getSpongeVanillaSnapshotsMetadata() {
    return axios.get(
        "https://repo.spongepowered.org/repository/maven-snapshots/org/spongepowered/spongevanilla/maven-metadata.xml"
    )
}

export function getSpongeForgeSnapshotsMetadata() {
    return axios.get(
        "https://repo.spongepowered.org/repository/maven-snapshots/org/spongepowered/spongeforge/maven-metadata.xml"
    )
}

export function getSpongeVanillaReleaseMetadata() {
    return axios.get(
        "https://repo.spongepowered.org/repository/maven-releases/org/spongepowered/spongevanilla/maven-metadata.xml"
    )
}

export function getSpongeForgeReleaseMetadata() {
    return axios.get(
        "https://repo.spongepowered.org/repository/maven-releases/org/spongepowered/spongeforge/maven-metadata.xml"
    )
}
