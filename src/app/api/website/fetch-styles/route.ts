import { connectToDB } from "@/lib/connectDB";
import Website from "@/models/website.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectToDB();

    const websiteId = req.nextUrl.searchParams.get("websiteId");

    if (!websiteId) {
      return NextResponse.json(
        { success: false, message: "Website ID missing" },
        { status: 400 }
      );
    }

    const website = await Website.findById(websiteId).lean();


    if (!website) {
      return NextResponse.json(
        { success: false, message: "Website not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Styles fetched successfully",
      formStyles: website.formStyles || null,
    });
  } catch (err) {
    console.error("Error fetching styles:", err);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
