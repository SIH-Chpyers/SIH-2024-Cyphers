import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quizz.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Quizz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);
  const [numQuestions, setNumQuestions] = useState(10);
  const [score, setScore] = useState(null);
  const [stats, setStats] = useState(null);
  const [language, setLanguage] = useState('english');

  const navigate = useNavigate();

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleFileChange = (event) => {
    setPdfFile(event.target.files[0]);
  };

  const handleNumQuestionsChange = (event) => {
    setNumQuestions(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!pdfFile) return;

    setLoading(true);
    setQuestions([]);
    setSelectedAnswers([]);
    setScore(null);
    setStats(null);

    const formData = new FormData();
    formData.append('pdf', pdfFile);
    formData.append('numQuestions', numQuestions);
    formData.append('language', language);

    try {
      const response = await fetch('http://localhost:3001/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      if (result.error) {
        throw new Error(result.error);
      }

      setQuestions(result.questions || []);
      localStorage.setItem('questions', JSON.stringify(result.questions || []));
      navigate('/Quizpage');
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Quiz Game</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pdf">Upload PDF (PDF only):</label>
        <input type="file" id="pdf" name="pdf" accept="application/pdf" onChange={handleFileChange} />
        <br /><br />
        <label htmlFor="numQuestions">Number of Questions:</label>
        <input type="number" id="numQuestions" name="numQuestions" min="1" value={numQuestions} onChange={handleNumQuestionsChange} required />
        <br /><br />
        <label htmlFor="language">Preferred Language:</label>
        <input type="text" id="language" name="language" value={language} onChange={handleLanguageChange} placeholder="e.g., Hindi, Spanish" required />
        <br /><br />
        <button type="submit">Submit</button>
      </form>

      {loading && <div id="loading" className="spinner"></div>}
    </div>
  );
}

export default Quizz;
