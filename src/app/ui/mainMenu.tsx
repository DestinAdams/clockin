import SignIn from "@/app/components/auth/signin-button"

export default function Menu() {
    return (
        <header className="bg-white shadow-md px-6 py-4">
            <div className="flex items-center justify-between">
                {/* Left: Navigation Links */}
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <a href="/" className="text-gray-700 hover:text-blue-500">Home</a>
                        </li>
                        <li>
                            <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
                        </li>
                        <li>
                            <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
                        </li>
                    </ul>
                </nav>

                {/* Right: Login Button */}
                <div>
                    <SignIn />
                </div>
            </div>
        </header>
    );
}
