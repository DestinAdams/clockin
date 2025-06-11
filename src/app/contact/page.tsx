import Menu from "@/app/ui/mainMenu";
import Footer from "@/app/ui/footer"
import { ContactUs } from "../components/contactUs";
export default function About() {
    return (
        <div className="relative z-10 min-h-screen bg-white">
            <Menu />
            <main className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(37,99,235,0.5)_100%)]">

                <ContactUs />
            </main>
            <Footer />
        </div>
    );
}