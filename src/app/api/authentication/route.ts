import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_strong_secret_here";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("session_token")?.value;

    if (!token) {
      return NextResponse.json({ success: false, message: "Not authenticated" }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    return NextResponse.json({ success: true, message: "User authenticated" ,user: decoded }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Invalid or expired token" }, { status: 401 });
  }
}
