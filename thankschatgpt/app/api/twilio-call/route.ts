import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";

// ✅ Load Twilio credentials securely from environment variables
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER || ''; // Twilio number
const emergencyPhoneNumber = process.env.TWILIO_EMERGENCY_CONTACT || ''; // The recipient's phone

if (!accountSid || !authToken || !twilioPhoneNumber || !emergencyPhoneNumber) {
  throw new Error("❌ Missing Twilio environment variables.");
}

// ✅ Initialize Twilio client
const client = twilio(accountSid, authToken);

export async function POST(req: NextRequest) {
  try {
    const { userName, phoneNumber } = await req.json(); // Get user data

    // ✅ Make a Twilio call
    const call = await client.studio.v2.flows('FW2f0505cbb375be51c626b81d1e8f5ada').executions
    .create({
        to:  emergencyPhoneNumber, // call ardi's number
        from: twilioPhoneNumber,
    });
    console.log("✅ Twilio Call SID:", call.sid);
    return NextResponse.json({ success: true, callSid: call.sid });
  } catch (error) {
    console.error("❌ Twilio API Error:", error);
    return NextResponse.json({ error: "Failed to make Twilio call" }, { status: 500 });
  }
}
