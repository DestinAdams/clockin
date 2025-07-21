import { getUserInfo } from "@/app/api/auth/getUserNameServerAction";
import { timeSheet } from "@/app/lib/definitions";
import { getTimeSheets } from "@/app/lib/data"; // Placeholder for timesheet data fetching function
import { Download, Focus, View } from "lucide-react";

export default async function TimeSheetPage() {
    const user_id = await getUserInfo() ; // just gets the user id of the logged in user
    const result: timeSheet[] = user_id?.id !== null && user_id?.id !== undefined ? await getTimeSheets(user_id.id) : [];  // Ensure user_id.id is not null or undefined before calling getTimeSheets
    // You would typically fetch the timesheet data here based on the user_id
    // For example: const result = await getTimeSheets(user_id);
    return (
        <div className="min-h-screen bg-gray-100 p-6">

            <h1 className="text-2xl text-center p-6"><strong>Time Sheets</strong></h1>
            <div className="max-w-6xl mx-auto bg-white shadow-md rounded overflow-hidden">

                <table className="min-w-full text-sm text-gray-700">

                    <thead className="bg-blue-600 text-white text-left ">
                        <tr>
                            {/* <th className="px-6 py-4"></th> */}
                            <th className="px-6 py-4 text-center">id</th>
                            <th className="px-6 py-4 text-center">start-date</th>
                            <th className="px-6 py-4 text-center">end-date</th>
                            <th className="px-6 py-4 text-center">status</th>
                            <th className="px-6 py-4 text-center">total hours</th>
                            {/* <th className="px-6 py-4">actions</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {result.length > 0 ? (
                            result.map((entry, index) => (
                                <tr
                                    key={entry.id}
                                    className={`group ${index % 2 === 0 ? "bg-gray-100 hover:bg-gray-300" : "bg-gray-200 hover:bg-gray-300"}`}
                                    
                                >
                                    <td className="px-6 py-4 text-center">{entry.id}</td>
                                    <td className="px-6 py-4 text-center">{new Date(entry.start_date).toLocaleDateString()}</td>
                                    <td className="px-6 py-4 text-center">{new Date(entry.end_date).toLocaleDateString()}</td>
                                    <td className="px-6 py-4 text-center">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold 
      ${entry.status === "Approved"
                                                    ? "bg-green-100 text-green-800"
                                                    : entry.status === "Pending"
                                                        ? "bg-yellow-100 text-yellow-800"
                                                        : entry.status === "Rejected"
                                                            ? "bg-red-100 text-red-800"
                                                            : "bg-gray-100 text-gray-800"
                                                }`}
                                        >
                                            {entry.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">{entry.total_hours}</td>
                                    {/* In future want a export button */}
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
//I want this to basically be able to show the user their timesheet, which is a collection of work entries that they have made.
// The timesheet should show the user their total hours worked, the start and end date of the timesheet, and the status of the timesheet.
// The timesheet should also show the user the work entries that they have made, which should include the description, hours worked, and date of the work entry. If they click on the time sheet, it would bring them to the work entries page where they can see the details of the work entries.
// The timesheet should be able to be filtered by date range, and the user should be able to see their timesheet for the current week, month, or year.
// The timesheet should also be able to be exported as a CSV file, which can be used for payroll purposes.
// The timesheet should be able to be edited, and the user should be able to add, edit, or delete work entries.
// The timesheet should also be able to be approved or rejected by the manager, and the user should be able to see the status of their timesheet.
// The timesheet should be able to be submitted for approval, and the user should be able to see the status of their submission.