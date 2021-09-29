export = ContentDirectoryService;
/**
 * Sonos ContentDirectoryService
 *
 * Browse for local content
 *
 * @author Stephan van Rooij - https://svrooij.io
 * @remarks This file is generated, do not edit manually. https://svrooij.io/sonos-api-docs
 * @export
 * @class ContentDirectoryService
 * @extends {Service}
 */
declare class ContentDirectoryService extends Service {
    /**
     *
     * @param {string} host Sonos host
     * @param {number} port Sonos port, default `1400`
     */
    constructor(host: string, port: number);
    /**
     * Browse - Browse for content: Music library (A), share(S:), Sonos playlists(SQ:), Sonos favorites(FV:2), radio stations(R:0/0), radio shows(R:0/1). Recommendation: Send one request, check the `TotalMatches` and - if necessary - do additional requests with higher `StartingIndex`. In case of duplicates only the first is returned! Example: albums with same title, even if artists are different
     *
     * @param {Object} [options] - An object with the following properties
     * @param {string} options.ObjectID - The search query, (`A:ARTIST` / `A:ALBUMARTIST` / `A:ALBUM` / `A:GENRE` / `A:COMPOSER` / `A:TRACKS` / `A:PLAYLISTS` / `S:` / `SQ:` / `FV:2` / `R:0/0` / `R:0/1`) with optionally `:search+query` behind it.
     * @param {string} options.BrowseFlag - How to browse [ 'BrowseMetadata' / 'BrowseDirectChildren' ]
     * @param {string} options.Filter - Which fields should be returned `*` for all.
     * @param {number} options.StartingIndex - Paging, where to start, usually 0
     * @param {number} options.RequestedCount - Paging, number of items, maximum is 1,000. This parameter does NOT restrict the number of items being searched (filter) but only the number being returned.
     * @param {string} options.SortCriteria - Sort the results based on metadata fields. `+upnp:artist,+dc:title` for sorting on artist then on title.
     * @remarks (1) If the title contains an apostrophe the returned uri will contain a `&apos;`. (2) Some libraries support a BrowseAndParse, so you don't have to parse the xml.
     * @returns {Promise<Object>} response object, with these properties `Result`, `NumberReturned`, `TotalMatches`, `UpdateID`
     */
    Browse(options?: {
        ObjectID: string;
        BrowseFlag: string;
        Filter: string;
        StartingIndex: number;
        RequestedCount: number;
        SortCriteria: string;
    }): Promise<any>;
    /**
     * CreateObject
     *
     * @param {Object} [options] - An object with the following properties
     * @param {string} options.ContainerID
     * @param {string} options.Elements
     * @returns {Promise<Object>} response object, with these properties `ObjectID`, `Result`
     */
    CreateObject(options?: {
        ContainerID: string;
        Elements: string;
    }): Promise<any>;
    /**
     * DestroyObject
     *
     * @param {Object} [options] - An object with the following properties
     * @param {string} options.ObjectID
     * @returns {Promise<Boolean>} request succeeded
     */
    DestroyObject(options?: {
        ObjectID: string;
    }): Promise<boolean>;
    /**
     * FindPrefix
     *
     * @param {Object} [options] - An object with the following properties
     * @param {string} options.ObjectID
     * @param {string} options.Prefix
     * @returns {Promise<Object>} response object, with these properties `StartingIndex`, `UpdateID`
     */
    FindPrefix(options?: {
        ObjectID: string;
        Prefix: string;
    }): Promise<any>;
    /**
     * GetAlbumArtistDisplayOption
     * @returns {Promise<Object>} response object, with these properties `AlbumArtistDisplayOption`
     */
    GetAlbumArtistDisplayOption(): Promise<any>;
    /**
     * GetAllPrefixLocations
     *
     * @param {Object} [options] - An object with the following properties
     * @param {string} options.ObjectID
     * @returns {Promise<Object>} response object, with these properties `TotalPrefixes`, `PrefixAndIndexCSV`, `UpdateID`
     */
    GetAllPrefixLocations(options?: {
        ObjectID: string;
    }): Promise<any>;
    /**
     * GetBrowseable
     * @returns {Promise<Object>} response object, with these properties `IsBrowseable`
     */
    GetBrowseable(): Promise<any>;
    /**
     * GetLastIndexChange
     * @returns {Promise<Object>} response object, with these properties `LastIndexChange`
     */
    GetLastIndexChange(): Promise<any>;
    /**
     * GetSearchCapabilities
     * @returns {Promise<Object>} response object, with these properties `SearchCaps`
     */
    GetSearchCapabilities(): Promise<any>;
    /**
     * GetShareIndexInProgress
     * @returns {Promise<Object>} response object, with these properties `IsIndexing`
     */
    GetShareIndexInProgress(): Promise<any>;
    /**
     * GetSortCapabilities
     * @returns {Promise<Object>} response object, with these properties `SortCaps`
     */
    GetSortCapabilities(): Promise<any>;
    /**
     * GetSystemUpdateID
     * @returns {Promise<Object>} response object, with these properties `Id`
     */
    GetSystemUpdateID(): Promise<any>;
    /**
     * RefreshShareIndex
     *
     * @param {Object} [options] - An object with the following properties
     * @param {string} options.AlbumArtistDisplayOption
     * @returns {Promise<Boolean>} request succeeded
     */
    RefreshShareIndex(options?: {
        AlbumArtistDisplayOption: string;
    }): Promise<boolean>;
    /**
     * RequestResort
     *
     * @param {Object} [options] - An object with the following properties
     * @param {string} options.SortOrder
     * @returns {Promise<Boolean>} request succeeded
     */
    RequestResort(options?: {
        SortOrder: string;
    }): Promise<boolean>;
    /**
     * SetBrowseable
     *
     * @param {Object} [options] - An object with the following properties
     * @param {boolean} options.Browseable
     * @returns {Promise<Boolean>} request succeeded
     */
    SetBrowseable(options?: {
        Browseable: boolean;
    }): Promise<boolean>;
    /**
     * UpdateObject
     *
     * @param {Object} [options] - An object with the following properties
     * @param {string} options.ObjectID
     * @param {string} options.CurrentTagValue
     * @param {string} options.NewTagValue
     * @returns {Promise<Boolean>} request succeeded
     */
    UpdateObject(options?: {
        ObjectID: string;
        CurrentTagValue: string;
        NewTagValue: string;
    }): Promise<boolean>;
}
import Service = require("./Service");
