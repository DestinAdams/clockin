import Link from "next/link";

export default function SignupPage() {
    return (
        <div>
            {/* Hero Section */}
            <main className="relative bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(37,99,235,0.5)_100%)] min-h-screen flex items-center justify-center px-4">
                <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl w-full max-w-md">
                    <div className="mb-4">
                        <Link href="/" className="text-sm text-blue-600 hover:underline">
                            ← Back to Home
                        </Link>
                    </div>
                    <h1 className="text-3xl font-bold text-center mb-4 text-blue-500">Sign Up</h1>
                    <p className="text-center mb-6 text-gray-600">Create your account</p>

                    <form className="space-y-4">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                required
                                className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                            Sign Up
                        </button>
                    </form>

                    <p className="text-center mt-6 text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link href="/login" className="text-blue-600 hover:underline">
                            Login here
                        </Link>
                    </p>
                </div>
            </main>
        </div>
    );
}
