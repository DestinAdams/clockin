import { timeSheet, user, workEntry } from "../lib/definitions";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });


//CREATORS-ADDERS
export async function addWorkEntry(user_id: number, work_date: Date, description: string, hours_worked: number) {
    try {
        const data = await sql<workEntry[]>`INSERT INTO workentries (user_id, work_date,description, hours_worked) VALUES (${user_id},${work_date},${description},${hours_worked})`;
        return data;
    } catch (error) {
        console.error("Error adding work entry:", error);
        throw error;
    } finally {
        console.log("Work entry operation completed");
    }
}
export async function addTimeSheet(user_id: number, start_date: Date, end_date: Date, status: string) {
    try {
        // 1. Get the total hours from workEntries in the date range
        const result = await sql<{ total: number }[]>`
            SELECT SUM(hours_worked) AS total
            FROM workEntries
            WHERE user_id = ${user_id}
              AND work_date >= ${start_date}
              AND work_date <= ${end_date};
        `;

        const total_hours = result[0]?.total ?? 0;
        console.log(`Total hours calculated: ${total_hours}`);
        // 2. Insert into timeSheets
        const data = await sql`
            INSERT INTO "timeSheets"(user_id, start_date, end_date, status, total_hours)
            VALUES (${user_id}, ${start_date}, ${end_date}, ${status}, ${total_hours});
        `;

        return data;
    } catch (error) {
        console.error("Error adding time sheet:", error);
        throw error;
    } finally {
        console.log("Time sheet operation completed");
    }
}

//DELETERS
export async function deleteWorkEntry(entry_id: number) {
    try {
        const result = await sql`DELETE FROM workentries WHERE id = ${entry_id}`;
        console.log(`Entry with ID ${entry_id} deleted successfully.`);
        return result;
    } catch (error) {
        console.error(`Failed to delete entry with ID ${entry_id}:`, error);
        throw error;
    } finally {
        console.log("Delete operation completed");
    }
}

//GETTERS
export async function getWorkEntries(user_id: number) {
    try {
        const entries = await sql<workEntry[]>`SELECT id, work_date, description, hours_worked FROM workEntries WHERE user_id = ${user_id}`;

        console.log("Work entries fetched successfully:", entries);
        return entries;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    } finally {
        console.log("Data fetched successfully");
    }
}

export async function getTimeSheets(user_id: number) {
    try {
        const timeSheets = await sql<timeSheet[]>`SELECT id, start_date, end_date, status, total_hours FROM "timeSheets" WHERE user_id = ${user_id}`;
        console.log("Time sheets fetched successfully:", timeSheets);
        return timeSheets;
    } catch (error) {
        console.error("Error fetching time sheets:", error);
        throw error;
    } finally {
        console.log("Time sheets fetched successfully");
    }
}

export async function getExportTimeSheet(user_id: number, start_date: Date, end_date: Date){
    try {
        const exportTimeSheets = await sql<timeSheet[]>`
            SELECT id, start_date, end_date, total_hours
            FROM "timeSheets"
            WHERE user_id = ${user_id}
              AND start_date >= ${start_date}
              AND end_date <= ${end_date};
        `;
        console.log("Export TimeSheets fetched successfully:", exportTimeSheets);
        return exportTimeSheets;

    } catch (error) {
        console.error("Error fetching time sheets:", error);
        throw error;
    } finally {
        console.log("Export TimeSheets fetched successfully");
    }
}
export async function getUserInfo(user_id: number) {
    return sql<user[]>
}


//UPDATERS
export async function updateProfile(user_id: number, email: string, phoneNumber: string, location: string) {
    try {
        const result = await sql<user[]>`UPDATE users SET email = ${email}, phoneNumber = ${phoneNumber}, location = ${location} WHERE id = ${user_id}`;
        console.log(`Profile updated successfully for user ID ${user_id}`);
        return result;
    } catch (error) {
        console.error(`Failed to update profile for user ID ${user_id}:`, error);
        throw error;
    } finally {
        console.log("Profile update operation completed");
    }
}
