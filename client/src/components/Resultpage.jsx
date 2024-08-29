// src/components/ScorePage.js

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CircularProgressbar from 'react-circular-progressbar'; // Make sure to install this package
import './Quizz.css';

const Resultpage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const questions = JSON.parse(localStorage.getItem('questions'));
  const userResponses = state?.responses || {};
  const totalQuestions = questions.length;

  const correctAnswers = questions.filter(
    (question, index) => question.correct === userResponses[index]
  ).length;

  const scorePercentage = (correctAnswers / totalQuestions) * 100;

  return (
    <div className="score-page">
      <h1>Score</h1>
      <div className="score-summary">
        <CircularProgressbar
          value={scorePercentage}
          text={`${correctAnswers} / ${totalQuestions}`}
          styles={{
            path: { stroke: '#4db8ff' },
            text: { fill: '#4db8ff', fontSize: '24px' },
          }}
        />
        <div className="answers">
          <h2>Correct Answers</h2>
          {questions.map((question, index) => (
            <div key={index} className="answer">
              <p>{question.ques}</p>
              <p>Correct Answer: {question[question.correct]}</p>
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => navigate('/upload')}>Try Again</button>
    </div>
  );
};

export default Resultpage;
