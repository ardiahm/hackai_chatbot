"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Messagebubble from "@/components/ui/messagebubble";

export default function Page() {
  type Message = {
    text: string;
    sender: "user" | "ai";
  };

  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! How are you doing today?", sender: "ai" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userMessage: input }),
      });

      const textResponse = await response.text(); // Read response as text first
      console.log("Raw API Response:", textResponse); // Log full response for debugging

      let data;
      try {
        data = JSON.parse(textResponse); // Try parsing as JSON data
      } catch (parseError) {
        console.error("Failed to parse API response as JSON:", parseError);
        console.error("Response received:", textResponse);
        throw new Error("Invalid response from AI.");
      }

      if (response.ok && data.reply) {
        const botMessage: Message = { text: data.reply, sender: "ai" };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        console.error(
          "Error from API:",
          data.error || "Invalid response from AI."
        );
      }
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      {/* Chat Messages Container */}
      <div className="w-screen flex flex-col justify-center items-center">
        <div className="w-full max-w-md h-96 overflow-y-auto border border-gray-300 rounded-lg p-4 bg-gray-50 flex flex-col space-y-2">
          {messages.map((msg, index) => (
            <Messagebubble key={index} text={msg.text} sender={msg.sender} />
          ))}
          <div ref={messagesEndRef} />
        </div>
        {/* Input field and send button */}
        <div className="flex w-full max-w-md items-center space-x-2 pt-2 mt-2">
          <Input
            className="border border-transparent focus:outline-none focus:ring-2 focus:border-indigo-600 hover:border-indigo-600 flex-1"
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <Button
            className="bg-indigo-600 hover:bg-indigo-700"
            onClick={sendMessage}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
