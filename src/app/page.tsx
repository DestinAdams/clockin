import Image from "next/image";
import Link from "next/link";
import Menu from "./ui/mainMenu";

export default function Home() {
  return (
    <div className="relative z-10 min-h-screen bg-white">
      <Menu />

      {/* Hero Section */}
      <main className="relative bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(37,99,235,0.5)_100%)] min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to <span className="text-blue-600">ClockIn</span>
          </h1>
          <h2 className="text-lg text-gray-600 mb-8">
            Track your hours worked during the week and calculate your earnings effortlessly.
          </h2>
          <Link
            href="/login"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
          <p className="text-sm text-gray-500 mt-6 italic">
            (built by a tired dev, be patient 🧠💤)
          </p>
        </div>
      </main>

      {/* About Section */}
      <section className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">More About ClockIn</h2>
          <p className="text-lg text-gray-600">
            ClockIn is a time tracking tool designed to make your work life easier. Log hours,
            review past weeks, and stay on top of your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-6 py-12">
            {[1, 2, 3].map((i) => (
              <Image
                key={i}
                src="/images/hero-image.png"
                alt={`Hero Image ${i}`}
                width={300}
                height={200}
                className="rounded-lg shadow-lg"
              />
            ))}
          </div>
          <p className="text-gray-500">Why it’s so good</p>
        </div>
      </section>

      {/* Footer Section */}
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
    </div>
  );
}
