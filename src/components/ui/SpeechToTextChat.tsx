import React from 'react';
import SpeechRecognition, {
  useSpeechRecognition
} from 'react-speech-recognition';

interface Props {
  onSend: (text: string) => void;
}

const SpeechToTextChat: React.FC<Props> = ({ onSend }) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <p>Your browser doesn’t support speech recognition.</p>;
  }

  const handleStart = () => {
    resetTranscript();
    SpeechRecognition.startListening({ continuous: false });
  };

  const handleStop = () => {
    SpeechRecognition.stopListening();
    if (transcript.trim()) {
      onSend(transcript.trim());
    }
  };

  return (
    <div>
      <button onClick={handleStart}>🎤 Start</button>
      <button onClick={handleStop}>🛑 Stop</button>
      <p><strong>Listening:</strong> {listening ? 'Yes' : 'No'}</p>
      <p><strong>Transcript:</strong> {transcript}</p>
    </div>
  );
};

export default SpeechToTextChat;
