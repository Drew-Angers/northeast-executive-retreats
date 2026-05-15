import { NextRequest, NextResponse } from "next/server";
import {
  sendInquiryNotification,
  sendInquiryAutoReply,
} from "@/lib/emails";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      title,
      destination,
      groupSize,
      budget,
      timing,
      goals,
    } = body;

    if (!firstName || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await sendInquiryNotification({
      firstName,
      lastName: lastName || "",
      email,
      phone: phone || "",
      company: company || "",
      title: title || "",
      destination: destination || "",
      groupSize: groupSize || "",
      budget: budget || "",
      timing: timing || "",
      goals: goals || "",
    });

    await sendInquiryAutoReply(email, firstName);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Inquiry submission error:", err);
    return NextResponse.json(
      { error: "Failed to send inquiry. Please email drewangers@gmail.com directly." },
      { status: 500 }
    );
  }
}
