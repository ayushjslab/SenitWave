import Feedback from "@/models/feedback.model";
import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/connectDB";
import axios from "axios";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function POST(req: NextRequest) {
  try {
    await connectToDB();

    const data = await req.json();
    const { name, email, text, rating, siteId } = data;

    if (!name || !email || !text || !rating || !siteId) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400, headers: corsHeaders }
      );
    }

    const existFeedback = await Feedback.findOne({
      email,
      website: siteId,
    });

    if (existFeedback) {
      return NextResponse.json(
        { success: false, message: "You already give the feedback" },
        { status: 400, headers: corsHeaders }
      );
    }

    const res = await axios.post(`/api/send-mail`, {
      to: email,
      subject: "ThankYou ! For Valuable Feedback",
      message: `<body style="font-family: Arial, sans-serif; background:#f7f7f7; padding:20px;">
    <div style="max-width:500px; margin:auto; background:white; padding:20px; border-radius:8px;">

      <h2 style="color:#2e8b57; margin-top:0;">Thank You for Your Feedback!</h2>

      <p>
        We truly appreciate the time you took to share your feedback with us.
        Your thoughts help us improve and deliver a better experience.
      </p>

      <p>
        If you have more suggestions or comments, feel free to reply to this email anytime.
      </p>

      <br/>

      <p style="font-size:12px; color:#555; border-top:1px solid #eee; padding-top:10px; text-align:center;">
        Powered by <strong>EchoMark</strong>
      </p>
    </div>
  </body>`,
    });

    if(!res.data.success) {
       return NextResponse.json(
         { success: false, message: "Failed to send mail" },
         { status: 400, headers: corsHeaders }
       );
    }

    const newFeedback = await Feedback.create({
      name,
      email,
      description: text,
      rating,
      website: siteId,
    });

    console.log("Feedback received:", newFeedback);

    return NextResponse.json(
      {
        success: true,
        data: newFeedback,
        message: "Feedback submitted successfully",
      },
      {
        status: 201,
        headers: corsHeaders,
      }
    );
  } catch (error) {
    console.error("Error saving feedback:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}
