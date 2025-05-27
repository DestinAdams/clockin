import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <div className="flex items-center justify-center min-h-screen px-4 ">
        <div className="text-center max-w-xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to <span className="text-blue-600">ClockIn</span>
          </h1>
          <h2 className="text-lg text-gray-600 mb-8">
            Track your hours worked during the week and calculate your earnings effortlessly.
          </h2>
          <Link
            href="/dashboard"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
          <p className="text-sm text-gray-500 mt-6 italic">
            (built by a tired dev, be patient 🧠💤)
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">More About ClockIn</h2>
          <p className="text-lg text-gray-600">
            ClockIn is a time tracking tool designed to make your work life easier. Log hours,
            review past weeks, and stay on top of your goals.
          </p>
          <div className="flex justify-center  py-12">
            <Image
              src="/images/hero-image.png"
              alt="Hero Image"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <Image
              src="/images/hero-image.png"
              alt="Hero Image"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <Image
              src="/images/hero-image.png"
              alt="Hero Image"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />

          </div>
          <p>
            why its so good
          </p>
        </div>
      </div>


      {/* Footer Section */}
      <footer className="bg-gray-200 py-6">
        <div className="text-center text-gray-600">
          <p className="text-sm">
            © {new Date().getFullYear()} ClockIn. All rights reserved.
          </p>
          <p className="text-xs mt-2">
            Built with ❤️ by a tired dev. <br />
            <Link href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </footer>

    </div>
  );
}
