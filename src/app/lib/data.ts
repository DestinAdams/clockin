// import postgres from 'postgres';

// const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });


// export default async function getTestTableRows() {
//     try {
//         const data = await sql`SELECT * FROM playing_with_neon ORDER BY id`;
//         return data;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         throw error;
//     }
// }