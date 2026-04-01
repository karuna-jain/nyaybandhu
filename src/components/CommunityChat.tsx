import React, { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

// Message interface
interface Message {
  message: string;
}

// Connect to the backend Socket.IO server
const socket: Socket = io("http://localhost:5000"); // Replace with your deployed server URL

const CommunityChat: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [chat, setChat] = useState<Message[]>([]);
  const [connected, setConnected] = useState<boolean>(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Send a message to the server
  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("send_message", { message });
      setMessage("");
    }
  };

  // Scroll to the bottom when new message is added
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  // Set up socket listeners
  useEffect(() => {
    const handleReceive = (data: Message) => {
      setChat((prev) => [...prev, data]);
    };

    socket.on("connect", () => setConnected(true));
    socket.on("disconnect", () => setConnected(false));
    socket.on("receive_message", handleReceive);

    return () => {
      socket.off("receive_message", handleReceive);
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-bold">Community Chat</h2>
        <span
          className={`text-sm font-medium ${
            connected ? "text-green-600" : "text-red-600"
          }`}
        >
          {connected ? "Connected" : "Disconnected"}
        </span>
      </div>

      <div className="border p-3 h-64 overflow-y-auto bg-white rounded shadow-sm">
        {chat.map((msg, index) => (
          <div key={index} className="mb-1 text-sm text-gray-800">
            {msg.message}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="flex mt-3">
        <input
          className="flex-1 border p-2 rounded shadow-sm"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default CommunityChat;
