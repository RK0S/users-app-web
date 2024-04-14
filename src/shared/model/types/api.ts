interface Info {
    page: number;
    results: number;
    seed: string;
    version: string;
}

export interface ApiResponse<T> {
    info: Info;
    results: T;
}
