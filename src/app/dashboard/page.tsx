export default function DashboardLayout() {
    return (
        <div className=" bg-gray-100">
            
            {/* Main Content */}
            <main className="p-6">

                <section className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className=" mt-6 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Hours Worked</h2>
                        <p className="text-gray-700">This section will display hours worked and earnings.</p>
                        <p>maybe something that incorages the person at certain increments of time during there work week?</p>
                        <p> or even a goal tracker? to buy stuff.</p>
                        
                    </div>

                    <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
                        <p className="text-gray-700">This section will display recent activity. no fucking clue what to do with recents activity just want dashboard any way for the basic user</p>
                        
                    </div>
                    <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Notifications</h2>
                        <p className="text-gray-700">This section will display notifications.</p>
                        <p>Kinda want this to show status of working hours, like accepted/denied/inprogress for the accountant.</p>
                        <p>because the way atleast my accountant works is that they need the hours of the last 2 weeks and that has to be approved by a manager then it can be sent through pay role.</p>
                        
                    </div>
                    <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Todo section?</h2>
                        <p className="text-gray-700">honestly not only for me but maybe for the user using this?</p>
                        
                        
                        
                    </div>
                </section>

            </main>
        </div>
    );
}
