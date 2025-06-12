import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/dbconnect";
import Users from "@/models/Users";
import bcrypt from "bcryptjs";



export async function POST(request) {
    try{
        await connectMongoDB();
    
   
    const {name,email,password}=await request.json();
    const existing_users=await Users.findOne({email})
    if (existing_users){
        return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    const hashedPassword =await bcrypt.hash(password,10);


    await Users.create({name,email,password:hashedPassword});
}
 catch(err){
        console.log("Error",err)
    }
    return NextResponse.json({message:'user created'})
}