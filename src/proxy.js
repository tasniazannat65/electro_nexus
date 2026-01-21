import { NextResponse } from "next/server";

export default function proxy(request) {
    const token = request.cookies.get('auth_token')?.value;
    const pathname = request.nextUrl.pathname;
    if(pathname.startsWith('/api/auth/login')){
        return NextResponse.next();
    }
    if(pathname.startsWith('/add_item') && !token){
        return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
    
}
export const config = {
    matcher: ['/add_item', '/api/auth/login'],
}



