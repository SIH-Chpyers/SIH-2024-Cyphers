// src/components/UploadPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Quizz.css';

const Uploadpage = () => {
  const [file, setFile] = useState(null);
  const [numQuestions, setNumQuestions] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleNumberChange = (e) => {
    setNumQuestions(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !numQuestions) {
      alert('Please upload a file and enter the number of questions.');
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('pdf', file);
    formData.append('numQuestions', numQuestions);

    try {
      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const questions = response.data.questions;
      if (questions.length > 0) {
        // Save questions to local storage or state management
        localStorage.setItem('questions', JSON.stringify(questions));
        navigate('/quiz');
      } else {
        alert('No questions generated. Please try again.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to upload file and generate questions.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-page">
      <h1>Upload PDF and Generate Questions</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf" onChange={handleFileChange} required />
        <input
          type="number"
          value={numQuestions}
          onChange={handleNumberChange}
          placeholder="Number of questions"
          min="1"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Generating...' : 'Generate Questions'}
        </button>
      </form>
    </div>
  );
};

export default Uploadpage;
