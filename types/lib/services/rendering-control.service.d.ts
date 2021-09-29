export = RenderingControlService;
/**
 * Sonos RenderingControlService
 *
 * Volume related controls
 *
 * @author Stephan van Rooij - https://svrooij.io
 * @remarks This file is generated, do not edit manually. https://svrooij.io/sonos-api-docs
 * @export
 * @class RenderingControlService
 * @extends {Service}
 */
declare class RenderingControlService extends Service {
    /**
     *
     * @param {string} host Sonos host
     * @param {number} port Sonos port, default `1400`
     */
    constructor(host: string, port: number);
    /**
     * GetBass - Get bass level between -10 and 10
     *
     * @param {Object} [options] - An object with the following properties
     * @param {number} options.InstanceID - InstanceID should always be `0`
     * @returns {Promise<Object>} response object, with these properties `CurrentBass`
     */
    GetBass(options?: {
        InstanceID: number;
    }): Promise<any>;
    /**
     * GetEQ - Get equalizer value
     *
     * @param {Object} [options] - An object with the following properties
     * @param {number} options.InstanceID - InstanceID should always be `0`
     * @param {string} options.EQType - Allowed values `DialogLevel` (bool) / `MusicSurroundLevel` (-15/+15) /  `NightMode` (bool) / `SubGain` (-10/+10) / `SurroundEnable` (bool) / `SurroundLevel` (-15/+15) / `SurroundMode` (0 = full, 1 = ambient)
     * @remarks Not all EQ types are available on every speaker
     * @returns {Promise<Object>} response object, with these properties `CurrentValue`
     */
    GetEQ(options?: {
        InstanceID: number;
        EQType: string;
    }): Promise<any>;
    /**
     * GetHeadphoneConnected
     *
     * @param {Object} [options] - An object with the following properties
     * @param {number} options.InstanceID - InstanceID should always be `0`
     * @returns {Promise<Object>} response object, with these properties `CurrentHeadphoneConnected`
     */
    GetHeadphoneConnected(options?: {
        InstanceID: number;
    }): Promise<any>;
    /**
     * GetLoudness - Whether or not Loudness is on
     *
     * @param {Object} [options] - An object with the following properties
     * @param {number} options.InstanceID - InstanceID should always be `0`
     * @param {string} options.Channel [ 'Master' / 'LF' / 'RF' ]
     * @returns {Promise<Object>} response object, with these properties `CurrentLoudness`
     */
    GetLoudness(options?: {
        InstanceID: number;
        Channel: string;
    }): Promise<any>;
    /**
     * GetMute
     *
     * @param {Object} [options] - An object with the following properties
     * @param {number} options.InstanceID - InstanceID should always be `0`
     * @param {string} options.Channel [ 'Master' / 'LF' / 'RF' / 'SpeakerOnly' ]
     * @returns {Promise<Object>} response object, with these properties `CurrentMute`
     */
    GetMute(options?: {
        InstanceID: number;
        Channel: string;
    }): Promise<any>;
    /**
     * GetOutputFixed
     *
     * @param {Object} [options] - An object with the following properties
     * @param {number} options.InstanceID - InstanceID should always be `0`
     * @returns {Promise<Object>} response object, with these properties `CurrentFixed`
     */
    GetOutputFixed(options?: {
        InstanceID: number;
    }): Promise<any>;
    /**
     * GetRoomCalibrationStatus
     *
     * @param {Object} [options] - An object with the following properties
     * @param {number} options.InstanceID - InstanceID should always be `0`
     * @returns {Promise<Object>} response object, with these properties `RoomCalibrationEnabled`, `RoomCalibrationAvailable`
     */
    GetRoomCalibrationStatus(options?: {
        InstanceID: number;
    }): Promise<any>;
    /**
     * GetSupportsOutputFixed
     *
     * @param {Object} [options] - An object with the following properties
     * @param {number} options.InstanceID - InstanceID should always be `0`
     * @returns {Promise<Object>} response object, with these properties `CurrentSupportsFixed`
     */
    GetSupportsOutputFixed(options?: {
        InstanceID: number;
    }): Promise<any>;
    /**
     * GetTreble - Get treble
     *
     * @param {Object} [options] - An object with the following properties
     * @param {number} options.InstanceID - InstanceID should always be `0`
     * @returns {Promise<Object>} response object, with these properties `CurrentTreble`
     */
    GetTreble(options?: {
        InstanceID: number;
    }): Promise<any>;
    /**
     * GetVolume - Get volume
     *
     * @param {Object} [options] - An object with the following properties
     * @param {number} options.InstanceID - InstanceID should always be `0`
     * @param {string} options.Channel [ 'Master' / 'LF' / 'RF' ]
     * @returns {Promise<Object>} response object, with these properties `CurrentVolume`
     */
    GetVolume(options?: {
        InstanceID: number;
        Channel: string;
    }): Promise<any>;
    /**
     * GetVolumeDB
     *
     * @param {Object} [options] - An object with the following properties
     * @param {number} options.InstanceID - InstanceID should always be `0`
     * @param {string} options.Channel [ 'Master' / 'LF' / 'RF' ]
     * @returns {Promise<Object>} response object, with these properties `CurrentVolume`
     */
    GetVolumeDB(options?: {
        InstanceID: number;
        Channel: string;
    }): Promise<any>;
    /**
     * GetVolumeDBRange
     *
     * @param {Object} [options] - An object with the following properties
     * @param {number} options.InstanceID - InstanceID should always be `0`
     * @param {string} options.Channel [ 'Master' / 'LF' / 'RF' ]
     * @returns {Promise<Object>} response object, with these properties `MinValue`, `MaxValue`
     */
    GetVolumeDBRange(options?: {
        InstanceID: number;
        Channel: string;
    }): Promise<any>;
    /**
     * RampToVolume
     *
     * @param {Object} [options] - An object with the following properties
     * @param {number} options.InstanceID - InstanceID should always be `0`
     * @param {string} options.Channel [ 'Master' / 'LF' / 'RF' ]
     * @param {string} options.RampType [ 'SLEEP_TIMER_RAMP_TYPE' / 'ALARM_RAMP_TYPE' / 'AUTOPLAY_RAMP_TYPE' ]
     * @param {number} options.DesiredVolume
     * @param {boolean} options.ResetVolumeAfter
     * @param {string} options.ProgramURI
     * @returns {Promise<Object>} response object, with these properties `RampTime`
     */
    RampToVolume(options?: {
        InstanceID: number;
        Channel: string;
        RampType: string;
        DesiredVolume: number;
        ResetVolumeAfter: boolean;
        ProgramURI: string;
    }): Promise<any>;
    /**
     * ResetBasicEQ
     *
     * @param {Object} [options] - An object with the following properties
     * @param {number} options.InstanceID - InstanceID should always be `0`
     * @returns {Promise<Object>} response object, with these properties `Bass`, `Treble`, `Loudness`, `LeftVolume`, `RightVolume`
     */
    ResetBasicEQ(options?: {
        InstanceID: number;
    }): Promise<any>;
    /**
     * ResetExtEQ
     *
     * @param {Object} [options] - An object with the following properties
     * @param {number} options.InstanceID - InstanceID should always be `0`
     * @param {string} options.EQType
     * @returns {Promise<Boolean>} request succeeded
     */
    ResetExtEQ(options?: {
        InstanceID: number;
        EQType: string;
    }): Promise<boolean>;
    /**
     * RestoreVolumePriorToRamp
     *
     * @param {Object} [options] - An object with the following properties
     * @param {number} options.InstanceID - InstanceID should always be `0`
     * @param {string} options.Channel [ 'Master' / 'LF' / 'RF' ]
     * @returns {Promise<Boolean>} request succeeded
     */
    RestoreVolumePriorToRamp(options?: {
        InstanceID: number;
        Channel: string;
    }): Promise<boolean>;
    /**
     * SetBass - Set bass level, between -10 and 10
     *
     * @param {Object} [options] - An object with the following properties
     * @param {number} options.InstanceID - InstanceID should always be `0`
     * @param {number} options.DesiredBass
     * @returns {Promise<Boolean>} request succeeded
     */
    SetBass(options?: {
        InstanceID: number;
        DesiredBass: number;
    }): Promise<boolean>;
    /**
     * SetChannelMap
     *
     * @param {Object} [options] - An object with the following properties
     * @param {number} options.InstanceID - InstanceID should always be `0`
     * @param {string} options.ChannelMap
     * @returns {Promise<Boolean>} request succeeded
     */
    SetChannelMap(options?: {
        InstanceID: number;
        ChannelMap: string;
    }): Promise<boolean>;
    /**
     * SetEQ - Set equalizer value for different types
     *
     * @param {Object} [options] - An object with the following properties
     * @param {number} options.InstanceID - InstanceID should always be `0`
     * @param {string} options.EQType - Allowed values `DialogLevel` (bool) / `MusicSurroundLevel` (-15/+15) /  `NightMode` (bool) / `SubGain` (-10/+10) / `SurroundEnable` (bool) / `SurroundLevel` (-15/+15) / `SurroundMode` (0 = full, 1 = ambient)
     * @param {number} options.DesiredValue - Booleans required `1` for true or `0` for false, rest number as specified
     * @remarks Not supported by all speakers, TV related
     * @returns {Promise<Boolean>} request succeeded
     */
    SetEQ(options?: {
        InstanceID: number;
        EQType: string;
        DesiredValue: number;
    }): Promise<boolean>;
    /**
     * SetLoudness - Set loudness on / off
     *
     * @param {Object} [options] - An object with the following properties
     * @param {number} options.InstanceID - InstanceID should always be `0`
     * @param {string} options.Channel [ 'Master' / 'LF' / 'RF' ]
     * @param {boolean} options.DesiredLoudness
     * @returns {Promise<Boolean>} request succeeded
     */
    SetLoudness(options?: {
        InstanceID: number;
        Channel: string;
        DesiredLoudness: boolean;
    }): Promise<boolean>;
    /**
     * SetMute
     *
     * @param {Object} [options] - An object with the following properties
     * @param {number} options.InstanceID - InstanceID should always be `0`
     * @param {string} options.Channel [ 'Master' / 'LF' / 'RF' / 'SpeakerOnly' ]
     * @param {boolean} options.DesiredMute
     * @returns {Promise<Boolean>} request succeeded
     */
    SetMute(options?: {
        InstanceID: number;
        Channel: string;
        DesiredMute: boolean;
    }): Promise<boolean>;
    /**
     * SetOutputFixed
     *
     * @param {Object} [options] - An object with the following properties
     * @param {number} options.InstanceID - InstanceID should always be `0`
     * @param {boolean} options.DesiredFixed
     * @returns {Promise<Boolean>} request succeeded
     */
    SetOutputFixed(options?: {
        InstanceID: number;
        DesiredFixed: boolean;
    }): Promise<boolean>;
    /**
     * SetRelativeVolume
     *
     * @param {Object} [options] - An object with the following properties
     * @param {number} options.InstanceID - InstanceID should always be `0`
     * @param {string} options.Channel [ 'Master' / 'LF' / 'RF' ]
     * @param {number} options.Adjustment
     * @returns {Promise<Object>} response object, with these properties `NewVolume`
     */
    SetRelativeVolume(options?: {
        InstanceID: number;
        Channel: string;
        Adjustment: number;
    }): Promise<any>;
    /**
     * SetRoomCalibrationStatus
     *
     * @param {Object} [options] - An object with the following properties
     * @param {number} options.InstanceID - InstanceID should always be `0`
     * @param {boolean} options.RoomCalibrationEnabled
     * @returns {Promise<Boolean>} request succeeded
     */
    SetRoomCalibrationStatus(options?: {
        InstanceID: number;
        RoomCalibrationEnabled: boolean;
    }): Promise<boolean>;
    /**
     * SetRoomCalibrationX
     *
     * @param {Object} [options] - An object with the following properties
     * @param {number} options.InstanceID - InstanceID should always be `0`
     * @param {string} options.CalibrationID
     * @param {string} options.Coefficients
     * @param {string} options.CalibrationMode
     * @returns {Promise<Boolean>} request succeeded
     */
    SetRoomCalibrationX(options?: {
        InstanceID: number;
        CalibrationID: string;
        Coefficients: string;
        CalibrationMode: string;
    }): Promise<boolean>;
    /**
     * SetTreble - Set treble level
     *
     * @param {Object} [options] - An object with the following properties
     * @param {number} options.InstanceID - InstanceID should always be `0`
     * @param {number} options.DesiredTreble - between -10 and 10
     * @returns {Promise<Boolean>} request succeeded
     */
    SetTreble(options?: {
        InstanceID: number;
        DesiredTreble: number;
    }): Promise<boolean>;
    /**
     * SetVolume
     *
     * @param {Object} [options] - An object with the following properties
     * @param {number} options.InstanceID - InstanceID should always be `0`
     * @param {string} options.Channel [ 'Master' / 'LF' / 'RF' ]
     * @param {number} options.DesiredVolume
     * @returns {Promise<Boolean>} request succeeded
     */
    SetVolume(options?: {
        InstanceID: number;
        Channel: string;
        DesiredVolume: number;
    }): Promise<boolean>;
    /**
     * SetVolumeDB
     *
     * @param {Object} [options] - An object with the following properties
     * @param {number} options.InstanceID - InstanceID should always be `0`
     * @param {string} options.Channel [ 'Master' / 'LF' / 'RF' ]
     * @param {number} options.DesiredVolume
     * @returns {Promise<Boolean>} request succeeded
     */
    SetVolumeDB(options?: {
        InstanceID: number;
        Channel: string;
        DesiredVolume: number;
    }): Promise<boolean>;
}
import Service = require("./Service");
