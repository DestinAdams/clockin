export type user = {
    id: number;
    name: string;
    value: number;
}

export type work = {
    id: number;
    user_id: number;
    hours: number;
    startDate: Date;
    endDate: Date;
    description: string;
}