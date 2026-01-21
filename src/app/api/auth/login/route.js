import { NextResponse } from "next/server";

const MOCK_USER = {
    email: 'admin@example.com',
    password: '123456'
};
export async function POST(req) {
    try {
        const {email, password} = await req.json();
        if(email === MOCK_USER.email && password === MOCK_USER.password){
            const response = NextResponse.json({message: 'Login successful'});
            response.cookies.set({
                name: 'auth_token',
                value: 'logged_in',
                path: '/',
                maxAge: 60 * 60 * 24,
            })
            return response;
        }
        return NextResponse.json({message: 'Invalid Credentials'}, {status: 401});
        
    } catch (error) {
        console.log('Login error:', error);
        return NextResponse.json({message: 'Something went wrong'}, {status: 500});
           
    }
    
}



