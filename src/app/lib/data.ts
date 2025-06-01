import { type user, workEntry } from "../lib/definitions";

import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchData() {
    try {
        const data = await sql<user[]>`SELECT id, name, value FROM playing_with_neon`;

        console.log("Data fetched successfully:", data);

        return data;

    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    } finally {
        console.log("Data fetched successfully");
    }
}

export async function addWorkEntry(startDate: string, endDate: string, hoursWorked: number, description: string) {
    try {
        const data = await sql`
            INSERT INTO work_entries (startDate, endDate, hoursWorked, description)
            VALUES (${startDate}, ${endDate}, ${hoursWorked}, ${description})
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




export async function getWorkEntries() {
    try {
        const entries = await sql`SELECT * FROM work_entries`;
        console.log("Work entries fetched successfully:", entries);
        return entries;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    } finally {
        console.log("Data fetched successfully");
    }
}




