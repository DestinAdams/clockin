import type { workEntry } from "../../lib/definitions";
import { getWorkEntries } from "../../lib/data";

import { getUserId } from "@/app/api/auth/getUserNameServerAction";
import { Delete, Edit } from "lucide-react";
import DeleteEntryButton from "@/app/components/deleteEntryButton";

export default async function History() {
    const user_id = await getUserId();
    const result: workEntry[] = user_id !== null ? await getWorkEntries(user_id) : [];

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden">
                <table className="min-w-full text-sm text-gray-700">
                    <thead className="bg-blue-600 text-white text-left ">
                        <tr>
                            {/* <th className="px-6 py-4"></th> */}
                            <th className="px-6 py-4">ID</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Hours Worked</th>
                            <th className="px-6 py-4">Description</th>
                            <th className="px-6 py-4">Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {result.length > 0 ? (
                            result.map((entry, index) => (
                                <tr
                                    key={entry.id}
                                    className={`group ${index % 2 === 0 ? "bg-gray-100 hover:bg-gray-300" : "bg-gray-200 hover:bg-gray-300"}`}
                                >
                                    <td className="px-6 py-4">{entry.id}</td>
                                    <td className="px-6 py-4">{new Date(entry.work_date).toLocaleDateString()}</td>
                                    <td className="px-6 py-4">{entry.hours_worked}</td>
                                    <td className="px-6 py-4">{entry.description.toString()}</td>

                                    <td className="px-6 py-4 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        <DeleteEntryButton entry_id={entry.id} />
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
