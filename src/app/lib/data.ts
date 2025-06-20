import { workEntry } from "../lib/definitions";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });



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

