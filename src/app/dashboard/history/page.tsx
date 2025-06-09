import type { workEntry } from "../../lib/definitions";
import { getWorkEntries } from "../../lib/data";

import { getUserId } from "@/app/api/auth/getUserNameServerAction";
import { Delete, Edit } from "lucide-react";

export default async function History() {
    const user = await getUserId();
    const result: workEntry[] = user?.userId ? await getWorkEntries(user.userId) : [];

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden">
                <table className="min-w-full text-sm text-gray-700">
                    <thead className="bg-blue-600 text-white text-left ">
                        <tr>
                            {/* <th className="px-6 py-4"></th> */}
                            <th className="px-6 py-4">ID</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Description</th>
                            <th className="px-6 py-4">Hours Worked</th>
                            <th className="px-6 py-4">Actions</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {result.length > 0 ? (
                            result.map((entry, index) => (
                                <tr
                                    key={entry.entry_id}
                                    className={index % 2 === 0 ? "bg-gray-100 hover:bg-gray-200" : "bg-gray-200 hover:bg-gray-300"}
                                >

                                    {/* <td className="px-6 py-4 "><input type="checkbox"></input></td> */}
                                    <td className="px-6 py-4">{entry.entry_id}</td>
                                    <td className="px-6 py-4">{new Date(entry.hours).toLocaleDateString()}</td>
                                    <td className="px-6 py-4 ">{entry.description.toString()}</td>
                                    <td className="px-6 py-4">{entry.hours}</td>

                                    <td className=" flex px-6 py-4 space-x-2 ">
                                        <Edit/><Delete/>
                                        {/* <button

                                            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-xs"
                                        >
                                            Edit
                                        </button>
                                        <button

                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-xs"
                                        >
                                            Delete
                                        </button> */}
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
