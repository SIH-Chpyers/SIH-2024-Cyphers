// src/components/QuizPage.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Quizpage = () => {
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedQuestions = JSON.parse(localStorage.getItem('questions'));
    if (storedQuestions) {
      setQuestions(storedQuestions);
    } else {
      navigate('/upload');
    }
  }, [navigate]);

  const handleOptionChange = (questionIndex, option) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionIndex]: option,
    }));
  };

  const handleSubmit = () => {
    navigate('/score', { state: { responses } });
  };

  return (
    <div className="quiz-page">
      <h1>Quiz</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        {questions.map((question, index) => (
          <div key={index} className="question">
            <p>{question.ques}</p>
            <div>
              {['o1', 'o2', 'o3', 'o4'].map((opt) => (
                <label key={opt}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={opt}
                    checked={responses[index] === opt}
                    onChange={() => handleOptionChange(index, opt)}
                  />
                  {question[opt]}
                </label>
              ))}
            </div>
          </div>
        ))}
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Quizpage;
