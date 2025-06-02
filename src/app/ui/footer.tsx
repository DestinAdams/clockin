import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-gray-200 py-6">
            <div className="text-center text-gray-600">
                <p className="text-sm">© {new Date().getFullYear()} ClockIn. All rights reserved.</p>
                <p className="text-xs mt-2">
                    Built with ❤️ by a tired dev. <br />
                    <Link href="/privacy" className="text-blue-600 hover:underline">
                        Privacy Policy
                    </Link>
                </p>
            </div>
        </footer>
    );
}