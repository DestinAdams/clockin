import { signIn } from "@/auth"

export default function SignIn() {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("google", { redirectTo: "/dashboard" })
                console.log("Missing required env vars");
            }}
        >
            <button type="submit" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-blue-700 transition">Login</button>
        </form>
    )
} 