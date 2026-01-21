import { cookies } from "next/headers";

export async function POST() {
    cookies().delete('auth_token', {path: '/'});
    return new Response(JSON.stringify({message: 'Logged out'}), {
        status: 200,
    })
    
}