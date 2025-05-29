import { fetchData } from "../lib/data";
import type { user } from "../lib/definitions"; // Adjust path if needed

export default async function Dashboard() {
    const result: user[] = await fetchData();


    return (
        <div className="flex min-h-screen">
            <div className="flex-1 p-10">
                <h1 className="text-8xl font-bold text-gray-800 text-shadow-2xs text-shadow-gray-300 text-right mb-8">
                    DASHBOARD
                </h1>

                <div className="flex flex-col p-10 bg-gray-100 rounded-lg shadow-lg space-y-4">
                    {result.map((user) => (
                        <div key={user.id} className="p-4 bg-white rounded-md shadow-md flex justify-between m-9">

                            <span className="text-gray-700">{user.id}</span>
                            <span className=" text-gray-700">{user.name}</span>
                            <span className="text-gray-500">{user.value}</span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
