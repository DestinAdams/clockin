import { getUserId } from "@/app/api/auth/getUserNameServerAction";
import { timeSheet } from "@/app/lib/definitions";

export default async function TimeSheetPage() {
    const user_id = await getUserId(); // just gets the user id of the logged in user
    const result: timeSheet[] = user_id !== null ? [] : []; // Placeholder for timesheet data, replace with actual data fetching logic
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
                            <th className="px-6 py-4 ">id</th>
                            <th className="px-6 py-4">user_id</th>
                            <th className="px-6 py-4">start-date</th>
                            <th className="px-6 py-4">end-date</th>
                            <th className="px-6 py-4">status</th>
                            <th className="px-6 py-4">total hours</th>
                            {/* <th className="px-6 py-4">work entries array</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}