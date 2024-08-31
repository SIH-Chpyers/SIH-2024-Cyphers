import React, { useState } from 'react';
import axios from 'axios';
import './Kk.css';

function TextToSpeech() {
  const [text, setText] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('notes', file);

    try {
      setIsLoading(true);
      const response = await axios.post('http://localhost:3000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setText(response.data.text);
    } catch (error) {
      alert('Failed to upload file or process text.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTextToSpeech = () => {
    if (!text) {
      return alert('No text available for TTS.');
    }

    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    } else {
      alert('Your browser does not support text-to-speech.');
    }
  };

  const handleStopSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <div className="container-ts">
      <h1 className="title-ts">Text to Speech in React Application</h1>
      <input type="file" onChange={handleFileUpload} className="file-upload-ts" />
      {isLoading && <p>Loading and processing file...</p>}
      <textarea
        className="text-area-ts"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="4"
        cols="50"
        placeholder="Upload a PDF to extract text..."
      />
      <div className="buttons-ts">
        <button onClick={handleTextToSpeech} className="btn-ts btn-primary-ts" disabled={isSpeaking || isLoading}>
          {isSpeaking ? 'Speaking...' : 'Speak'}
        </button>
        <button onClick={handleStopSpeech} className="btn-ts btn-secondary-ts" disabled={!isSpeaking}>
          Stop
        </button>
      </div>
    </div>
  );
}

export default TextToSpeech;
