import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/dbconnect";
import jwt from "jsonwebtoken";
import Users from "@/models/Users";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    await connectMongoDB();
    const { email, password } = await request.json();

    const user = await Users.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 }); 
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const token=jwt.sign(
      {
        id:user.id,
        email:user.email,
      },process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    
    const response= NextResponse.json({
      message: "Login successful",
      user: { email: user.email, name: user.name },
    });
    response.cookies.set("token", token, {
      httpOnly:true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24,
      path: "/",
    })
    return response

  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
