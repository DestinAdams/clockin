import React from "react";

export default function History() {
    return (
        <div className="min-h-screen p-6">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
                <h1 className="text-2xl font-bold text-blue-600 text-center mb-6">
                    Work History
                </h1>

                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 rounded">
                        <thead className="bg-slate-200">
                            <tr>
                                <th className="p-4 text-left text-gray-800">Week Start Date</th>
                                <th className="p-4 text-left text-gray-800">Week End Date</th>
                                <th className="p-4 text-left text-gray-800">Total Hours Worked</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td className="p-4 text-gray-700">2023-10-01</td>
                                <td className="p-4 text-gray-700">2023-10-07</td>
                                <td className="p-4 text-gray-700">40</td>
                            </tr>
                            {/* More rows can go here */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
