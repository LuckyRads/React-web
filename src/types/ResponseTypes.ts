export type StatusCode = 'SUCCESS' | 'PARTIAL_SUCCESS' | 'FAILED';

export type StatusResponse = {
    status: StatusCode;
    message: string | null;
};

export type GenericResponse<T> = StatusResponse & {
    data: T;
};
