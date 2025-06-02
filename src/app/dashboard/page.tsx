export default function DashboardLayout() {
    return (
        <div className=" bg-gray-100">
            
            {/* Main Content */}
            <main className="p-6">

                <section className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className=" mt-6 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Hours Worked</h2>
                        <p className="text-gray-700">This section will display hours worked and earnings.</p>
                        {/* Placeholder for future content */}
                    </div>

                    <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
                        <p className="text-gray-700">This section will display recent activity.</p>
                        {/* Placeholder for future content */}
                    </div>
                    <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Notifications</h2>
                        <p className="text-gray-700">This section will display notifications.</p>
                        {/* Placeholder for future content */}
                    </div>
                </section>

            </main>
        </div>
    );
}
