import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
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

    // Save to Supabase
    const { error: dbError } = await supabaseAdmin
      .from("inquiries")
      .insert([
        {
          first_name: firstName,
          last_name: lastName || null,
          email,
          phone: phone || null,
          company: company || null,
          title: title || null,
          destination: destination || null,
          group_size: groupSize || null,
          budget: budget || null,
          timing: timing || null,
          goals: goals || null,
          source: "contact_form",
          created_at: new Date().toISOString(),
        },
      ]);

    if (dbError) {
      console.error("Supabase error:", dbError);
      // Don't fail the request — still send emails
    }

    // Send notifications
    await Promise.allSettled([
      sendInquiryNotification({
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
      }),
      sendInquiryAutoReply(email, firstName),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Inquiry submission error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
