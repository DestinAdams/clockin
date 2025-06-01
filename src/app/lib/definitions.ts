export type user = {
    id: number;
    name: string;
    value: number;
}

export type workEntry = {
    id: number;
    startDate: Date
    endDate: Date;
    hoursWorked: number;
    description: Text;
}