export type user = {
    id: number;
    name: string;
    role: string;
    email: string;
    phoneNumber: string;
    location: string;
}

export type workEntry = {
    id: number;
    user_id: number;
    work_date: Date;
    description: string;
    hours_worked: number;
}
