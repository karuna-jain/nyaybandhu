import React, { useState } from "react";
import VoiceButton from "./VoiceButton";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [input, setInput] = useState<string>("");

  const handleSend = () => {
    if (input.trim() !== "") {
      onSendMessage(input);
      setInput("");
    }
  };

  const handleVoiceInput = (transcript: string) => {
    setInput(transcript);
    onSendMessage(transcript);
  };

  return (
    <div className="flex items-center gap-2 p-2 bg-white rounded-md shadow">
      <input
        type="text"
        className="flex-1 border p-2 rounded-md"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message here..."
      />
      <VoiceButton onTranscript={handleVoiceInput} />
      <button
        onClick={handleSend}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
