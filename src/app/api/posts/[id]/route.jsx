import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/dbconnect";
import Posts from "@/models/Posts";

export async function GET(req, context) {
  const { id } = await context.params; // ✅ await context.params

  try {
    await connectMongoDB();
    const post = await Posts.findById(id);

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ post }, { status: 200 });
  } catch (error) {
    console.error("Error fetching post:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
