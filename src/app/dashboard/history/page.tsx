import type { workEntry } from "../../lib/definitions";
import { getWorkEntries } from "../../lib/data";

export default async function History() {
    const result: workEntry[] = await getWorkEntries();

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden">
                <table className="min-w-full text-sm text-gray-700">
                    <thead className="bg-blue-600 text-white text-left">
                        <tr>
                            <th className="px-6 py-4">ID</th>
                            <th className="px-6 py-4">Start Date</th>
                            <th className="px-6 py-4">End Date</th>
                            <th className="px-6 py-4">Hours Worked</th>
                            <th className="px-6 py-4">Description</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Actions</th> {/* Action Column */}
                        </tr>
                    </thead>
                    <tbody>
                        {result.length > 0 ? (
                            result.map((entry, index) => (
                                <tr
                                    key={entry.id}
                                    className={index % 2 === 0 ? "bg-gray-100 hover:bg-gray-200" : "bg-gray-200 hover:bg-gray-300"}
                                >
                                    <td className="px-6 py-4">{entry.id}</td>
                                    <td className="px-6 py-4">{new Date(entry.startDate).toLocaleDateString()} </td>

                                    <td className="px-6 py-4">{new Date(entry.endDate).toLocaleDateString()}</td>
                                    <td className="px-6 py-4">{entry.hoursWorked}</td>
                                    <td className="px-6 py-4 ">{entry.description.toString()}</td>
                                    <td className="px-6 py-4">TO BE</td>
                                    <td className="px-6 py-4 space-x-2">
                                        <button

                                            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-xs"
                                        >
                                            Edit
                                        </button>
                                        <button

                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-xs"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} className="px-6 py-8 text-center text-gray-400">
                                    No work entries found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
