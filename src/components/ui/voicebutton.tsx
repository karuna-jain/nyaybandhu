import React, { useEffect, useState } from "react";

interface VoiceButtonProps {
  onTranscript: (transcript: string) => void;
}

const VoiceButton: React.FC<VoiceButtonProps> = ({ onTranscript }) => {
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    const recog: SpeechRecognition = new SpeechRecognition();
    recog.continuous = false;
    recog.interimResults = false;
    recog.lang = "en-IN";

    recog.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      onTranscript(transcript);
      setIsListening(false);
    };

    recog.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recog.onend = () => {
      setIsListening(false);
    };

    setRecognition(recog);
  }, [onTranscript]);

  const toggleListening = () => {
    if (!recognition) return;

    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }

    setIsListening(!isListening);
  };

  return (
    <button
      onClick={toggleListening}
      className={`px-4 py-2 rounded-full text-white shadow-md transition ${
        isListening ? "bg-red-500" : "bg-blue-600 hover:bg-blue-700"
      }`}
    >
      🎙 {isListening ? "Listening..." : "Speak"}
    </button>
  );
};

export default VoiceButton;
