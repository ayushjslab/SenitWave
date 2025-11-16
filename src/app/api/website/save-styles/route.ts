import { connectToDB } from "@/lib/connectDB";
import Website from "@/models/website.model";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const {websiteId, styles: formStyles} = await req.json();
    if (!websiteId) {
      return NextResponse.json(
        { success: false, message: "Website ID missing" },
        { status: 400 }
      );
    }

    if (!formStyles) {
      return NextResponse.json(
        { success: false, message: "formStyles is required" },
        { status: 400 }
      );
    }

    const updated = await Website.findByIdAndUpdate(
      websiteId,
      { formStyles },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json(
        { success: false, message: "Website not found" },
        { status: 404 }
      );
    }

    console.log(updated)

    return NextResponse.json({
      success: true,
      message: "Styles updated successfully",
      data: updated,
    });
  } catch (err) {
    console.error("Error saving styles:", err);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
