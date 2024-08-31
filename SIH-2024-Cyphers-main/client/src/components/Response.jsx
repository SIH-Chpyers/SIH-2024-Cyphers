import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Kk.css';
import * as pdfjsLib from 'pdfjs-dist';

function Response() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pdfUrl } = location.state || { pdfUrl: null };
  const [isLoading, setIsLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [refreshedPdfUrl, setRefreshedPdfUrl] = useState(pdfUrl);
  const [pdfText, setPdfText] = useState('');
  const [audioUrl, setAudioUrl] = useState('');
  const [quizQuestions, setQuizQuestions] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (pdfUrl) {
      extractTextFromPDF(pdfUrl);
    }
  }, [pdfUrl]);

  const extractTextFromPDF = async (url) => {
    try {
      const loadingTask = pdfjsLib.getDocument(url);
      const pdf = await loadingTask.promise;
      let text = '';

      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const content = await page.getTextContent();
        const pageText = content.items.map(item => item.str).join(' ');
        text += pageText + ' ';
      }

      setPdfText(text.trim());
      console.log('Extracted PDF Text:', text);
    } catch (error) {
      console.error('Error extracting text:', error);
    }
  };

  const handleGenerateQuiz = async () => {
    if (!pdfText) {
      alert('No text available for quiz generation.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/generate-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: pdfText }),
      });

      if (!response.ok) throw new Error('Error generating quiz.');

      const data = await response.json();
      setQuizQuestions(data.questions);
      alert('Quiz generated successfully!');
    } catch (error) {
      console.error('Error generating quiz:', error);
      alert('Failed to generate quiz.');
    }
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (pdfUrl) {
      extractTextFromPDF(pdfUrl);
    }
  }, [pdfUrl]);



  const handleFullscreen = () => {
    const pdfPreview = document.getElementById('pdfPreview');
    if (pdfPreview.requestFullscreen) {
      pdfPreview.requestFullscreen();
    } else if (pdfPreview.msRequestFullscreen) {
      pdfPreview.msRequestFullscreen();
    } else if (pdfPreview.mozRequestFullScreen) {
      pdfPreview.mozRequestFullScreen();
    } else if (pdfPreview.webkitRequestFullscreen) {
      pdfPreview.webkitRequestFullscreen();
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = refreshedPdfUrl;
    link.download = 'response.pdf';
    link.click();
  };

  const handleRefresh = async () => {
    setSubmitting(true);

    try {
      const response = await fetch(refreshedPdfUrl);
      if (!response.ok) throw new Error('Failed to fetch PDF');
      
      const blob = await response.blob();
      const formData = new FormData();
      formData.append('notes', blob, 'response.pdf');

      const uploadResponse = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData,
      });

      if (!uploadResponse.ok) throw new Error('Error generating refreshed PDF');

      const newBlob = await uploadResponse.blob();
      const newUrl = URL.createObjectURL(newBlob);
      setRefreshedPdfUrl(newUrl);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleTextToSpeech = async () => {
    if (!pdfText) {
      return alert('No text available for TTS.');
    }

    console.log('Text to be converted to speech:', pdfText);

    try {
      const response = await fetch('http://localhost:3000/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: pdfText }),
      });

      if (!response.ok) throw new Error('Error generating speech.');

      const audioBlob = await response.blob();
      setAudioUrl(URL.createObjectURL(audioBlob));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="containerxb loadingxb">
        <div className="spinnerxb"></div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="containerxb">
      <h1 className="titlexb">Response Notes</h1>

      {refreshedPdfUrl ? (
        <div className="pdf-containerxb">
          <iframe id="pdfPreview" src={refreshedPdfUrl} className="pdf-previewxb" title="PDF Preview"></iframe>
          <div className="buttonsxb">
            <button id="fullscreenxb" onClick={handleFullscreen} className="btnxb btn-primaryxb">
              View Fullscreen
            </button>
            <button id="downloadxb" onClick={handleDownload} className="btnxb btn-secondaryxb">
              Download PDF
            </button>
            <button id="ttsxb" onClick={handleTextToSpeech} className="btnxb btn-tertiaryxb">
              Text-to-Speech
            </button>
          </div>
        </div>
      ) : (
        <p>No PDF available</p>
      )}

      {audioUrl && (
        <div className="audio-container">
          <audio controls src={audioUrl} />
        </div>
      )}

      <div className="buttonsxb">
        <button type="button" onClick={() => navigate('/')} className="btnxb btn-primaryxb">
          Retake
        </button>
        <button
          type="button"
          className="btnxb btn-secondaryxb"
          onClick={handleRefresh}
          disabled={submitting}
        >
          {submitting ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>
    </div>
  );
}

export default Response;
