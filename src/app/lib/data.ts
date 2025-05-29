import { type user } from "../lib/definitions";
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
