export interface DataStateModel {
    experiences: Array<Job>;
}

export interface Job {
    title: string;
    date: string;
    detail: string;
    image: string;
}

export const DEFAULT_DATA_STATE : DataStateModel  ={
    experiences: []
}