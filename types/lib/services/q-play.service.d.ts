export = QPlayService;
/**
 * Sonos QPlayService
 *
 * Services related to Chinese Tencent Qplay service
 *
 * @author Stephan van Rooij - https://svrooij.io
 * @remarks This file is generated, do not edit manually. https://svrooij.io/sonos-api-docs
 * @export
 * @class QPlayService
 * @extends {Service}
 */
declare class QPlayService extends Service {
    /**
     *
     * @param {string} host Sonos host
     * @param {number} port Sonos port, default `1400`
     */
    constructor(host: string, port: number);
    /**
     * QPlayAuth
     *
     * @param {Object} [options] - An object with the following properties
     * @param {string} options.Seed
     * @returns {Promise<Object>} response object, with these properties `Code`, `MID`, `DID`
     */
    QPlayAuth(options?: {
        Seed: string;
    }): Promise<any>;
}
import Service = require("./Service");
