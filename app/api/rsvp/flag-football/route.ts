import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      level,
      group,
      notes,
      agreed,
    } = body ?? {};

    if (!firstName || !email || !agreed) {
      return NextResponse.json(
        { ok: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // This is where you can plug in a DB / Sheet / email service.
    // For now we'll just log to the server (dev terminal or Vercel logs).
    console.log("🔔 New Flag Football RSVP:", {
      firstName,
      lastName,
      email,
      phone,
      level,
      group,
      notes,
      agreed,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error handling RSVP:", err);
    return NextResponse.json(
      { ok: false, message: "Server error" },
      { status: 500 }
    );
  }
}