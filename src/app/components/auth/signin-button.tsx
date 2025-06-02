import { signIn } from "@/auth"

export default function SignIn() {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("google", { redirectTo: "/dashboard" })
                
            }}
        >
            <button type="submit" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition">Get Started</button>
        </form>
    )
} 