import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userName, phoneNumber } = await req.json();

    if (!userName) {
      return NextResponse.json({ error: "User name is required." }, { status: 400 });
    }

    

    console.log("Received Data:", { userName, phoneNumber });

    return NextResponse.json({ message: "Data saved successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}