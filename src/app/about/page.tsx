import Menu from "@/app/ui/mainMenu";
import Footer from "@/app/ui/footer"
export default function About() {
    return (
        <div className="relative z-10 min-h-screen bg-white">
            <Menu />
            <main className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(37,99,235,0.5)_100%)]">
                <h1 className="text-center text-blue-500 text-7xl font-bold mb-8">About ClockIn</h1>

                <section className="bg-white rounded-lg shadow-lg p-8 max-w-3xl text-center">
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur accusantium minus asperiores nesciunt
                        odio, doloremque voluptas dolor vel porro iure libero illo labore praesentium deserunt soluta
                        quisquam veritatis quia neque!
                    </p>
                </section>

            </main>
            <Footer />
        </div>
    );
}
