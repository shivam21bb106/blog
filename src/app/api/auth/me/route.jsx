import {NextResponse} from 'next/server';
import jwt from 'jsonwebtoken';
export async function GET(request){
    const token= request.cookies.get('token')?.value;
    if (!token){
        return NextResponse.json({message:"Unauthorized", status: 401});
    }
    try{
        const decoded= jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded)
        return NextResponse.json({ user: decoded });

    }
    catch (err) {
        console.error(err);
        return NextResponse.json({message:"Internal Server Error"}, {status: 500});
    }
}