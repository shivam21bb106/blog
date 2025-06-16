import { NextResponse } from 'next/server'; 
import connectMongoDB from "@/lib/dbconnect";
import Posts from '@/models/Posts'; 

export async function POST(request) {
  try {
    await connectMongoDB();

    const { title, content, tags } = await request.json();

    await Posts.create({ title, content, tags });

    return NextResponse.json({ message: 'Post created' }, { status: 201 }); 
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Error creating post' }, { status: 500 }); 
  }
}
