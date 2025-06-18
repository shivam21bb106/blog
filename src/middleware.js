import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
export default function middleware(request){
    const token=request.cookies.get('token')
    console.log("Token in middleware:", token);

    if(!token){
        return NextResponse.redirect(new URL('/login',request.url))
    }
    try{
        jwt.verify(token, process.env.JWT_SECRET);
        return NextResponse.next();
    }
    catch(err){
        console.error(err);
        return NextResponse.redirect(new URL('/login',request.url));
    }
}
export const config = {
  matcher: ['/new-post'], 
}