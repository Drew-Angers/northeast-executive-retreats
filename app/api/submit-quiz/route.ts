import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import {
  sendQuizLeadNotification,
  sendQuizAutoReply,
} from "@/lib/emails";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      teamSize,
      goal,
      setting,
      timing,
      email,
      firstName,
      company,
      destination,
    } = body;

    if (!email || !firstName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Save to Supabase
    const { error: dbError } = await supabaseAdmin
      .from("quiz_leads")
      .insert([
        {
          first_name: firstName,
          email,
          company: company || null,
          team_size: teamSize || null,
          goal: goal || null,
          setting: setting || null,
          timing: timing || null,
          matched_destination: destination || null,
          source: "retreat_builder",
          created_at: new Date().toISOString(),
        },
      ]);

    if (dbError) {
      console.error("Supabase error:", dbError);
    }

    // Send notifications
    await Promise.allSettled([
      sendQuizLeadNotification({
        firstName,
        email,
        company: company || "",
        teamSize: teamSize || "",
        goal: goal || "",
        setting: setting || "",
        timing: timing || "",
        destination: destination || "",
      }),
      sendQuizAutoReply(email, firstName, destination || "maine"),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Quiz submission error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
