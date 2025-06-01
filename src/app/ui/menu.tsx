export default function Menu() {
    return (
        <header className="bg-white shadow-md px-6 py-4">
            <div className="flex items-center justify-between">
                <div>


                </div>

                {/* Profile placeholder */}
                <div className="flex flex-col items-center text-right">
                    <img
                        src="/profile-placeholder.png"
                        alt="Profile"
                        className="w-10 h-10 rounded-full mb-1"
                    />
                    <h1 className="text-sm text-gray-700">Welcome back, Placeholder</h1>
                </div>

            </div>
        </header>
    );
}