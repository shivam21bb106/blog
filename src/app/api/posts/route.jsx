import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/dbconnect";
import Posts from "@/models/Posts";


export async function GET(request){
    try{
        await connectMongoDB();
       const posts = await Posts.find().sort({ createdAt: -1 });
  return NextResponse.json({ posts });}
  catch(err){
    return NextResponse.json({err})
  }
}