import connectMongoDB from "@/lib/dbconnect";
import { NextResponse } from "next/server";
import Posts from "@/models/Posts";

export async function POST(request,{params}){
    const postId=params.id 
    await connectMongoDB();

    try{

        const post=await Posts.findById(postId)
    if (!post) {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }
    post.likes+=1
    await post.save()
    }
    catch(err){
        console.log(err)
        return NextResponse.json({message: 'Error liking post' }, { status: 500 });

    }



}