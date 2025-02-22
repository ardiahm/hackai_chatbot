interface MessageProps {
  text: string;
  sender: "user" | "ai"; // Determines if it's a user message or AI response
}

const MessageBubble = ({ text, sender }: MessageProps) => {
  return (
    <div
      className={`p-3 rounded-lg shadow-md max-w-xs ${
        sender === "user"
          ? "bg-indigo-100 text-gray-900 self-end"
          : "bg-white text-gray-700 self-start"
      }`}
    >
      <p>{text}</p>
    </div>
  );
};

export default MessageBubble;
