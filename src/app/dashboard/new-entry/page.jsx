export default function NewEntry() {
    return (
        <div className="flex min-h-screen ">
            <div className="flex-1 p-10">
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
                    Log New Work Entry
                </h1>

                <form className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-6">
                    <div>
                        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                            Start date of work week
                        </label>
                        <input
                            type="date"
                            id="startDate"
                            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                            End date of work week
                        </label>
                        <input
                            type="date"
                            id="endDate"
                            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="totalHours" className="block text-sm font-medium text-gray-700 mb-1">
                            Total Hours Worked
                        </label>
                        <input
                            type="number"
                            id="totalHours"
                            placeholder="e.g. 40"
                            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
                    >
                        Save Entry
                    </button>
                </form>
            </div>
        </div>
    );
}
