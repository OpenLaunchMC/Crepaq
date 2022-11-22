/**
 * Get LWJGL3
 *
 * Metadata is fetch from Github Releases
 *      https://api.github.com/repos/LWJGL/lwjgl3/releases
 *
 * @name : getLWJGLMetadata
 * @description : Get LWJGL3 Metadata
 * @return : LWJGL3 Metadata Encoded as JSON
 */
export default function getLWJGLMetadata(): Promise<any>;
/**
 * Get LWJGL2
 *
 * Metadata is fetch from Github Releases
 *      https://api.github.com/repos/LWJGL/lwjgl/releases
 *
 * @name : getLWJGLLegacyMetadata
 * @description : Get LWJGL2 Metadata
 * @return : LWJGL2 Metadata Encoded as JSON
 */
export declare function getLWJGLLegacyMetadata(): any;
