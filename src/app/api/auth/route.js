import { cookies } from "next/headers";

export async function GET() {
    const token = (await cookies()).get('auth_token');
    return new Response(
        JSON.stringify({loggedIn: !!token}),
        {
            status: 200,
            headers: {'Content-Type': 'application/json'},
        }
    )
    
}