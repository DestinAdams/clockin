export type user = {
    id: number;
    name: string;
    role: string;
    email: string;
    phoneNumber: string;
    location: string;
}

export type workEntry = {
    id: number; // id of the work entry
    user_id: number; // user of the work entry it belongs to
    work_date: Date; // date of the work entry
    description: string; // description of the work done
    hours_worked: number; // number of hours worked in this entry
}
export type timeSheet={
    id: number; // id of the timesheet
    user_id: number; // user of the timesheet it belongs to
    start_date: Date; // start date of the timesheet
    end_date: Date; // end date of the timesheet
    status: string; // e.g., 'pending', 'approved', 'rejected'
    total_hours: number; // total hours worked in the timesheet(sum of all work entries)
    work_entries: workEntry[]; // array of work entries associated with the timesheet
}