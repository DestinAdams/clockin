import { type user, workEntry } from "../lib/definitions";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });



export async function addWorkEntry(date: string, hoursWorked: number, description: string) {
    try {
        const data = await sql`
            INSERT INTO work_entries ( date, hoursWorked, description)
            VALUES (${date}, ${hoursWorked}, ${description})
        `;

        console.log("Work entry added successfully:", data);
        return data;
    } catch (error) {
        console.error("Error adding work entry:", error);
        throw error;
    } finally {
        console.log("Work entry operation completed");
    }
}

export async function getWorkEntries(userId: string) {
    try {
        const entries = await sql<workEntry[]>`SELECT entry_id, work_date, description, hours FROM work_entries WHERE user_id = ${userId}`;

        console.log("Work entries fetched successfully:", entries);
        return entries;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    } finally {
        console.log("Data fetched successfully");
    }
}





