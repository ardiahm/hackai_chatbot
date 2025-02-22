//work on here
"use client";

import { useState } from "react";
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
    { text: "I am doing okay. Just stressed out...", sender: "user" },
    { text: "Why are you stressed?", sender: "ai" },
    { text: "Classes are getting too tough.", sender: "user" },
    { text: "Have you been studying adequately?", sender: "ai" },
    {
      text: "Maybe not. I try to give myself enough time away from school and work.",
      sender: "user",
    },
    {
      text: "Maybe you should try visiting your TA's office hours! It's a nice way to study without feeling like you are trapped inside the library.",
      sender: "ai",
    },
  ]);

  return (
    // full container, holds messages and input/send seperately
    <div className="flex flex-col items-center justify-center h-screen w-full">
      {/* Chat Messages Container */}
      <div className="w-screen flex flex-col justify-center items-center">
        <div className="w-full max-w-md h-96 overflow-y-auto border border-gray-300 rounded-lg p-4 bg-gray-50 flex flex-col space-y-2">
          {messages.map((msg, index) => (
            <Messagebubble
              key={index}
              text={msg.text}
              sender={msg.sender as "user" | "ai"}
            />
          ))}
        </div>
        {/* input field and send button*/}
        <div className="flex w-full max-w-md items-center space-x-2 pt-2 mt-2">
          <Input
            className="border border-transparent focus:outline-none focus:ring-2 focus:border-indigo-600 hover:border-indigo-600 flex-1"
            type="message"
            placeholder="Type away"
          />
          <Button className="bg-indigo-600 hover:bg-indigo-700">Send</Button>
        </div>
      </div>
    </div>
  );
}
