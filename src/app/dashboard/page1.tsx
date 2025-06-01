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
                <p className="text-lg text-gray-600 mb-6">
                    Welcome to your dashboard! Here you can track your hours worked and earnings.
                </p>

                <div className="flex flex-col p-10 bg-gray-100 rounded-lg shadow-lg space-y-4">
                    <table className="min-w-full text-sm text-gray-700 outline">
                        <thead className="bg-gray-300 text-xs uppercase text-gray-800 ">
                            <tr>
                                <th className="px-6 py-4 text-left">ID</th>
                                <th className="px-6 py-4 text-left">Name</th>
                                <th className="px-6 py-4 text-left">Hours</th>
                            </tr>
                        </thead>
                        <tbody>
                            {result.map((user) => (
                                <tr key={user.id} className="border-t">
                                    <td className="px-6 py-4">{user.id}</td>
                                    <td className="px-6 py-4">{user.name}</td>
                                    <td className="px-6 py-4">{user.value}</td>
                                </tr>
                            ))}
                            {result.length === 0 && (
                                <tr>
                                    <td colSpan={3} className="px-6 py-4 text-center text-gray-400">
                                        No users found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}
