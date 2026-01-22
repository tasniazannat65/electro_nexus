import { NextResponse } from "next/server";

export default function middleware(request) {
   
    const token = request.cookies.get('auth_token')?.value;
    const pathname = request.nextUrl.pathname;
  
    if(pathname.startsWith('/add_item') && !token){
        return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
    
}
export const config = {
    matcher: ['/add_item/:path*'],
}



