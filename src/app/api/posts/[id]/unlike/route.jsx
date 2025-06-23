import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/dbconnect";
import Posts from "@/models/Posts";


export default async function POST(request,{params}){
    const postId=params.id 
    await connectMongoDB()
    try{
 
        const post=await Posts.findById(postId)
        if (!post){
            return NextResponse.json({message:'Post not found'},{status:404})
        }
         post.likes = Math.max(post.likes - 1, 0);
          await post.save();
        return NextResponse.json({ message: 'Unliked', likes: post.likes });
    }
    catch (err) {
        console.log(err)
        return NextResponse.json({message:'Post not found'},{status:404})

    }
}