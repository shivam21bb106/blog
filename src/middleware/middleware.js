import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request){
    const token=request.cookies.get('token')?.value;

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