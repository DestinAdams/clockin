export type user = {
    id: number;
    name: string;
    value: number;
}

export type workEntry = {
    entry_id: number
    user_id: string;
    work_date: Date;
    description: Text;
    hours: number;
}
