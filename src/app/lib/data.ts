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
