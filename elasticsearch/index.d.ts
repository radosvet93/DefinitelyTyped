// Type definitions for elasticsearch 5.0
// Project: https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html
// Definitions by: Casper Skydt <https://github.com/CasperSkydt>, Blake Smith <https://github.com/bfsmith>, Dave Dunkin <https://github.com/ddunkin>, Jeffery Grajkowski <https://github.com/pushplay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Elasticsearch {
    export class Client {
        constructor(params: ConfigOptions);
        cat: Cat;
        cluster: Cluster;
        indices: Indices;
        ingest: Ingest;
        nodes: Nodes;
        snapshot: Snapshot;
        tasks: Tasks;
        bulk(params: BulkIndexDocumentsParams): PromiseLike<any>;
        bulk(params: BulkIndexDocumentsParams, callback: (error: any, response: any) => void): void;
        clearScroll(params: ClearScrollParams, callback: (error: any, response: any) => void): void;
        clearScroll(params: ClearScrollParams): PromiseLike<any>;
        count(params: CountParams, callback: (error: any, response: CountResponse) => void): void;
        count(params: CountParams): PromiseLike<CountResponse>;
        create(params: CreateDocumentParams): PromiseLike<CreateDocumentResponse>;
        create(params: CreateDocumentParams, callback: (err: any, response: CreateDocumentResponse, status: any) => void): void;
        delete(params: DeleteDocumentParams): PromiseLike<DeleteDocumentResponse>;
        delete(params: DeleteDocumentParams, callback: (error: any, response: DeleteDocumentResponse) => void): void;
        deleteByQuery(params: DeleteDocumentByQueryParams): PromiseLike<DeleteDocumentByQueryResponse>;
        deleteByQuery(params: DeleteDocumentByQueryParams, callback: (error: any, response: DeleteDocumentByQueryResponse) => void): void;
        deleteScript(params: DeleteScriptParams): PromiseLike<any>;
        deleteScript(params: DeleteScriptParams, callback: (error: any, response: any) => void): void;
        deleteTemplate(params: DeleteTemplateParams): PromiseLike<any>;
        deleteTemplate(params: DeleteTemplateParams, callback: (error: any, response: any) => void): void;
        exists(params: ExistsParams): PromiseLike<any>;
        exists(params: ExistsParams, callback: (error: any, response: any, status?: any) => void): void;
        explain(params: ExplainParams): PromiseLike<ExplainResponse>;
        explain(params: ExplainParams, callback: (error: any, response: ExplainResponse) => void): void;
        fieldStats(params: FieldStatsParams): PromiseLike<FieldStatsResponse>;
        fieldStats(params: FieldStatsParams, callback: (error: any, response: FieldStatsResponse) => void): void;
        get<T>(params: GetParams, callback: (error: any, response: GetResponse<T>) => void): void;
        get<T>(params: GetParams): PromiseLike<GetResponse<T>>;
        getScript(params: GetScriptParams): PromiseLike<any>;
        getScript(params: GetScriptParams, callback: (error: any, response: any) => void): void;
        getSource(params: GetSourceParams): PromiseLike<any>;
        getSource(params: GetSourceParams, callback: (error: any, response: any) => void): void;
        getTemplate(params: GetTemplateParams): PromiseLike<any>;
        getTemplate(params: GetTemplateParams, callback: (error: any, response: any) => void): void;
        index<T>(params: IndexDocumentParams<T>): PromiseLike<any>;
        index<T>(params: IndexDocumentParams<T>, callback: (error: any, response: any) => void): void;
        info(params: InfoParams): PromiseLike<any>;
        info(params: InfoParams, callback: (error: any, response: any) => void): void;
        mget<T>(params: MGetParams, callback: (error: any, response: MGetResponse<T>) => void): void;
        mget<T>(params: MGetParams): PromiseLike<MGetResponse<T>>;
        msearch<T>(params: MSearchParams, callback: (error: any, response: MSearchResponse<T>) => void): void;
        msearch<T>(params: MSearchParams): PromiseLike<MSearchResponse<T>>;
        msearchTemplate<T>(params: MSearchTemplateParams, callback: (error: any, response: MSearchResponse<T>) => void): void;
        msearchTemplate<T>(params: MSearchTemplateParams): PromiseLike<MSearchResponse<T>>;
        mtermvectors(params: MTermVectorsParams): PromiseLike<any>;
        mtermvectors(params: MTermVectorsParams, callback: (error: any, response: any) => void): void;
        ping(params: PingParams): PromiseLike<any>;
        ping(params: PingParams, callback: (err: any, response: any, status: any) => void): void;
        putScript(params: PutScriptParams): PromiseLike<any>;
        putScript(params: PutScriptParams, callback: (err: any, response: any, status: any) => void): void;
        putTemplate(params: PutTemplateParams): PromiseLike<any>;
        putTemplate(params: PutTemplateParams, callback: (err: any, response: any, status: any) => void): void;
        reindex(params: ReindexParams): PromiseLike<ReindexResponse>;
        reindex(params: ReindexParams, callback: (error: any, response: ReindexResponse) => void): void;
        reindexRethrottle(params: ReindexRethrottleParams): PromiseLike<any>;
        reindexRethrottle(params: ReindexRethrottleParams, callback: (error: any, response: any) => void): void;
        renderSearchTemplate(params: RenderSearchTemplateParams): PromiseLike<any>;
        renderSearchTemplate(params: RenderSearchTemplateParams, callback: (error: any, response: any) => void): void;
        scroll(params: ScrollParams): PromiseLike<any>;
        scroll(params: ScrollParams, callback: (error: any, response: any) => void): void;
        search<T>(params: SearchParams): PromiseLike<SearchResponse<T>>;
        search<T>(params: SearchParams, callback: (error: any, response: SearchResponse<T>) => void): void;
        searchShards(params: SearchShardsParams): PromiseLike<SearchShardsResponse>;
        searchShards(params: SearchShardsParams, callback: (error: any, response: SearchShardsResponse) => void): void;
        searchTemplate(params: SearchTemplateParams): PromiseLike<any>;
        searchTemplate(params: SearchTemplateParams, callback: (error: any, response: any) => void): void;
        suggest(params: SuggestParams): PromiseLike<any>;
        suggest(params: SuggestParams, callback: (error: any, response: any) => void): void;
        termvectors(params: TermvectorsParams): PromiseLike<any>;
        termvectors(params: TermvectorsParams, callback: (error: any, response: any) => void): void;
        update(params: UpdateDocumentParams): PromiseLike<any>;
        update(params: UpdateDocumentParams, callback: (error: any, response: any) => void): void;
        updateByQuery(params: UpdateDocumentByQueryParams): PromiseLike<any>;
        updateByQuery(params: UpdateDocumentByQueryParams, callback: (error: any, response: any) => void): void;
    }

    export interface ConfigOptions {
        host?: any;
        hosts?: any;
        log?: any;
        apiVersion?: string;
        plugins?: any;
        sniffOnStart?: boolean;
        sniffInterval?: number;
        sniffOnConnectionFault?: boolean;
        maxRetries?: number;
        requestTimeout?: number;
        deadTimeout?: number;
        pingTimeout?: number;
        keepAlive?: boolean;
        maxSockets?: number;
        suggestCompression?: boolean;
        connectionClass?: string;
        sniffedNodesProtocol?: string;
        ssl?: Object;
        selector?: any;
        defer?: () => void;
        nodesToHostCallback?: any;
        createNodeAgent?: any;
    }

    export interface Explanation {
        value: number;
        description: string;
        details: Explanation[];
    }

    export interface GenericParams {
        requestTimeout?: number;
        maxRetries?: number;
        method?: string;
        body?: any;
        ignore?: number | number[];
        filterPath?: string | string[];
    }

    export interface ShardsResponse {
        total: number;
        successful: number;
        failed: number;
    }

    /**
     * A string of a number and a time unit.  A time unit is one of
     * [d, h, m, s, ms, micros, nanos].  eg: "30s" for 30 seconds.
     * These are incorrectly identified as `Date | number` in the docs as of 2016-11-15.
     */
    export type TimeSpan = string;

    export type NameList = string | string[] | boolean;
    export type Refresh = boolean | "true" | "false" | "wait_for" | "";
    export type VersionType = "internal" | "external" | "external_gte" | "force";
    export type ExpandWildcards = "open" | "closed" | "none" | "all";
    export type DefaultOperator = "AND" | "OR";

    export interface BulkIndexDocumentsParams extends GenericParams {
        waitForActiveShards?: string;
        refresh?: Refresh;
        routing?: string;
        timeout?: TimeSpan;
        type?: string;
        fields?: NameList;
        _source?: NameList;
        _sourceExclude?: NameList;
        _sourceInclude?: NameList;
        pipeline?: string;
        index?: string;
    }

    export interface ClearScrollParams extends GenericParams {
        scrollId: NameList;
    }

    export interface CountParams extends GenericParams {
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: ExpandWildcards;
        minScore?: number;
        preference?: string;
        routing?: string;
        q?: string;
        analyzer?: string;
        analyzeWildcard?: boolean;
        defaultOperator?: DefaultOperator;
        df?: string;
        lenient?: boolean;
        lowercaseExpandedTerms?: boolean;
        index?: NameList;
        type?: NameList;
    }

    export interface CountResponse {
        count: number;
        _shards: ShardsResponse;
    }

    export interface CreateDocumentParams extends GenericParams {
        waitForActiveShards?: string;
        parent?: string;
        refresh?: Refresh;
        timeout?: TimeSpan;
        timestamp?: Date | number;
        ttl?: TimeSpan;
        version?: number;
        versionType?: VersionType;
        pipeline?: string;
        id: string;
        index: string;
        type: string;
    }

    export interface CreateDocumentResponse {
        _shards: ShardsResponse;
        _index: string;
        _type: string;
        _id: string;
        _version: number;
        created: boolean;
        result: string;
    }

    export interface DeleteDocumentParams extends GenericParams {
        waitForActiveShards?: string;
        parent?: string;
        refresh?: Refresh;
        routing?: string;
        timeout?: TimeSpan;
        version?: number;
        versionType?: VersionType;
        index: string;
        type: string;
        id: string;
    }

    export interface DeleteDocumentResponse {
        _shards: ShardsResponse;
        found: boolean;
        _index: string;
        _type: string;
        _id: string;
        _version: number;
        result: string;
    }

    export interface DeleteDocumentByQueryParams extends GenericParams {
        waitForActiveShards?: string;
        parent?: string;
        refresh?: Refresh;
        routing?: string;
        timeout?: TimeSpan;
        version?: number;
        versionType?: VersionType;
        index: string;
        type: string;
        id: string;
    }

    export interface DeleteDocumentByQueryResponse {
        took: number;
        timed_out: boolean;
        deleted: number;
        batches: number;
        version_conflicts: number;
        noops: number;
        retries: {
            bulk: number;
            search: number;
        };
        throttled_millis: number;
        requests_per_second: number;
        throttled_until_millis: number;
        total: number;
        failures: any[];
    }

    export interface DeleteScriptParams extends GenericParams {
        id: string;
        lang: string;
    }

    export interface DeleteTemplateParams extends GenericParams {
        id: string;
    }

    export interface ExistsParams extends GenericParams {
        parent?: string;
        preference?: string;
        realtime?: boolean;
        refresh?: boolean;
        routing?: string;
        id: string;
        index: string;
        type: string;
    }

    export interface ExplainParams extends GenericParams {
        analyzeWildcard?: boolean;
        analyzer?: string;
        defaultOperator?: DefaultOperator;
        df?: string;
        storedFields?: NameList;
        lenient?: boolean;
        lowercaseExpandedTerms?: boolean;
        parent?: string;
        preference?: string;
        q?: string;
        routing?: string;
        _source?: NameList;
        _sourceExclude?: NameList;
        _sourceInclude?: NameList;
        id?: string;
        index?: string;
        type?: string;
    }

    export interface ExplainResponse {
        _index: string;
        _type: string;
        _id: string;
        matched: boolean;
        explanation: ExplainResponseDetails;
    }

    export interface ExplainResponseDetails {
        value: number;
        description: string;
        details: ExplainResponseDetails[];
    }

    export interface FieldStatsParams extends GenericParams {
        fields?: NameList;
        level?: "indices" | "cluster";
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: ExpandWildcards;
        index?: NameList;
    }

    export interface FieldStatsResponse {
        _shards: ShardsResponse;
        indices: { [indexName: string]: FieldStatsResponseIndex };
        conflicts?: { [fieldName: string]: string };
    }

    export interface FieldStatsResponseIndex {
        fields: { [fieldName: string]: FieldStatsResponseField };
    }

    export interface FieldStatsResponseField {
        max_doc: number;
        doc_count: number;
        density: number;
        sum_doc_freq: number;
        sum_total_term_freq: number;
        min_value: any;
        max_value: any;
        is_searchable: string;
        is_aggregatable: string;
    }

    export interface GetParams extends GenericParams {
        storedFields?: NameList;
        parent?: string;
        preference?: string;
        realtime?: boolean;
        refresh?: boolean;
        routing?: string;
        _source?: NameList;
        _sourceExclude?: NameList;
        _sourceInclude?: NameList;
        version?: number;
        versionType?: VersionType;
        id: string;
        index: string;
        type: string;
    }

    export interface GetResponse<T> {
        _index: string;
        _type: string;
        _id: string;
        _version: number;
        found: boolean;
        _source: T;
    }

    export interface GetScriptParams extends GenericParams {
        id: string;
        lang: string;
    }

    export interface GetSourceParams extends GenericParams {
        preference?: string;
        realtime?: boolean;
        refresh?: boolean;
        routing?: string;
        _source: NameList;
        _sourceExclude?: NameList;
        _sourceInclude?: NameList;
        version?: number;
        versionType?: VersionType;
        id: string;
        index: string;
        type: string;
    }

    export interface GetTemplateParams extends GenericParams {
        id: string;
    }

    export interface IndexDocumentParams<T> extends GenericParams {
        waitForActiveShards?: string;
        opType?: "index" | "create";
        parent?: string;
        refresh?: string;
        routing?: string;
        timeout?: TimeSpan;
        timestamp?: Date | number;
        ttl?: TimeSpan;
        version?: number;
        versionType?: VersionType;
        pipeline?: string;
        id?: string;
        index: string;
        type: string;
        body: T;
    }

    export interface InfoParams extends GenericParams {
    }

    export interface MGetParams extends GenericParams {
        storedFields?: NameList;
        preference?: string;
        realtime?: Boolean;
        refresh?: Boolean;
        source?: NameList;
        _sourceExclude?: NameList;
        _sourceInclude?: NameList;
        index?: string;
        type?: string;
    }

    export interface MGetResponse<T> {
        docs?: GetResponse<T>[];
    }

    export interface MSearchParams extends GenericParams {
        search_type?: "query_then_fetch" | "query_and_fetch" | "dfs_query_then_fetch" | "dfs_query_and_fetch";
        maxConcurrentSearches?: number;
        index?: NameList;
        type?: NameList;
    }

    export interface MSearchResponse<T> {
        responses?: SearchResponse<T>[];
    }

    export interface MSearchTemplateParams extends GenericParams {
        search_type?: "query_then_fetch" | "query_and_fetch" | "dfs_query_then_fetch" | "dfs_query_and_fetch";
        index?: NameList;
        type?: NameList;
    }

    export interface MTermVectorsParams extends GenericParams {
        ids?: NameList;
        termStatistics?: boolean;
        fieldStatistics?: boolean;
        fields?: NameList;
        offsets?: boolean;
        positions?: boolean;
        payloads?: boolean;
        preference?: string;
        routing?: string;
        parent?: string;
        realtime?: boolean;
        version?: number;
        versionType?: VersionType;
        index: string;
        type: string;
    }

    export interface PingParams extends GenericParams {
    }

    export interface PutScriptParams extends GenericParams {
        id: string;
        lang: string;
        body: any;
    }

    export interface PutTemplateParams extends GenericParams {
        id: string;
        body: any;
    }

    export interface ReindexParams extends GenericParams {
        refresh?: boolean;
        timeout?: TimeSpan;
        waitForActiveShards?: string;
        waitForCompletion?: boolean;
        requestsPerSecond?: number;
        body: {
            conflicts?: string;
            source: {
                index: string | string[];
                type?: string | string[];
                query?: any;
                sort?: any;
                size?: number;
                remote?: {
                    host: string;
                    username?: string;
                    password?: string;
                }
            };
            dest: {
                index: string;
                version_type?: string;
                op_type?: string;
                routing?: string;
                pipeline?: string;
            };
            script?: {
                inline: string;
                lang: string;
            }
        }
    }

    export interface ReindexResponse {
        took: number;
        updated: number;
        created: number;
        batches: number;
        version_conflicts: number;
        retries: {
            bulk: number;
            search: number;
        }
        throttled_millis: number;
        failures: any[];
    }

    export interface ReindexRethrottleParams extends GenericParams {
        requestsPerSecond: number;
        taskId: string;
    }

    export interface RenderSearchTemplateParams extends GenericParams {
        id: string;
    }

    export interface ScrollParams extends GenericParams {
        scroll: TimeSpan;
        scrollId: string;
    }

    export interface SearchParams extends GenericParams {
        analyzer?: string;
        analyzeWildcard?: boolean;
        defaultOperator?: DefaultOperator;
        df?: string;
        explain?: boolean;
        storedFields?: NameList;
        docvalueFields?: NameList;
        fielddataFields?: NameList;
        from?: number;
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: ExpandWildcards;
        lenient?: boolean;
        lowercaseExpandedTerms?: boolean;
        preference?: string;
        q?: string;
        routing?: NameList;
        scroll?: TimeSpan;
        searchType?: "query_then_fetch" | "dfs_query_then_fetch";
        size?: number;
        sort?: NameList;
        _source?: NameList;
        _sourceExclude?: NameList;
        _sourceInclude?: NameList;
        terminateAfter?: number;
        stats?: NameList;
        suggestField?: string;
        suggestMode?: "missing" | "popular" | "always";
        suggestSize?: number;
        suggestText?: string;
        timeout?: TimeSpan;
        trackScores?: boolean;
        version?: boolean;
        requestCache?: boolean;
        index?: NameList;
        type?: NameList;
    }

    export interface SearchResponse<T> {
        took: number;
        timed_out: boolean;
        _scroll_id?: string;
<<<<<<< 8c65c84d30d181c36ffd00c77f85181e5350ef61
        _shards: ShardsResponse;
=======
        _shards: {
            total: number;
            successful: number;
            failed: number;
        };
>>>>>>> WIP
        hits: {
            total: number;
            max_score: number;
            hits: {
                _index: string;
                _type: string;
                _id: string;
                _score: number;
                _source: T;
                _version: number;
                _explanation?: Explanation;
                fields?: any;
                highlight?: any;
                inner_hits?: any;
<<<<<<< 8c65c84d30d181c36ffd00c77f85181e5350ef61
            }[];
        };
        aggregations?: any;
=======
            }[]
        };
        aggregations?: any;
    }

    export interface MSearchParams extends GenericParams {
        index?: string | string[] | Boolean;
        type?: string | string[] | Boolean;
        search_type?: string;
>>>>>>> WIP
    }

    export interface SearchShardsParams extends GenericParams {
        preference?: string;
        routing?: string;
        local?: boolean;
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: ExpandWildcards;
        index: NameList;
        type: NameList;
    }

    export interface SearchShardsResponse {
        nodes: any;
        shards: SearchShardsResponseShard[][];
    }

    export interface SearchShardsResponseShard {
        index: string;
        node: string;
        primary: boolean;
        share: number;
        state: string;
        allocation_id: {
            id: string;
        };
        relocating_node: any;
    }

    export interface SearchTemplateParams extends GenericParams {
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: ExpandWildcards;
        preference?: string;
        routing?: NameList;
        scroll?: TimeSpan;
        searchType?: "query_then_fetch" | "query_and_fetch" | "dfs_query_then_fetch" | "dfs_query_and_fetch";
        index: NameList;
        type: NameList;
    }

    export interface SuggestParams extends GenericParams {
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: ExpandWildcards;
        preference?: string;
        routing?: string;
        index: NameList;
    }

    export interface TermvectorsParams extends GenericParams {
        termStatistics?: boolean;
        fieldStatistics?: boolean;
        fields?: NameList;
        offsets?: boolean;
        positions?: boolean;
        payloads?: boolean;
        preference?: string;
        routing?: string;
        parent?: string;
        realtime?: boolean;
        version?: number;
        versionType?: VersionType;
        index: string;
        type: string;
        id?: string;
    }

    export interface UpdateDocumentParams extends GenericParams {
        waitForActiveShards?: string;
        fields?: NameList;
        _source?: NameList;
        _sourceExclude?: NameList;
        _sourceInclude?: NameList;
        lang?: string;
        parent?: string;
        refresh?: Refresh;
        retryOnConflict?: number;
        routing?: string;
        timeout?: TimeSpan;
        timestamp?: Date | number;
        ttl?: TimeSpan;
        version?: number;
        versionType?: "internal" | "force";
        id: string;
        index: string;
        type: string;
<<<<<<< 8c65c84d30d181c36ffd00c77f85181e5350ef61
=======
        id: string;
        body?: string | any;
        version?: Number;
        timesstamp?: Date | Number;
        scriptedUpsert?: Boolean;
        scriptId?: any;
        script?: any;
        routing?: string;
        retryOnConflict?: Number;
        refresh?: Boolean;
        parent?: string;
        lang?: string;
        fields?: string | string[] | Boolean;
        consistensy?: string;
>>>>>>> WIP
    }

    export interface UpdateDocumentByQueryParams extends GenericParams {
        analyzer?: string;
        analyzeWildcard?: boolean;
        defaultOperator?: DefaultOperator;
        df?: string;
        explain?: boolean;
        storedFields?: NameList;
        docvalueFields?: NameList;
        fielddataFields?: NameList;
        from?: number;
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        conflicts?: "abort" | "proceed";
        expandWildcards?: ExpandWildcards;
        lenient?: boolean;
        lowercaseExpandedTerms?: boolean;
        pipeline?: string;
        preference?: string;
        q?: string;
        routing?: NameList;
        scroll?: TimeSpan;
        searchType?: "query_then_fetch" | "dfs_query_then_fetch";
        searchTimeout?: TimeSpan;
        size?: number;
        sort?: NameList;
        _source?: NameList;
        _sourceExclude?: NameList;
        _sourceInclude?: NameList;
        terminateAfter?: number;
        stats?: NameList;
        suggestField?: string;
        suggestMode?: "missing" | "popular" | "always";
        suggestSize?: number;
        suggestText?: string;
        timeout?: TimeSpan;
        trackScores?: boolean;
        version?: boolean;
        versionType?: boolean;
        requestCache?: boolean;
        refresh?: boolean;
        waitForActiveShards?: string;
        scrollSize?: number;
        waitForCompletion?: boolean;
        requestsPerSecond?: number;
        index: NameList;
        type: NameList;
    }

    export interface Cat {
<<<<<<< 8c65c84d30d181c36ffd00c77f85181e5350ef61
        aliases(params: CatAliasesParams, callback: (error: any, response: any) => void): void;
        aliases(params: CatAliasesParams): PromiseLike<any>;
        allocation(params: CatAllocationParams, callback: (error: any, response: any) => void): void;
        allocation(params: CatAllocationParams): PromiseLike<any>;
        count(params: CatCountParams, callback: (error: any, response: any) => void): void;
        count(params: CatAllocationParams): PromiseLike<any>;
        fielddata(params: CatFielddataParams, callback: (error: any, response: any) => void): void;
        fielddata(params: CatFielddataParams): PromiseLike<any>;
        health(params: CatHealthParams, callback: (error: any, response: any) => void): void;
        health(params: CatHealthParams): PromiseLike<any>;
        help(params: CatHelpParams, callback: (error: any, response: any) => void): void;
        help(params: CatHelpParams): PromiseLike<any>;
        indices(params: CatIndicesParams, callback: (error: any, response: any) => void): void;
        indices(params: CatIndicesParams): PromiseLike<any>;
        master(params: CatCommonParams, callback: (error: any, response: any) => void): void;
        master(params: CatCommonParams): PromiseLike<any>;
        nodeattrs(params: CatCommonParams, callback: (error: any, response: any) => void): void;
        nodeattrs(params: CatCommonParams): PromiseLike<any>;
        nodes(params: CatCommonParams, callback: (error: any, response: any) => void): void;
        nodes(params: CatCommonParams): PromiseLike<any>;
        pendingTasks(params: CatCommonParams, callback: (error: any, response: any) => void): void;
        pendingTasks(params: CatCommonParams): PromiseLike<any>;
        plugins(params: CatCommonParams, callback: (error: any, response: any) => void): void;
        plugins(params: CatCommonParams): PromiseLike<any>;
        recovery(params: CatRecoveryParams, callback: (error: any, response: any) => void): void;
        recovery(params: CatRecoveryParams): PromiseLike<any>;
        repositories(params: CatCommonParams, callback: (error: any, response: any) => void): void;
        repositories(params: CatCommonParams): PromiseLike<any>;
        segments(params: CatSegmentsParams, callback: (error: any, response: any) => void): void;
        segments(params: CatSegmentsParams): PromiseLike<any>;
        shards(params: CatShardsParams, callback: (error: any, response: any) => void): void;
        shards(params: CatShardsParams): PromiseLike<any>;
        snapshots(params: CatSnapshotsParams, callback: (error: any, response: any) => void): void;
        snapshots(params: CatSnapshotsParams): PromiseLike<any>;
        tasks(params: CatTasksParams, callback: (error: any, response: any) => void): void;
        tasks(params: CatTasksParams): PromiseLike<any>;
        threadPool(params: CatThreadPoolParams, callback: (error: any, response: any) => void): void;
        threadPool(params: CatThreadPoolParams): PromiseLike<any>;
=======
        health(params: CatHealthOptions, callback: (error: any, response: any) => void): void;
        health(params: CatHealthOptions): PromiseLike<any>;
>>>>>>> WIP
    }

    export type CatBytes = "b" | "k" | "kb" | "m" | "mb" | "g" | "gb" | "t" | "tb" | "p" | "pb";

    export interface CatCommonParams extends GenericParams {
        format: string;
        local?: boolean;
        masterTimeout?: TimeSpan;
        h?: NameList;
        help?: boolean;
        v?: boolean;
    }

    export interface CatAliasesParams extends CatCommonParams {
        name?: NameList;
    }

    export interface CatAllocationParams extends CatCommonParams {
        bytes?: CatBytes;
        nodeId?: NameList;
    }

    export interface CatCountParams extends CatCommonParams {
        index?: NameList;
    }

    export interface CatFielddataParams extends CatCommonParams {
        bytes?: CatBytes;
        fields?: NameList;
    }

    export interface CatHealthParams extends CatCommonParams {
        ts?: boolean;
    }

    export interface CatHelpParams extends GenericParams {
        help?: boolean;
    }

    export interface CatIndicesParams extends CatCommonParams {
        bytes?: CatBytes;
        health?: "green" | "yellow" | "red";
        pri?: boolean;
        index?: NameList;
    }

    export interface CatRecoveryParams extends GenericParams {
        format: string;
        bytes?: CatBytes;
        masterTimeout?: TimeSpan;
        h?: NameList;
        help?: boolean;
        v?: boolean;
    }

    export interface CatSegmentsParams extends GenericParams {
        format: string;
        h?: NameList;
        help?: boolean;
        v?: boolean;
        index?: NameList;
    }

    export interface CatShardsParams extends CatCommonParams {
        index?: NameList;
    }

    export interface CatSnapshotsParams extends GenericParams {
        format: string;
        ignoreUnavailable?: boolean;
        masterTimeout?: TimeSpan;
        h?: NameList;
        help?: boolean;
        v?: boolean;
        repository?: NameList;
    }

    export interface CatTasksParams extends GenericParams {
        format: string;
        nodeId?: NameList;
        actions?: NameList;
        detailed?: boolean;
        parentNode?: string;
        parentTask?: number;
        h?: NameList;
        help?: boolean;
        v?: boolean;
    }

    export interface CatThreadPoolParams extends CatCommonParams {
        size?: "" | "k" | "m" | "g" | "t" | "p";
        threadPoolPatterns?: NameList;
    }

    export interface Cluster {
        allocationExplain(params: ClusterAllocationExplainParams, callback: (error: any, response: any) => void): void;
        allocationExplain(params: ClusterAllocationExplainParams): PromiseLike<any>;
        getSettings(params: ClusterGetSettingsParams, callback: (error: any, response: any) => void): void;
        getSettings(params: ClusterGetSettingsParams): PromiseLike<any>;
        health(params: ClusterHealthParams, callback: (error: any, response: any) => void): void;
        health(params: ClusterHealthParams): PromiseLike<any>;
        pendingTasks(params: ClusterPendingTasksParams, callback: (error: any, response: any) => void): void;
        pendingTasks(params: ClusterPendingTasksParams): PromiseLike<any>;
        putSettings(params: ClusterPutSettingsParams, callback: (error: any, response: any) => void): void;
        putSettings(params: ClusterPutSettingsParams): PromiseLike<any>;
        reroute(params: ClusterRerouteParams, callback: (error: any, response: any) => void): void;
        reroute(params: ClusterRerouteParams): PromiseLike<any>;
        state(params: ClusterStateParams, callback: (error: any, response: any) => void): void;
        state(params: ClusterStateParams): PromiseLike<any>;
        stats(params: ClusterStatsParams, callback: (error: any, response: any) => void): void;
        stats(params: ClusterStatsParams): PromiseLike<any>;
    }

    export interface ClusterAllocationExplainParams extends GenericParams {
        includeYesDecisions?: boolean;
        includeDiskInfo?: boolean;
    }

    export interface ClusterGetSettingsParams extends GenericParams {
        flatSettings?: boolean;
        masterTimeout?: TimeSpan;
        timeout?: TimeSpan;
        includeDefaults?: boolean;
    }

    export interface ClusterHealthParams extends GenericParams {
        level?: "cluster" | "indices" | "shards";
        local?: boolean;
        masterTimeout?: TimeSpan;
        waitForActiveShards?: string;
        waitForNodes?: string;
        waitForEvents?: "immediate" | "urgent" | "high" | "normal" | "low" | "languid";
        waitForRelocatingShards?: boolean;
        waitForStatus?: "green" | "yellow" | "red";
        index?: NameList;
    }

    export interface ClusterPendingTasksParams extends GenericParams {
        local?: boolean;
        masterTimeout?: TimeSpan;
    }

    export interface ClusterPutSettingsParams extends GenericParams {
        flatSettings?: boolean;
        masterTimeout?: TimeSpan;
        timeout?: TimeSpan;
    }

    export interface ClusterRerouteParams extends GenericParams {
        dryRun?: boolean;
        explain?: boolean;
        retryFailed?: boolean;
        metric?: NameList;
        masterTimeout?: TimeSpan;
        timeout?: TimeSpan;
    }

    export interface ClusterStateParams extends GenericParams {
        local?: boolean;
        masterTimeout?: TimeSpan;
        flatSettings?: boolean;
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: ExpandWildcards;
        index?: NameList;
        metric?: NameList;
    }

    export interface ClusterStatsParams extends GenericParams {
        flatSettings?: boolean;
        human?: boolean;
        timeout?: TimeSpan;
        nodeId?: NameList;
    }

    export class Indices {
        analyze(params: IndicesAnalyzeParams, callback: (error: any, response: any, status: any) => void): void;
        analyze(params: IndicesAnalyzeParams): PromiseLike<any>;
        clearCache(params: IndicesClearCacheParams, callback: (error: any, response: any, status: any) => void): void;
        clearCache(params: IndicesClearCacheParams): PromiseLike<any>;
        close(params: IndicesCloseParams, callback: (error: any, response: any, status: any) => void): void;
        close(params: IndicesCloseParams): PromiseLike<any>;
        create(params: IndicesCreateParams, callback: (error: any, response: any, status: any) => void): void;
        create(params: IndicesCreateParams): PromiseLike<any>;
        delete(params: IndicesDeleteParams, callback: (error: any, response: any, status: any) => void): void;
        delete(params: IndicesDeleteParams): PromiseLike<any>;
        deleteAlias(params: IndicesDeleteAliasParams, callback: (error: any, response: any, status: any) => void): void;
        deleteAlias(params: IndicesDeleteAliasParams): PromiseLike<any>;
        deleteTemplate(params: IndicesDeleteTemplateParams, callback: (error: any, response: any, status: any) => void): void;
        deleteTemplate(params: IndicesDeleteTemplateParams): PromiseLike<any>;
        exists(params: IndicesExistsParams, callback: (error: any, response: any, status: any) => void): void;
        exists(params: IndicesExistsParams): PromiseLike<any>;
        existsAlias(params: IndicesExistsAliasParams, callback: (error: any, response: any, status: any) => void): void;
        existsAlias(params: IndicesExistsAliasParams): PromiseLike<any>;
        existsTemplate(params: IndicesExistsTemplateParams, callback: (error: any, response: any, status: any) => void): void;
        existsTemplate(params: IndicesExistsTemplateParams): PromiseLike<any>;
        existsType(params: IndicesExistsTypeParams, callback: (error: any, response: any, status: any) => void): void;
        existsType(params: IndicesExistsTypeParams): PromiseLike<any>;
        flush(params: IndicesFlushParams, callback: (error: any, response: any, status: any) => void): void;
        flush(params: IndicesFlushParams): PromiseLike<any>;
        flushSynced(params: IndicesFlushSyncedParams, callback: (error: any, response: any, status: any) => void): void;
        flushSynced(params: IndicesFlushSyncedParams): PromiseLike<any>;
        forcemerge(params: IndicesForcemergeParams, callback: (error: any, response: any, status: any) => void): void;
        forcemerge(params: IndicesForcemergeParams): PromiseLike<any>;
        get(params: IndicesGetParams, callback: (error: any, response: any, status: any) => void): void;
        get(params: IndicesGetParams): PromiseLike<any>;
        getAlias(params: IndicesGetAliasParams, callback: (error: any, response: any, status: any) => void): void;
        getAlias(params: IndicesGetAliasParams): PromiseLike<any>;
        getFieldMapping(params: IndicesGetFieldMappingParams, callback: (error: any, response: any, status: any) => void): void;
        getFieldMapping(params: IndicesGetFieldMappingParams): PromiseLike<any>;
        getMapping(params: IndicesGetMappingParams, callback: (error: any, response: any, status: any) => void): void;
        getMapping(params: IndicesGetMappingParams): PromiseLike<any>;
        getSettings(params: IndicesGetSettingsParams, callback: (error: any, response: any, status: any) => void): void;
        getSettings(params: IndicesGetSettingsParams): PromiseLike<any>;
        getTemplate(params: IndicesGetTemplateParams, callback: (error: any, response: any, status: any) => void): void;
        getTemplate(params: IndicesGetTemplateParams): PromiseLike<any>;
        getUpgrade(params: IndicesGetUpgradeParams, callback: (error: any, response: any, status: any) => void): void;
        getUpgrade(params: IndicesGetUpgradeParams): PromiseLike<any>;
        open(params: IndicesOpenParams, callback: (error: any, response: any, status: any) => void): void;
        open(params: IndicesOpenParams): PromiseLike<any>;
        putAlias(params: IndicesPutAliasParams, callback: (error: any, response: any, status: any) => void): void;
        putAlias(params: IndicesPutAliasParams): PromiseLike<any>;
        putMapping(params: IndicesPutMappingParams, callback: (error: any, response: any, status: any) => void): void;
        putMapping(params: IndicesPutMappingParams): PromiseLike<any>;
        putSettings(params: IndicesPutSettingsParams, callback: (error: any, response: any, status: any) => void): void;
        putSettings(params: IndicesPutSettingsParams): PromiseLike<any>;
        putTemplate(params: IndicesPutTemplateParams, callback: (error: any, response: any) => void): void;
        putTemplate(params: IndicesPutTemplateParams): PromiseLike<any>;
        recovery(params: IndicesRecoveryParams, callback: (error: any, response: any) => void): void;
        recovery(params: IndicesRecoveryParams): PromiseLike<any>;
        refresh(params: IndicesRefreshParams, callback: (error: any, response: any) => void): void;
        refresh(params: IndicesRefreshParams): PromiseLike<any>;
        rollover(params: IndicesRolloverParams, callback: (error: any, response: IndicesRolloverResponse) => void): void;
        rollover(params: IndicesRolloverParams): PromiseLike<IndicesRolloverResponse>;
        segments(params: IndicesSegmentsParams, callback: (error: any, response: any) => void): void;
        segments(params: IndicesSegmentsParams): PromiseLike<any>;
        shardStores(params: IndicesShardStoresParams, callback: (error: any, response: any) => void): void;
        shardStores(params: IndicesShardStoresParams): PromiseLike<any>;
        shrink(params: IndicesShrinkParams, callback: (error: any, response: any) => void): void;
        shrink(params: IndicesShrinkParams): PromiseLike<any>;
        stats(params: IndicesStatsParams, callback: (error: any, response: any) => void): void;
        stats(params: IndicesStatsParams): PromiseLike<any>;
        updateAliases(params: IndicesUpdateAliasesParams, callback: (error: any, response: any) => void): void;
        updateAliases(params: IndicesUpdateAliasesParams): PromiseLike<any>;
        upgrade(params: IndicesUpgradeParams, callback: (error: any, response: any) => void): void;
        upgrade(params: IndicesUpgradeParams): PromiseLike<any>;
        validateQuery(params: IndicesValidateQueryParams, callback: (error: any, response: any) => void): void;
        validateQuery(params: IndicesValidateQueryParams): PromiseLike<any>;
    }

    export interface IndicesAnalyzeParams extends GenericParams {
        analyzer?: string;
        charFilter?: NameList;
        field?: string;
        filter?: NameList;
        index?: string;
        perferLocal?: boolean;
        text?: NameList;
        tokenizer?: string;
        explain?: boolean;
        attributes?: NameList;
        format?: ""
    }

    export interface IndicesClearCacheParams extends GenericParams {
        fieldData?: boolean;
        fielddata?: boolean;    // yes the docs really have both
        fields?: NameList;
        query?: boolean;
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: ExpandWildcards;
        index?: NameList;
        recycler?: boolean;
        request?: boolean;
    }

    export interface IndicesCloseParams extends GenericParams {
        timeout?: TimeSpan;
        masterTimeout?: TimeSpan;
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: ExpandWildcards;
        index: NameList;
    }

    export interface IndicesCreateParams extends GenericParams {
        waitForActiveShards?: string;
        timeout?: TimeSpan;
        masterTimeout?: TimeSpan;
        updateAllTypes?: boolean;
        index: string;
    }

    export interface IndicesDeleteParams extends GenericParams {
        timeout?: TimeSpan;
        masterTimeout?: TimeSpan;
        index: NameList;
    }

    export interface IndicesDeleteAliasParams extends GenericParams {
        timeout?: TimeSpan;
        masterTimeout?: TimeSpan;
        index: NameList;
        name: NameList;
    }

    export interface IndicesDeleteTemplateParams extends GenericParams {
        timeout?: TimeSpan;
        masterTimeout?: TimeSpan;
        name: string;
    }

    export interface IndicesExistsParams extends GenericParams {
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: ExpandWildcards;
        local?: boolean;
        index: NameList;
    }

    export interface IndicesExistsAliasParams extends IndicesExistsParams {
        name: NameList;
    }

    export interface IndicesExistsTemplateParams extends GenericParams {
        timeout?: TimeSpan;
        masterTimeout?: TimeSpan;
        name: NameList;
    }

    export interface IndicesExistsTypeParams extends IndicesExistsParams {
        type: NameList;
    }

    export interface IndicesFlushParams extends GenericParams {
        force?: boolean;
        waitIfOngoing?: boolean;
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: ExpandWildcards;
        index: NameList;
    }

    export interface IndicesFlushSyncedParams extends GenericParams {
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: ExpandWildcards;
        index: NameList;
    }

    export interface IndicesForcemergeParams extends GenericParams {
        flush?: boolean;
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: ExpandWildcards;
        maxNumSegments?: number;
        onlyExpungeDeletes?: boolean;
        operationThreading?: any;   // even the docs don't know what this does
        waitForMerge?: boolean;
        index: NameList;
    }

    export interface IndicesGetParams extends GenericParams {
        local?: boolean;
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: ExpandWildcards;
        flatSettings?: boolean;
        human?: boolean;
        includeDefaults?: boolean;
        index?: NameList;
        feature?: NameList;
    }

    export interface IndicesGetAliasParams extends GenericParams {
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: ExpandWildcards;
        local?: boolean;
        index?: NameList;
        name?: NameList;
    }

    export interface IndicesGetFieldMappingParams extends GenericParams {
        includeDefaults?: boolean;
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: ExpandWildcards;
        local?: boolean;
        index?: NameList;
        type?: NameList;
        fields?: NameList;
    }

    export interface IndicesGetMappingParams extends GenericParams {
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: ExpandWildcards;
        local?: boolean;
        index?: NameList;
        type?: NameList;
    }

    export interface IndicesGetSettingsParams extends GenericParams {
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: ExpandWildcards;
        flatSettings?: boolean;
        local?: boolean;
        human?: boolean;
        includeDefaults?: boolean;
        index?: NameList;
        name?: NameList;
    }

    export interface IndicesGetTemplateParams extends GenericParams {
        flatSettings?: boolean;
        masterTimeout?: TimeSpan;
        local?: boolean;
        name?: NameList;
    }

    export interface IndicesGetUpgradeParams extends GenericParams {
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: ExpandWildcards;
        human?: boolean;
        index?: NameList;
    }

    export interface IndicesOpenParams extends GenericParams {
        timeout?: TimeSpan;
        masterTimeout?: TimeSpan;
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: ExpandWildcards;
        index?: NameList;
    }

    export interface IndicesPutAliasParams extends GenericParams {
        timeout?: TimeSpan;
        masterTimeout?: TimeSpan;
        index?: NameList;
        name: NameList;
    }

    export interface IndicesPutMappingParams extends GenericParams {
        timeout?: TimeSpan;
        masterTimeout?: TimeSpan;
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: ExpandWildcards;
        updateAllTypes?: boolean;
        index: NameList;
        type: string;
        body: any;
    }

    export interface IndicesPutSettingsParams extends GenericParams {
        masterTimeout?: TimeSpan;
        preserveExisting?: boolean;
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: ExpandWildcards;
        flatSettings?: boolean;
        index: NameList;
        body: any;
    }

    export interface IndicesPutTemplateParams extends GenericParams {
        order?: number;
        create?: boolean;
        timeout?: TimeSpan;
        masterTimeout?: TimeSpan;
        flatSettings?: boolean;
        name: string;
        body: any;
    }

    export interface IndicesRecoveryParams extends GenericParams {
        detailed?: boolean;
        activeOnly?: boolean;
        human?: boolean;
        index: NameList;
    }

    export interface IndicesRefreshParams extends GenericParams {
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: ExpandWildcards;
        force?: boolean;
        operationThreading?: any;   // even the docs don't know what this does
        index: NameList;
    }

    export interface IndicesRolloverParams extends GenericParams {
        timeout?: TimeSpan;
        masterTimeout?: TimeSpan;
        waitForActiveShards?: number | string;
        alias?: string;
        newIndex?: string;
    }

    export interface IndicesRolloverResponse {
        acknowledged: boolean;
        shards_acknowledged: boolean;
        old_index: string;
        new_index: string;
        rolled_over: boolean;
        dry_run: boolean;
        conditions: { [condition: string]: boolean };
    }

    export interface IndicesSegmentsParams extends GenericParams {
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: ExpandWildcards;
        human?: boolean;
        operationThreading?: any;   // even the docs don't know what this does
        verbose?: boolean;
        index: NameList;
    }

    export interface IndicesShardStoresParams extends GenericParams {
        status?: NameList;
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: ExpandWildcards;
        operationThreading?: any;   // even the docs don't know what this does
        index: NameList;
    }

    export interface IndicesShrinkParams extends GenericParams {
        timeout?: TimeSpan;
        masterTimeout?: TimeSpan;
        waitForActiveShards?: string | number;
        index: string;
        target: string;
    }

    export interface IndicesStatsParams extends GenericParams {
        completionFields?: NameList;
        fielddataFields?: NameList;
        fields?: NameList;
        groups?: NameList;
        human?: boolean;
        level?: "cluster" | "indices" | "shards";
        types?: NameList;
        index: NameList;
        metric?: NameList;
    }

    export interface IndicesUpdateAliasesParams extends GenericParams {
        timeout?: TimeSpan;
        masterTimeout?: TimeSpan;
        body: {
            actions: IndicesUpdateAliasesParamsAction[];
        }
    }

    export interface IndicesUpdateAliasesParamsAction {
        add?: {
            index?: string;
            indices?: string[];
            alias: string;
        };
        remove?: {
            index?: string;
            indices?: string[];
            alias: string;
        };
        remove_index?: {
            index: string;
        }
    }

    export interface IndicesUpgradeParams extends GenericParams {
        expandWildcards?: ExpandWildcards;
        ignoreUnavailable?: boolean;
        waitForCompletion?: boolean;
        onlyAncientSegments?: boolean;
        index: NameList;
    }

    export interface IndicesValidateQueryParams extends GenericParams {
        explain?: boolean;
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: ExpandWildcards;
        operationThreading?: any;   // even the docs don't know what this does
        q?: string;
        analyzer?: string;
        analyzeWildcard?: boolean;
        defaultOperator?: DefaultOperator;
        df?: string;
        lenient?: boolean;
        lowercaseExpandedTerms?: boolean;
        rewrite?: boolean;
        index: NameList;
        type?: NameList;
    }

    export class Ingest {
        deletePipeline(params: IngestDeletePipelineParams, callback: (error: any, response: any, status: any) => void): void;
        deletePipeline(params: IngestDeletePipelineParams): PromiseLike<any>;
        getPipeline(params: IngestGetPipelineParams, callback: (error: any, response: any, status: any) => void): void;
        getPipeline(params: IngestGetPipelineParams): PromiseLike<any>;
        putPipeline(params: IngestPutPipelineParams, callback: (error: any, response: any, status: any) => void): void;
        putPipeline(params: IngestPutPipelineParams): PromiseLike<any>;
        simulate(params: IngestSimulateParams, callback: (error: any, response: any, status: any) => void): void;
        simulate(params: IngestSimulateParams): PromiseLike<any>;
    }

    export interface IngestDeletePipelineParams extends GenericParams {
        masterTimeout?: number;
        timeout?: number;
        id: string;
    }

    export interface IngestGetPipelineParams extends GenericParams {
        masterTimeout?: number;
        id: string;
    }

    export interface IngestPutPipelineParams extends GenericParams {
        masterTimeout?: number;
        timeout?: number;
        id: string;
        body: any;
    }

    export interface IngestSimulateParams extends GenericParams {
        verbose?: boolean;
        id: string;
    }

    export class Nodes {
        hotThreads(params: NodesHotThreadsParams, callback: (error: any, response: any, status: any) => void): void;
        hotThreads(params: NodesHotThreadsParams): PromiseLike<any>;
        info(params: NodesInfoParams, callback: (error: any, response: any, status: any) => void): void;
        info(params: NodesInfoParams): PromiseLike<any>;
        stats(params: NodesStatsParams, callback: (error: any, response: any, status: any) => void): void;
        stats(params: NodesStatsParams): PromiseLike<any>;
    }

    export interface NodesHotThreadsParams extends GenericParams {
        interval?: TimeSpan;
        snapshots?: number;
        threads?: number;
        ignoreIdleThreads?: boolean;
        type?: "cpu" | "wait" | "blocked";
        timeout?: TimeSpan;
        nodeId: NameList;
    }

    export interface NodesInfoParams extends GenericParams {
        flatSettings?: boolean;
        human?: boolean;
        timeout?: TimeSpan;
        nodeId: NameList;
        metric?: NameList;
    }

    export interface NodesStatsParams extends GenericParams {
        completionFields?: NameList;
        fielddataFields?: NameList;
        fields?: NameList;
        groups?: boolean;
        human?: boolean;
        level?: "indices" | "node" | "shards";
        types?: NameList;
        timeout?: TimeSpan;
        metric?: NameList;
        indexMetric?: NameList;
        nodeId?: NameList;
    }

    export class Snapshot {
        create(params: SnapshotCreateParams, callback: (error: any, response: any, status: any) => void): void;
        create(params: SnapshotCreateParams): PromiseLike<any>;
        createRepository(params: SnapshotCreateRepositoryParams, callback: (error: any, response: any, status: any) => void): void;
        createRepository(params: SnapshotCreateRepositoryParams): PromiseLike<any>;
        delete(params: SnapshotDeleteParams, callback: (error: any, response: any, status: any) => void): void;
        delete(params: SnapshotDeleteParams): PromiseLike<any>;
        deleteRepository(params: SnapshotDeleteRepositoryParams, callback: (error: any, response: any, status: any) => void): void;
        deleteRepository(params: SnapshotDeleteRepositoryParams): PromiseLike<any>;
        get(params: SnapshotGetParams, callback: (error: any, response: any, status: any) => void): void;
        get(params: SnapshotGetParams): PromiseLike<any>;
        getRepository(params: SnapshotGetRepositoryParams, callback: (error: any, response: any, status: any) => void): void;
        getRepository(params: SnapshotGetRepositoryParams): PromiseLike<any>;
        restore(params: SnapshotRestoreParams, callback: (error: any, response: any, status: any) => void): void;
        restore(params: SnapshotRestoreParams): PromiseLike<any>;
        status(params: SnapshotStatusParams, callback: (error: any, response: any, status: any) => void): void;
        status(params: SnapshotStatusParams): PromiseLike<any>;
        verifyRepository(params: SnapshotVerifyRepositoryParams, callback: (error: any, response: any, status: any) => void): void;
        verifyRepository(params: SnapshotVerifyRepositoryParams): PromiseLike<any>;
    }

    export interface SnapshotCreateParams extends GenericParams {
        masterTimeout?: TimeSpan;
        waitForCompletion?: boolean;
        repository: string;
        snapshot: string;
    }

    export interface SnapshotCreateRepositoryParams extends GenericParams {
        masterTimeout?: TimeSpan;
        timeout?: TimeSpan;
        verify?: boolean;
        repository: string;
    }

    export interface SnapshotDeleteParams extends GenericParams {
        masterTimeout?: TimeSpan;
        repository: string;
        snapshot: string;
    }

    export interface SnapshotDeleteRepositoryParams extends GenericParams {
        masterTimeout?: TimeSpan;
        timeout?: TimeSpan;
        repository: string;
    }

    export interface SnapshotGetParams extends GenericParams {
        masterTimeout?: TimeSpan;
        ignoreUnavailable?: boolean;
        repository: string;
        snapshot: NameList;
    }

    export interface SnapshotGetRepositoryParams extends GenericParams {
        masterTimeout?: TimeSpan;
        local?: boolean;
        repository: NameList;
    }

    export interface SnapshotRestoreParams extends GenericParams {
        masterTimeout?: TimeSpan;
        waitForCompletion?: boolean;
        repository: string;
        snapshot: string;
    }

    export interface SnapshotStatusParams extends GenericParams {
        masterTimeout?: TimeSpan;
        ignoreUnavailable?: boolean;
        repository: string;
        snapshot: NameList;
    }

    export interface SnapshotVerifyRepositoryParams extends GenericParams {
        masterTimeout?: TimeSpan;
        timeout?: TimeSpan;
        repository: string;
    }

    export class Tasks {
        cancel(params: TasksCancelParams, callback: (error: any, response: any, status: any) => void): void;
        cancel(params: TasksCancelParams): PromiseLike<any>;
        get(params: TasksGetParams, callback: (error: any, response: any, status: any) => void): void;
        get(params: TasksGetParams): PromiseLike<any>;
        list(params: TasksListParams, callback: (error: any, response: any, status: any) => void): void;
        list(params: TasksListParams): PromiseLike<any>;
    }

    export interface TasksCancelParams extends GenericParams {
        nodeId?: NameList;
        actions?: NameList;
        parentNode?: string;
        parentTask?: string;
        taskId?: string;
    }

    export interface TasksGetParams extends GenericParams {
        waitForCompletion?: boolean;
        taskId?: string;
    }

    export interface TasksListParams extends GenericParams {
        nodeId?: NameList;
        actions?: NameList;
        detailed?: boolean;
        parentNode?: string;
        parentTask?: string;
        waitForCompletion?: boolean;
        groupBy?: "nodes" | "parents";
    }
}

declare module "elasticsearch" {
    export = Elasticsearch;
}