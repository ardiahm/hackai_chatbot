import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userMessage } = await req.json();
    if (!userMessage) {
      return NextResponse.json({ error: "No message provided" }, { status: 400 });
    }

    // Call Gemini AI (or mock response for now)
    const aiResponse = await fetchGeminiResponse(userMessage);

    return NextResponse.json({ reply: aiResponse });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Error fetching response" }, { status: 500 });
  }
}

// Mock function — Replace with Gemini AI API call
async function fetchGeminiResponse(message: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`I'm here to help. You said: "${message}"`), 1000);
  });
}