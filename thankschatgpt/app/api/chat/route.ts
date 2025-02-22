import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = process.env.API_KEY;

if (!GEMINI_API_KEY) {
  throw new Error("❌ Missing API_KEY in environment variables.");
}

export async function POST(req: NextRequest) {
  try {
    const { userMessage, chatHistory = [] } = await req.json();

    if (!userMessage) {
      console.error(" No user message received.");
      return NextResponse.json({ error: "No message provided" }, { status: 400 });
    }

    console.log("✅ Sending request to Gemini...");
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Construct full chat history for better response
    const chat = model.startChat({
      history: chatHistory.map((msg: { sender: string; text: any; }) => ({
        role: msg.sender === "user" ? "user" : "model",
        parts: [{ text: msg.text }],
      })),
    });

    // Construct prompt
    const prompt = `
    You are a compassionate mental health chatbot. Your responses should be:
    - Empathetic and supportive
    - Encourage self-care and therapy when needed
    - Never diagnose medical conditions
    - Use prior conversation context to give relevant answers

    Previous conversation:
    ${chatHistory.map((msg: { sender: any; text: any; }) => `${msg.sender}: ${msg.text}`).join("\n")}

    User: ${userMessage}
    AI:`;

    console.log("📝 Prompt sent to Gemini:", prompt);

    // Call Gemini API
    const result = await chat.sendMessage(userMessage);
    console.log("🔄 Gemini Raw Response:", result);

    // Extract AI response safely
    const responseText = result.response?.text();
    if (!responseText) {
      console.error("❌ Gemini returned an empty response.");
      return NextResponse.json({ error: "No response from AI." }, { status: 500 });
    }

    console.log("✅ AI Response:", responseText);
    return NextResponse.json({ reply: responseText });
  } catch (error) {
    console.error("❌ API Error:", error);
    return NextResponse.json({ error: "Error fetching response" }, { status: 500 });
  }
}